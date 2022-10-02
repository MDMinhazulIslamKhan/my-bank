const balanceScreen = document.getElementById('balance-screen');
const withdrawScreen = document.getElementById('withdraw-screen');
const depositeScreen = document.getElementById('deposite-screen');


// bank.html
document.getElementById('balance-submit').addEventListener('click', function () {
    const amountBalance = document.getElementById('balance-amount');
    const currentScreenBalance = parseFloat(depositeScreen.innerText);
    if (isNaN(amountBalance.value) == true || amountBalance.value == '') {
        alert("Put your total balance");
    }
    else {
        balanceScreen.innerText = parseFloat(amountBalance.value);
        amountBalance.value = ''
        document.getElementById('balanceInput').style.display = 'none';
    }
})
document.getElementById('deposite-submit').addEventListener('click', function () {
    const amountDeposite = document.getElementById('deposite-amount');
    const currentScreenDeposite = parseFloat(depositeScreen.innerText);
    if (isNaN(amountDeposite.value) == true || amountDeposite.value == '') {
        alert("Put your deposite amount");
    }
    else {
        depositeScreen.innerText = parseFloat(amountDeposite.value) + currentScreenDeposite;
        balanceScreen.innerText = parseFloat(balanceScreen.innerText) + parseFloat(amountDeposite.value);
        amountDeposite.value = ''
    }
})

document.getElementById('withdraw-submit').addEventListener('click', function () {
    const amountWithdraw = document.getElementById('withdraw-amount');
    const currentScreenWithdraw = parseFloat(withdrawScreen.innerText);
    if (isNaN(amountWithdraw.value) == true || amountWithdraw.value == '') {
        alert("Put your withdraw amount");
    }
    else {
        withdrawScreen.innerText = parseFloat(amountWithdraw.value) + currentScreenWithdraw;
        balanceScreen.innerText = parseFloat(balanceScreen.innerText) - parseFloat(amountWithdraw.value);
        amountWithdraw.value = ''
    }
})