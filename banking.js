// bank.html
document.getElementById('deposite-submit').addEventListener('click', function () {
    const amountDeposite = document.getElementById('deposite-amount');
    const depositeScreen = document.getElementById('deposite-screen');
    const currentScreenDeposite = parseFloat(depositeScreen.innerText);
    depositeScreen.innerText = parseFloat(amountDeposite.value) + currentScreenDeposite; amountDeposite.value = ''
})

document.getElementById('withdraw-submit').addEventListener('click', function () {
    const amountWithdraw = document.getElementById('withdraw-amount');
    const withdrawScreen = document.getElementById('withdraw-screen');
    const currentScreenWithdraw = parseFloat(withdrawScreen.innerText);
    withdrawScreen.innerText = parseFloat(amountWithdraw.value) + currentScreenWithdraw; amountWithdraw.value = ''
})