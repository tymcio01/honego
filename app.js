// app.js
function register() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('User registered successfully!');
            showLogin();
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('User logged in successfully!');
            // Tutaj możesz przekierować użytkownika do innej strony lub wykonać inne akcje po zalogowaniu
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
