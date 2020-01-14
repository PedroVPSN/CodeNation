// building a cash machine

// type pin
// check balance
// withdraw cash
// receipt
// deposit (some machine, not all.)
// cancel
// change pin
// top up phone on some
// transfer money (legally or illegally)
// emergency cash
// charge people to withdraw their own money
// find you a husband (not wife)
// change language(easier than the husband one?)

let userBalance = 25
let userPin = 1234
let accountNumber = 987654321
let userInput;



const checkPin = (userInput) => {
    userInput = prompt("Please enter your Pin")
    console.log(userInput)
    if (userInput == userPin){
        options()
    }
    else {
        console.log("Please, enter the right pin")
    }
}

const options = () => {
    userInput = prompt("Welcome! Please Choose an option: \n1: check balance. \n2: withdraw. \n3: deposit . \n4: change Pin. \n5: cancel")
    if (userInput == 1){
        checkBalance()
    }
    else if (userInput == 2) {
        withdrawCash()
    }
    else if (userInput == 3) {
        depositCash()
    }
    else if (userInput == 4) {
        changePin()
    }
    else if (userInput == 5){
        console.log("Cancel")
    }
}

const checkBalance = () => {
    prompt(`Your balance is £${userBalance}.`)
}
const withdrawCash = () => {
    userInput = prompt("How much would you like to withdraw?")

    if (userInput > userBalance) {
        prompt("You do not have enough money.")
    }
    else if (userBalance - userInput ) {
        prompt(`You have taken £${userInput}. Your balance is now £${userBalance -= userInput}. \nWhat would you like to do next?`)
        options()
        
    }
}
const depositCash = () => {
    userInput = prompt("How much would you like to deposit?")
    userBalance += parseInt(userInput)
    alert(`You have deposited £${userInput}. Your new balance is now £${userBalance}`)
}
const changePin = () => {
    userInput = prompt("Please, enter your pin:")
    if (userInput == userPin){
        prompt("Please, enter your new pin:")
        userInput = userPin
    }
    else {
        prompt("Incorretct Pin, please try again.")
        prompt("Incorretct Pin, please try again.")
        prompt("Incorretct Pin, please try again.")
        alert("Incorrect Pin, please try again later")
    }
}

checkPin(1234)
