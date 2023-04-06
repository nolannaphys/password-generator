// Assignment code here
var characterLength = 8;
var choiceArray = [];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/', '=', '+', '-',];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
    var finalPassword = generatePassword();

    passwordText.value = finalPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters do you want your password? (8-128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a numeric value from 8 - 128. Please try again")
    return false;
  }
  if (confirm("Would you like to include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowerCase);
  }
  if (confirm("Would you like to include uppercase characters?")) {
    choiceArray = choiceArray.concat(upperCase);
  }
  if (confirm("Would you like to include special characters?")) {
    choiceArray = choiceArray.concat(specialChar);
  }
  if (confirm("Would you like to include numbers?")) {
    choiceArray = choiceArray.concat(numbers);
  }
  return true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Phone number genrator example from office hours

// function phoneNumberGenerator(){
//   console.log("Hi, I'm Phone Number Generator");
//   var phoneNumber = "";
//   var numberChoices = [0,1,2,3,4,5,6,7,8,9];

//   // A phone number is 10 digits long, so have it run that many times
//   for(var i = 0; i < 10; i++){
//     // Conditional to check when to add the hyphen
//     if(i===3 || i===6){
//       phoneNumber = phoneNumber + "-";
//     }
//     // Get a random number from 0 to the length of the array of choices
//     // Math.random() is a random number between 0 and 1. If you multiply that by
//     // the length of the array, that'll get you a random number between
//     // 0 and the length, which corresponds to a random index for our array.
//     var randomNumber = Math.floor(Math.random()*numberChoices.length);
//     // concat (add) to our phone number with a random element from our array
//     phoneNumber = phoneNumber + numberChoices[randomNumber];
//   }
//   // log the phone number
//   console.log(phoneNumber)
// }
// // remember to call the function to run it! 
// phoneNumberGenerator();