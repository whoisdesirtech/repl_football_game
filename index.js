let readlineSync = require("readline-sync");

// let colors = require('colors');


console.log( "Welcome to Your First Game As An NFL Rookie!" );
let rookieName = readlineSync.question( "What is your name? " );
console.log( "Hi " + rookieName + "!" );

console.log( "Pick a Jersey number!" );
let jerseyNumber = readlineSync.question( "What is your favorite number 1-100? " );
console.log( jerseyNumber + " is your jersey number!" );

console.log( "You need some cleats!" );
let shoeSize = readlineSync.question( "What size shoe fits you 4-30? " );
console.log( shoeSize + " is your shoe size!" );



console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: Go on the field, Interview with a reporter, Stay in locker room\?" );


const myFunction1 = () => {
  console.log('here goes this crazy amazing logix')
}

switch(option) {
  case "Go on the field":
    console.log( "You are ready for some football!" );
    myFunction1()
    break;
  case "Interview with a reporter":
    console.log( "Okay superstar!!" );
    break;
  case "Stay in locker Room?":
    console.log( "Locker Room: \"Are you afraid to play?.\"" );
    break;
    default:
      console.log("That's not a valid response!")
} 







// const playAgain = () => {
//   let playAgain = prompt.question('Do you want to play again? y || n \n');
//   playAgain = playAgain.toLowerCase();
//   if (playAgain === 'y') {

//   }
 