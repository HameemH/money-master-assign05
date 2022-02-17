function inputValue(inputId){
    const amountText = document.getElementById(inputId).value;
    const amount = parseFloat(amountText);
    return amount;
    
}
// handle basic calctulation 
document.getElementById('calculate').addEventListener('click', function(){
    // calling function to take input 
 const incomeAmount = inputValue('income-amount');
 const foodExpense = inputValue('food-amount');
 const rentExpense = inputValue('rent-amount');
 const clothExpense = inputValue('cloth-amount')

    // nested function and  basic calculations
  
 if(incomeAmount >= 0  && foodExpense >= 0 && rentExpense >= 0 && clothExpense >= 0){
    const totalExpenseText = document.getElementById('total-expense');
    const totalExpenseAmount = parseFloat(totalExpenseText);
    const newTotalExpenseAmont = foodExpense+ rentExpense +clothExpense;
        // bouns part error handle 
    if(newTotalExpenseAmont <= incomeAmount){
        totalExpenseText.innerText = newTotalExpenseAmont;
       const remainingBalanceText = document.getElementById('remaining-balance');
       const remainingBalanceAmount = parseFloat(remainingBalanceText);
       const RemainingBalance = incomeAmount - newTotalExpenseAmont;
        remainingBalanceText.innerText = RemainingBalance;
    }

    else{
        alert('You are spending too much')
    }
 }
  else if(incomeAmount <= 0  && foodExpense <= 0 && rentExpense <= 0 && clothExpense <= 0){
        alert('please put a valid number');  
    } 
 else{
     alert('please input a valid number')
 }
})


// handle saving calculation 
document.getElementById('savings').addEventListener('click', function(){
    //  declaring previous values 
    const incomeAmount = inputValue('income-amount');
    const remainingBalanceText = document.getElementById('remaining-balance').innerText;
    const remainingBalanceAmount = parseFloat(remainingBalanceText);
    // new values and  calculation
    const savingAmountText = document.getElementById('saving-amount');
    const savingPercentage = inputValue('saving-percent');
    const savingPercentageInitial = savingPercentage / 100;
    const savingAmount = incomeAmount * savingPercentageInitial;

        //bonus part alert messege 
    if(savingAmount < remainingBalanceAmount && incomeAmount>0){
        savingAmountText.innerText = savingAmount;
     const remainingBalAfterSaving = document.getElementById('amount-after-saving');
     const remainingBalAfterSavingAmount = remainingBalanceAmount - savingAmount;
     remainingBalAfterSaving.innerText = remainingBalAfterSavingAmount;

    }
    else if(incomeAmount>0){
        alert('you dont have enough money to save')
    }
    else{
        alert('please input a valid number')
    }
    

})