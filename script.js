/*Create an object called account that has the following properties: 

- accountName, should be the data type string 
This property should contain the name of the account holder

- balance, should be the data type number 
this property should contain the total amount of the account 
 
- getBalance, should be a function 

this function should display the total amount of the account to the user 

- deposit, also a function 

this function should be able to deposit money onto the balance of the account 

- withdrawal, also a function 

this function should be able do withdrawal money from the balance of the account 

- getAccountName, function as well 

this function should dispaly the account holders name to the user 

- accountError, same as above function! 

this one is a bit tricky... it's up to you to figure out how or what you should use this for. 

HINT: it's more a thinking poblem than a technical problem :) 

EXTRA: exitAccount, should be a function 

this function should exit the account 

HINT: there are a few different ways to do this, it's up to you which way you choose.*/

function atm() {
    // Create the account object
    const account = {
        accountName: "Carmelo",
        balance: 1000,

        // Function to get the balance
        getBalance: function() {
            console.log(`Your balance is: ${this.balance}`);
        },

        // Function to deposit money
        deposit: function(amount) {
            if (!isNaN(amount) && amount > 0) {
                this.balance += amount;
                console.log(`Deposit amount: ${amount}`);
                console.log(`Balance update: ${this.balance}`);
            } else {
                console.log("Invalid deposit amount.");
            }
        },

        // Function to withdraw money
        withdrawal: function(amount) {
            if (!isNaN(amount) && amount > 0) {
                if (amount <= this.balance) {
                    this.balance -= amount;
                    console.log(`Withdrawal amount: ${amount}`);
                    console.log(`Balance update: ${this.balance}`);
                } else {
                    console.log(`Not possible to withdraw. Balance amount: ${this.balance}`);
                }
            } else {
                console.log("Invalid withdrawal amount.");
            }
        },

        // Function to get the account name
        getAccountName: function() {
            console.log(`Account holder is: ${this.accountName}`);
        },

        // Function to display account error
        accountError: function(errorMessage) {
            console.log(`Error: ${errorMessage}`);
        },

        // Function to exit the account
        exitAccount: function() {
            console.log("Goodbye! Thank you for using the ATM.");
            return true;
        }
    };

    let message;

    // ATM operation loop
    do {
        message = parseFloat(
            prompt("Operation: 1.) Get balance, 2.) Deposit, 3.) Withdrawal, 4.) Account name, 5.) Exit operation")
        );

        switch (message) {
            case 1:

                // Get and display balance
                account.getBalance();
                break;

            case 2: {

                // Deposit money
                let depositAmount = parseFloat(prompt("Insert deposit amount"));
                account.deposit(depositAmount);
                break;
            }

            case 3: {

                // Withdraw money
                let withdrawalAmount = parseFloat(prompt("Insert withdrawal amount"));
                account.withdrawal(withdrawalAmount);
                break;
            }

            case 4:

                // Display account name
                account.getAccountName();
                break;

            case 5:

                // Set message to exit the loop
                if (account.exitAccount()) {
                    message = 5;
                }
                break;

            default:
                account.accountError("Invalid option. Please choose a valid operation.");
                break;
        }

    } while (message !== 5);  
}

//Start the program
atm();
