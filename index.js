/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const billion = 1000000000;

let newID = oldID + billion
let ageIsValid = Number.isInteger(currentAge);
let randomNumber = Math.random(0, 20);
let randomInteger = Math.floor(randomNumber);
let randomUserID = randomInteger + (billion + 1)
