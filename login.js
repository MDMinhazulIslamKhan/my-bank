document.getElementById('login-submit').addEventListener('click', function () {
    const emailAddress = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    if (emailAddress == 'abu@gmail.com' && loginPassword == 'abusayeed') {
        window.location.href = 'bank.html'
    }
    else {
        alert("Your email or password is not matching, আপনি কি একজন চোর?");
    }
})
