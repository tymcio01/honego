// Rejestracja użytkownika
function register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            alert('User registered successfully!');
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
            var user = userCredential.user;
            alert('User logged in successfully!');
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
        alert('User logged out successfully!');
    }).catch((error) => {
        alert('Error: ' + error.message);
    });
}
