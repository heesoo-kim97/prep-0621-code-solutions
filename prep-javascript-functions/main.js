function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}
var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}
var total = addAndMultiplyBy5(10, 5);
console.log('add and mutiply by 5: ', total);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}
var outcome = multiplyAndDivideBy5(35, 10);
console.log('multiply and divide by 5 result: ', outcome);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}
var subtraction = subtractTwoNumbers(22, 7);
console.log('Two numbers subtracted: ', subtraction);

function getCircleCircumference(radius) {
  var result = 2 * Math.PI * radius;
  return result;
}
var circle = getCircleCircumference(5);
console.log('the circumference is: ', circle);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}
var myName = getFullName('Heesoo', 'Kim');
console.log('My name is: ', myName);

function cube(number) {
  var result = (number * number * number);
  return result;
}
var cubed = cube(5);
console.log('The cubed result is: ', cubed);
