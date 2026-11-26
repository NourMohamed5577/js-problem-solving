// 1. Personalized Greeting
// Ask user for their name and age, then display a personalized message using console.log()
/*
const userName = prompt("Enter your name:");
const userAge = Number(prompt("Enter your age:"));
const currentYear = new Date().getFullYear();
const birthYear = currentYear - userAge;
console.log("Hello " + userName + "! You are " + userAge + " years old and you were born around " + birthYear);
*/

// 2. Currency Converter
// Currency converter: get amount in EGP, convert to USD, EUR, GBP. USD=47.22, EUR=54.35, GBP=61.95
/*
const egp = Number(prompt("Enter amount in EGP:"));
const usdRate = 47.22;
const eurRate = 54.35;
const gbpRate = 61.95;
const usd = (egp / usdRate).toFixed(2);
const eur = (egp / eurRate).toFixed(2);
const gbp = (egp / gbpRate).toFixed(2);
console.log(egp + " EGP = $" + usd + " USD, €" + eur + " EUR, £" + gbp + " GBP");
*/

// 3. Even or Odd Checker
// Get a number from user, check if it's even or odd, display result
/*
const numCheck = Number(prompt("Enter a number:"));
if (numCheck % 2 === 0) {
  console.log(numCheck + " is an even number");
} else {
  console.log(numCheck + " is an odd number");
}
*/

// 4. Time of Day Greeting
// Declare a variable hour and assign it a number between 0 and 23. Use an if-else if-else statement to log "Good morning!" (0-11), "Good afternoon!" (12-17), or "Good evening!" (18-23)
/*
const hour = 14;
if (hour >= 0 && hour <= 11) {
  console.log("Good morning!");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon!");
} else if (hour >= 18 && hour <= 23) {
  console.log("Good evening!");
} else {
  console.log("Invalid hour");
}
*/

// 5. Average Score Calculator
// Ask for three subject scores, calculate average and display pass/fail status (pass >= 50)
/*
const score1 = Number(prompt("Enter score 1:"));
const score2 = Number(prompt("Enter score 2:"));
const score3 = Number(prompt("Enter score 3:"));
const average = (score1 + score2 + score3) / 3;
let status = "Fail";
if (average >= 50) {
  status = "Pass";
}
console.log("Average: " + average.toFixed(2) + ", Status: " + status);
*/

// 6. Simple Calculator
// Get two numbers and an operator (+,-,*,/), perform calculation and display result
/*
const calcNum1 = Number(prompt("Enter first number:"));
const calcNum2 = Number(prompt("Enter second number:"));
const operator = prompt("Enter an operator (+, -, *, /):");
let calcResult;
switch (operator) {
  case "+":
    calcResult = calcNum1 + calcNum2;
    console.log(calcNum1 + " + " + calcNum2 + " = " + calcResult);
    break;
  case "-":
    calcResult = calcNum1 - calcNum2;
    console.log(calcNum1 + " - " + calcNum2 + " = " + calcResult);
    break;
  case "*":
    calcResult = calcNum1 * calcNum2;
    console.log(calcNum1 + " * " + calcNum2 + " = " + calcResult);
    break;
  case "/":
    calcResult = calcNum2 !== 0 ? calcNum1 / calcNum2 : "Undefined (division by zero)";
    console.log(calcNum1 + " / " + calcNum2 + " = " + calcResult);
    break;
  default:
    console.log("Invalid operator");
}
*/

// 7. Multiplication Table
// Get a number, print its multiplication table from 1 to 10 with formatting
/*
const tableNum = Number(prompt("Enter a number for multiplication table:"));
for (let i = 1; i <= 10; i++) {
  console.log(tableNum + " x " + i + " = " + (tableNum * i));
}
*/

// 8. Even Numbers Printer
// Use a for loop to print even numbers from 2 to 10
/*
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
*/

// 9. Factorial Calculator
// Use a for loop to calculate the factorial of 5 (5*4*3*2*1). Log the final result, not the intermediate steps
/*
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(factorial);
*/

// 10. Smallest Integer Finder
// Use a while loop to find the smallest integer n such that n*n is greater than 50. Log n
/*
let n = 1;
while (n * n <= 50) {
  n++;
}
console.log(n);
*/

// 11. Value Swapper
// Get two numbers from user, swap their values without using a third variable, display them after swapping
/*
let swapNum1 = Number(prompt("Enter first number:"));
let swapNum2 = Number(prompt("Enter second number:"));
swapNum1 = swapNum1 + swapNum2;
swapNum2 = swapNum1 - swapNum2;
swapNum1 = swapNum1 - swapNum2;
console.log("After Swapping: num1=" + swapNum1 + ", num2=" + swapNum2);
*/

// 12. Movie Access Checker
// Get user age and ticket status, determine if can enter movie (age >= 18 OR hasTicket)
/*
const movieAge = Number(prompt("Enter your age:"));
const ticketInput = prompt("Do you have a ticket? (yes/no)").toLowerCase();
const hasTicket = Boolean(ticketInput === "yes" || ticketInput === "true");
let accessGranted = false;
if (movieAge >= 18 || hasTicket) {
  accessGranted = true;
}
console.log("Access granted: " + accessGranted);
*/

// 13. Largest Number Finder
// Get three numbers, find and display the largest using nested if statements
/*
const a = Number(prompt("Enter first number:"));
const b = Number(prompt("Enter second number:"));
const c = Number(prompt("Enter third number:"));
let largest;
if (a >= b) {
  if (a >= c) {
    largest = a;
  } else {
    largest = c;
  }
} else {
  if (b >= c) {
    largest = b;
  } else {
    largest = c;
  }
}
console.log("Largest number is: " + largest);
*/

// 14. Salary Calculator
// Ask for hours worked and hourly rate, calculate salary with overtime (>40 hrs = 1.5x rate)
/*
const hours = Number(prompt("Enter hours worked:"));
const rate = Number(prompt("Enter hourly rate:"));
let regularPay;
let overtimePay = 0;
if (hours > 40) {
  regularPay = 40 * rate;
  overtimePay = (hours - 40) * rate * 1.5;
} else {
  regularPay = hours * rate;
}
const totalPay = regularPay + overtimePay;
console.log("Regular: $" + regularPay + ", Overtime: $" + overtimePay + ", Total: $" + totalPay);
*/

// 15. BMI Calculator
// BMI Calculator: get weight(kg) and height(m), calculate BMI, categorize. Categories: Underweight(<18.5), Normal (18.5-24.9), Overweight(25-29.9), Obese(30+)
/*
const weight = Number(prompt("Enter weight in kg:"));
const height = Number(prompt("Enter height in meters:"));
const bmi = weight / (height * height);
let category;
if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 25) {
  category = "Normal weight";
} else if (bmi < 30) {
  category = "Overweight";
} else {
  category = "Obese";
}
console.log("BMI: " + bmi.toFixed(2) + "\n" + category);
*/

// 16. Shopping Cart Total
// Get purchase amount, calculate tax (10%), discount if > $100 (5% off), final price
/*
const amount = Number(prompt("Enter purchase amount:"));
const tax = amount * 0.10;
let discount = 0;
if (amount > 100) {
  discount = amount * 0.05;
}
const finalPrice = amount + tax - discount;
console.log("Subtotal: $" + amount + ", Tax: $" + tax + ", Discount: $" + discount + ", Final: $" + finalPrice);
*/

// 17. ATM Simulator
// Create a simple ATM: get operation (1:Balance, 2:Withdraw, 3:Deposit) and amount, process it
/*
let currentBalance = 500;
const operation = Number(prompt("Choose operation (1: Balance, 2: Withdraw, 3: Deposit):"));
let atmAmount = 0;
if (operation === 2 || operation === 3) {
  atmAmount = Number(prompt("Enter amount:"));
}
switch (operation) {
  case 1:
    console.log("Your balance is: $" + currentBalance);
    break;
  case 2:
    if (atmAmount <= currentBalance) {
      currentBalance -= atmAmount;
      console.log("Withdrew $" + atmAmount + ". New balance: $" + currentBalance);
    } else {
      console.log("Insufficient balance. Current balance: $" + currentBalance);
    }
    break;
  case 3:
    currentBalance += atmAmount;
    console.log("Deposited $" + atmAmount + ". New balance: $" + currentBalance);
    break;
  default:
    console.log("Invalid operation");
}
*/

// 18. FizzBuzz
// Print numbers 1-100, but for multiples of 3 print 'Fizz', for 5 print 'Buzz', for both print 'FizzBuzz'
/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

// 19. Star Pattern Printer
// The Left Triangular Star Pattern involves printing a series of stars in a left-aligned triangular shape. As you progress through the pattern, the number of stars per line increases incrementally, forming a triangular structure.
/*
const rows = Number(prompt("Enter number of rows:"));
for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
*/

// 20. Sum of Digits
// Get a number from the user and add up all of its digits. Use a loop to take the digits one by one, convert each to a number, keep a running total, then display the sum.
/*
const digitInput = prompt("Enter a number:");
let digitSum = 0;
for (let i = 0; i < digitInput.length; i++) {
  digitSum += Number(digitInput[i]);
}
console.log("Sum of digits: " + digitSum);
*/