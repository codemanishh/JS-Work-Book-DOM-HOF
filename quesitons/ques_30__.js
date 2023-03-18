// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const tsk = prompt("Enter task which you want to perform ==>| +, -, *, / |<==");

let ans;

switch (tsk) {
  case "+":
    ans = num1 + num2;
    break;
  case "-":
    ans = num1 - num2;
    break;
  case "*":
    ans = num1 * num2;
    break;
  case "/":
    ans = num1 / num2;
    break;
  default:
    console.log("invalid entry hai");
    break;
}

console.log(`${num1} ${tsk} ${num2} = ${ans}`);
