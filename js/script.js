document.getElementById('calc-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const income = parseFloat(incomeInputText);
    incomeInput.value = '';

    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodCost = parseFloat(foodInputText);
    foodInput.value = '';

    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentCost = parseFloat(rentInputText);
    rentInput.value = '';

    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = clothesInput.value;
    const clothesCost = parseFloat(clothesInputText);
    clothesInput.value = '';

    const totalExpense = foodCost + rentCost + clothesCost;
    const totalExpenseText = document.getElementById('total-money');
    totalExpenseText.innerText = totalExpense;
    const balance = income - totalExpense;
    const balanceText = document.getElementById('balance-money');
    balanceText.innerText = balance;

})
// function calculateBalance(){

// }

document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const saveMoney = parseFloat(saveInputText);
    const balance = document.getElementById('balance-money');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    const saveAmount = (balanceAmount * saveMoney) / 100;
    const savings = document.getElementById('save-money');
    savings.innerText = saveAmount;
    saveInput.value = '';
    const remainAmount = balanceAmount - saveAmount;
    const remaining = document.getElementById('remain-money');
    remaining.innerText = remainAmount;
    

})