const readlineSync =require('readline-sync');
const firstNum = readlineSync.questionInt("please enter your first number ")
const secondNum = readlineSync.questionInt("please enter your second number ")
const enteredOperation = readlineSync.question("please enter the operation to perform: add, sub, mul, div ");

function addTwoNumbers(num1, num2){
    return num1 + num2
}
function multiplyTwoNumbers(num1, num2){
    return num1 * num2
}
function subtractTwoNumbers(num1, num2){
    return num1 - num2
}
function divideTwoNumbers(num1, num2){
    return num1 / num2
}

function myCustomCalculator(num1, num2, operation){
    if(operation == "add"){
        console.log(addTwoNumbers(num1, num2));
    }
    else if(operation == "sub"){
        console.log(subtractTwoNumbers(num1, num2))
    }
    else if(operation =="mul"){
        console.log(multiplyTwoNumbers(num1, num2))
    }
    else if(operation == "div"){
        console.log(divideTwoNumbers(num1, num2))
    }
}
myCustomCalculator(firstNum, secondNum, enteredOperation);