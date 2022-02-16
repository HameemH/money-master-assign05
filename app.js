function inputValue(inputId){
    const amountText = document.getElementById(inputId).value;
    const amount = parseFloat(amountText);
    return amount;
}

document.getElementById('calculate').addEventListener('click', function(){
 const incomeAmount = inputValue('income-amount')
 
 const totalExpense = document.getElementById('total-expense');
 totalExpense.innerText = incomeAmount;


})