function inputValue(inputId){
    const amountText = document.getElementById(inputId).value;
    const amount = parseFloat(amountText);
    return amount;
}

document.getElementById('calculate').addEventListener('click', function(){
    
 const incomeAmount = inputValue('income-amount');
 const foodExpense = inputValue('food-amount');
 const rentExpense = inputValue('rent-amount');
 const clothExpense = inputValue('cloth-amount')
 const totalExpenseText = document.getElementById('total-expense');
 const totalExpenseAmount = parseFloat(totalExpenseText);
 const newTotalExpenseAmont = foodExpense+ rentExpense +clothExpense;
 totalExpenseText.innerText = newTotalExpenseAmont;

 const remainingBalanceText = document.getElementById('remaining-balance');
 const remainingBalanceAmount = parseFloat(remainingBalanceText);
 const RemainingBalance = incomeAmount - newTotalExpenseAmont;
 
 remainingBalanceText.innerText = RemainingBalance;

 
 
 
 



})