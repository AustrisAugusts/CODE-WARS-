//https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
//We need a function that can transform a string into a number. What ways of achieving this do you know?
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

var stringToNumber = function(str){
  return parseInt(str);
}

const test = stringToNumber("1234");

console.log(test);
