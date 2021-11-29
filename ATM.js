
const input = require("readline-sync");
console.log('Welcome to ATM')
console.log('Please enter your card')
let Balance = 10000;
let language = input.question("Enter your language Hindi or English: ")
if (language == 'Hindi') {
   console.log('Hindi is not available')
}
else if (language == 'English') {
   let pin = input.question('Enter your pin');
   if (pin == '3456') {
       console.log('your pin is correct')
       console.log('1.CASH WITHDRAWAL \n 2.BALANCE INQUIRY')
       let option1 = input.question('Enter option anyone 1 or 2: ')
       if (option1 == '1') {
           console.log('CASH WITHDRAWAL')
           console.log('1.SAVING \n 2.CURRENT \n 3.CREDIT')
           let option2 = input.question('Enter your option 1 or 2 or 3 : ')
           if (option2 == '1') {
               console.log('your saving', Balance, 'balance');
           }
           else if (option2 == '2') {
               console.log('CURRENT');
               let transaction = input.question('Enter your Amount : ')
               if (transaction <= balance) {
                   console.log(`your transaction is being processed \n 
                                      Please wait \n Now in your account                          
                                      ${balance - transaction} left`)
               }
               else if (transaction > balance) {
                   console.log('In your account no extra transaction')
               }
               else if (option2 == '3') {
                   console.log('CURRENT');
                   let transaction = input.question('Enter your Amount : ')
                   if (transaction <= balance) {
                       console.log(`your transaction is being processed \n 
                                      Please wait \n Now in your account                          
                                      ${balance - transaction} left `)
                   }
                   else if (transaction > balance) {
                       console.log('In your account no extra transaction')
                   }
               }
               else if (option1 == '2') {
                   console.log('BALANCE INQUIRY')
                   console.log('you have', balance, 'balance')
               }
           }
           else {
               console.log('pin is not correct');
               console.log('atm card blocked');
           }
       }
   }
}


    




















