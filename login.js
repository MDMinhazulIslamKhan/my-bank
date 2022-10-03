document.getElementById('login-submit').addEventListener('click', function () {
    const emailAddress = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    if ((emailAddress == 'abu@gmail.com' && loginPassword == 'abusayeed') || (emailAddress == 'shaha@gmail.com' && loginPassword == 'shahariar') || (emailAddress == 'a' && loginPassword == 'a') || (emailAddress == 'fahim@gmail.com' && loginPassword == 'fahim')) {
        window.location.href = 'bank.html'
    }
    else {
        alert("Your email or password is not matching, আপনি কি একজন চোর?");
    }
})
