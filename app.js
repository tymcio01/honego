// Rejestracja użytkownika
function register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Użytkownik zarejestrowany, przekierowanie do dashboard.html
            window.location.assign('dashboard.html');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
}

// Logowanie użytkownika
function login(email, password) {
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

// Wylogowywanie użytkownika
function logout() {
    firebase.auth().signOut().then(() => {
        // Użytkownik wylogowany, przekierowanie do strony głównej
        window.location.assign('index.html');
    }).catch((error) => {
        alert('Error: ' + error.message);
    });
}
