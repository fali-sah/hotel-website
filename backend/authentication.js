console.log("Authentication Start");
const registration = document.getElementById('register-account');
const login = document.getElementById('l-btn');

registration.addEventListener('click', (e) => {

    const email = document.getElementById('email').value;
    const pwd = document.getElementById('password').value;
    const cpwd = document.getElementById('cpassword').value;

    //  condition
    if (email == "" || pwd == "" || cpwd == "") {
        alert('fill all details');
    }
    else if (pwd != cpwd) {
        alert('password not match');
    }
    else {
        console.log(email + " " + pwd);
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(user);
                window.location.href = 'login.html';
                email.value = '';
                pwd.value = '';
                cpwd.value = '';
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    e.preventDefault();

})
login.addEventListener('click', (e) => {
    const email = document.getElementById('l-email').value;
    const pwd = document.getElementById('l-pwd').value;
    if (email == '' || pwd == '') {
        alert('Enter Your email and password');
    }
    else {
        console.log(email + " " + pwd);
        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    e.preventDefault();
})

function signout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = 'login.html';
    }).catch((error) => {
        // An error happened.
    });
}
