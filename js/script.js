document.getElementById('calc-btn').addEventListener('click', function () {

    const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText);


    if (income >= 0) {
        calculation();
    }
    else {
        const inputError = document.getElementById('input-error');
        inputError.style.display = 'block';
    }
  
})
function getCost(inputName) {
    const costInput = document.getElementById(inputName + '-input');
    const costText = costInput.value;
    const cost = parseFloat(costText);
    costInput.value = '';
    return cost;
}
function calculation() {
    const totalExpense =
        getCost('food') +
        getCost('rent') +
        getCost('clothes');

    const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText);
    if (totalExpense < income) {
        const totalExpenseText = document.getElementById('total-money');
        totalExpenseText.innerText = totalExpense;
        const balanceAmount = income - totalExpense;
        const balanceText = document.getElementById('balance-money');
        balanceText.innerText = balanceAmount;
    }
    else {
        getCost('income');
        const expenseError = document.getElementById('expense-error');
        expenseError.style.display = 'block';
    }
}

document.getElementById('save-btn').addEventListener('click', function () {
    const balanceText = document.getElementById('balance-money');
    const balanceAmountText = balanceText.innerText;
    const balanceAmount = parseFloat(balanceAmountText);

    const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText);

    const saveMoney = getCost('save');
    const saveAmount = (income * saveMoney) / 100;
    if (saveAmount <= balanceAmount) {
        const savings = document.getElementById('save-money');
        savings.innerText = saveAmount;
        const remainAmount = balanceAmount - saveAmount;
        const remaining = document.getElementById('remain-money');
        remaining.innerText = remainAmount;
    }
    else {
        const saveError = document.getElementById('save-error');
        saveError.style.display = 'block';
    }
})