document.getElementById('login-submit').addEventListener('click', function () {
    const emailAddress = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    if (emailAddress == 'abc' && loginPassword == 'fy') {
        window.location.href = 'bank.html'
    }
})