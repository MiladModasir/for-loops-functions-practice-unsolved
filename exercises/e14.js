
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let incorrectAccounts = [];
  for (let i = 0; i < array.length; i++) {
    let totalDeposits = 0;  
    let totalWithdrawals = 0;  
    if (Array.isArray(array[i].deposits)) {  
      for (let j = 0; j < array[i].deposits.length; j++) {
        totalDeposits += array[i].deposits[j]; 
      }
    }
    if (Array.isArray(array[i].withdrawals)) { 
      for (let j = 0; j < array[i].withdrawals.length; j++) {
        totalWithdrawals += array[i].withdrawals[j];  
      }
    }
    let expectedBalance = totalDeposits - totalWithdrawals;  
    if (expectedBalance !== array[i].balance) {  
      incorrectAccounts.push(array[i]);  
    }
  }

  return incorrectAccounts;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
