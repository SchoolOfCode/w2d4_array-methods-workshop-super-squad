let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
//let input = [3, 5, 60, 90];
let three = 3;
let five = 5;
let sixty = 60;
let ninety = 90;

function multiplesOfThree(input) {
  return input % three === 0;
}
console.log(someNumbers.some(multiplesOfThree));
function multiplesOfFive(input) {
  return input % five === 0;
}
console.log(someNumbers.some(multiplesOfFive));
function multiplesOfSixty(input) {
  return input % sixty === 0;
}
console.log(someNumbers.some(multiplesOfSixty));
function multiplesOfNinety(input) {
  return input % ninety === 0;
}
console.log(someNumbers.some(multiplesOfNinety));

//some(multiplesOfOthers, input);
