console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName("Abdirizak")); // Hello, Abdirizak!

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(3,5)); // 8

// 4. Function to multiply three numbers & return the result
function multiplyThree(a,b,c) {
  return a * b * c;

}
    //  check
console.log(multiplyThree(3,5,10)); // 150
console.log(multiplyThree(7,15,80)); // 8400


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0 ) {
    return true;
  }
  return false
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


      // Check
      console.log(isPositive(5));  // True
      console.log(isPositive(0));  // False
      console.log(isPositive(-5));   // False


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
if(i = array[array.length -1 ]){
  return i;

} else if (array.length === 0){
  return undefined;
}
else{
  return null;  // Added because i didn't wanted to END without ELSE statement! Even though it won't be executed!
}
}
    //  Check
console.log("Last item in the array is:",  getLast([5,7,8,12])) // 12

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
for(let item of array){
  if (value === item){
    return true;
  }

}
return false
}   

    // Check
    console.log(find(3, [1, 2, 7, 4, 5]));  // false
    console.log(find(3, [1, 2, "3", 4, 5]));  // false
    console.log(find("c",[ "a","b","c","d"])); //true
    console.log(find("c",[ "a","b","f","d"])); //false


    console.log("*********") // divider for the console
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 if (string.length === 0){  //checks if it empty string
  return false
 }
 else if( string[0]=== letter){ // checks if 1st letter of the str is same as letter
  return true;
 }
 else{
  return false;   //checks any other case 
 }
}
console.log('is there Char?:',isFirstLetter("a", "")) // false
console.log('Are they same:',isFirstLetter("a", "apple"))  //true
console.log('Are they same:',isFirstLetter("a", "Mango")) //false


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;

  // TODO: loop to add items
for(let i = 0; i<array.length; i++){
  sum = array[i]+ sum;

}
  // TODO: return the sum
  return sum;
}
console.log( sumAll([2,3,4])); // 9
console.log( sumAll([20,35,45])); // 100

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  let newArr = [];
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] > 0){
      newArr.push(inputArray[i]);
    }
  }
 
  return newArr;


}
console.log(allPositive([2,3,5,6,-2,-3,-5,-6])) // [2,3,5,6]

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

  // *** COPY of the Instructions from the edabit Challenges below! **

  // Create a function that takes a number as an argument. 
  // Add up all the numbers from 1 to the number you passed to the function. 
  // For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
    
  // *** SOLUTION ***

 function addUp (num){
  let sum = 0;
  for (let i =1; i<= num; i++){  // Looping through 'num' in this case from 1 to 4;
    sum += i;
  }
  return sum;
 }
   
console.log("*********") // divider for the console


  // Check
 console.log(addUp(4)) // (1+2+3+4) then it prints 10
 console.log(addUp(5)) // (1+2+3+4+5) then it prints 15



// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
