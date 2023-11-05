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
            // Użytkownik zarejestrowany, przekierowanie do dashboard.html
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
            // Wyświetlanie błędu
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

// Zabezpieczenie przed uruchomieniem skryptu przed załadowaniem strony
document.addEventListener('DOMContentLoaded', function() {
    // Tutaj można dodać dodatkowe inicjalizacje, jeśli są potrzebne
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Użytkownik jest zalogowany
    // Możesz tutaj pobrać i wyświetlić dane użytkownika lub przekierować do innej strony
  } else {
    // Użytkownik jest wylogowany
    // Możesz wyświetlić formularz logowania lub przekierować do strony logowania
  }
});

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Tutaj dodaj użytkownika do Firestore
    var user = userCredential.user;
    db.collection("users").doc(user.uid).set({
      email: user.email,
      // inne dane użytkownika
    });
    // Kontynuacja po pomyślnej rejestracji
  })
  .catch((error) => {
    // Obsługa błędów rejestracji
  });

// Przykładowe przekierowanie po zalogowaniu
if (user) {
  window.location.href = 'index.html'; // Przekieruj na stronę główną
}
