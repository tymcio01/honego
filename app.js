// Rejestracja użytkownika
function register(email, password) {
    console.log("Login function called");
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Redirecting to dashboard");
            // Użytkownik zarejestrowany, bezpośrednie przekierowanie do dashboard.html
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
}

// Logowanie użytkownika
function login(email, password) {
    console.log("Login function called");
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Redirecting to dashboard");
            // Użytkownik zalogowany, bezpośrednie przekierowanie do dashboard.html
            window.location.href = 'dashboard.html';
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
