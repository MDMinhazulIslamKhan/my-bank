const screenBalance = document.getElementById('balance-screen');

// working function
function sendingVAlue(amount, whichWork) {
    const screenDeposite = document.getElementById('deposite-screen');
    const screenWithdraw = document.getElementById('withdraw-screen');
    // deposite
    if (whichWork == 'deposite') {
        screenDeposite.innerText = parseFloat(amount.value) + parseFloat(screenDeposite.innerText);
        screenBalance.innerText = parseFloat(screenBalance.innerText) + parseFloat(amount.value);
        amount.value = ''
    }
    // withdraw
    else if (whichWork == 'withdraw') {
        screenWithdraw.innerText = parseFloat(amount.value) + parseFloat(screenWithdraw.innerText);
        screenBalance.innerText = parseFloat(screenBalance.innerText) - parseFloat(amount.value);
        amount.value = ''
    }
    // balance
    else {
        screenBalance.innerText = parseFloat(amount.value) + parseFloat(screenBalance.innerText);
        document.getElementById('balanceInput').style.display = 'none';
    }
}


// deposite work
document.getElementById('deposite-submit').addEventListener('click', function () {
    const amount = document.getElementById('deposite-amount');
    if (parseFloat(amount.value) >= 0) {
        sendingVAlue(amount, 'deposite');
    }
    else alert('Put your deposite amount')
})
// withdraw work
document.getElementById('withdraw-submit').addEventListener('click', function () {
    const amount = document.getElementById('withdraw-amount');
    if (parseFloat(amount.value) >= 0 && parseFloat(amount.value) <= parseFloat(screenBalance.innerText)) {
        sendingVAlue(amount, 'withdraw');
    }
    else if (parseFloat(amount.value) > parseFloat(screenBalance.innerText)) {
        alert('শাওয়া তোমার টাকা নাই')
    }
    else alert('Put your withdraw amount')
})
// balance work
document.getElementById('balance-submit').addEventListener('click', function () {
    const amount = document.getElementById('balance-amount');
    if (parseFloat(amount.value) >= 0) {
        sendingVAlue(amount, 'balance');
    }
    else alert('Put your balance')
})