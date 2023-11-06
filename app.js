// Zdefiniuj konfigurację Firebase tutaj
var firebaseConfig = {
  apiKey: "AIzaSyDd_qtDIeM4Uy4HQdUPr_vIrmwc-Tve_RU",
        authDomain: "honego-52c31.firebaseapp.com",
        projectId: "honego-52c31",
        storageBucket: "honego-52c31.appspot.com",
        messagingSenderId: "897927654843",
        appId: "1:897927654843:web:54bf5b398542dfd076a89e"

};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);

// Inicjalizacja Firestore
const db = firebase.firestore();

// Funkcje zarządzania widocznością formularzy
function showSignup() {
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
}

function showLogin() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

// Funkcja rejestracji użytkownika
function register() {
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Użytkownik zarejestrowany, dodaj go do Firestore
      var user = userCredential.user;
      return db.collection("users").doc(user.uid).set({
        email: user.email,
        // inne dane użytkownika
      });
    })
    .then(() => {
      // Przekierowanie do dashboard.html po pomyślnej rejestracji i dodaniu do Firestore
      window.location.assign('dashboard.html');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Wyświetlanie błędu
      alert('Error: ' + errorMessage);
    });
}

// Funkcja logowania użytkownika
function login() {
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Użytkownik zalogowany, przekierowanie do dashboard.html
      window.location.assign('dashboard.html');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Error: ' + errorMessage);
    });
}

// Funkcja wylogowywania użytkownika
function logout() {
  firebase.auth().signOut().then(() => {
    // Użytkownik wylogowany, przekierowanie do index.html
    window.location.assign('index.html');
  }).catch((error) => {
    // Wyświetlanie błędu
    alert('Error: ' + error.message);
  });
}

// Słuchacz stanu autentykacji
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Użytkownik jest zalogowany
    console.log("Użytkownik jest zalogowany:", user);
  } else {
    // Użytkownik jest wylogowany
    console.log("Użytkownik jest wylogowany");
  }
});

// Zabezpieczenie przed uruchomieniem skryptu przed załadowaniem strony
document.addEventListener('DOMContentLoaded', function() {
  // Przypisanie obsługi zdarzeń do formularzy
  document.getElementById('formSignup').addEventListener('submit', function(event) {
    event.preventDefault();
    register();
  });

  document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
  });
});
