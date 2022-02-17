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
 if(incomeAmount < 0 || foodExpense < 0 || rentExpense < 0 || clothExpense < 0){
     alert('please put a positive number');
    
 }
 
 else{
    const totalExpenseText = document.getElementById('total-expense');
    const totalExpenseAmount = parseFloat(totalExpenseText);
    const newTotalExpenseAmont = foodExpense+ rentExpense +clothExpense;
    totalExpenseText.innerText = newTotalExpenseAmont;
   
    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalanceAmount = parseFloat(remainingBalanceText);
    const RemainingBalance = incomeAmount - newTotalExpenseAmont;
    
    remainingBalanceText.innerText = RemainingBalance;

 }
})

document.getElementById('savings').addEventListener('click', function(){
    const incomeAmount = inputValue('income-amount');
    const savingPercentage = inputValue('saving-percent');
    const savingAmountText = document.getElementById('saving-amount');
    const savingInitial = savingPercentage / 100;
    const savingAmount = incomeAmount * savingInitial;
    savingAmountText.innerText = savingAmount;


     const remainingBalAfterSaving = document.getElementById('amount-after-saving');
     const remainingBalanceText = document.getElementById('remaining-balance').innerText;
    const remainingBalanceAmount = parseFloat(remainingBalanceText);
     const remainingBalAfterSavingAmount = remainingBalanceAmount - savingAmount;
     remainingBalAfterSaving.innerText = remainingBalAfterSavingAmount;

})