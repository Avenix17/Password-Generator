// Assignment code here

var passwordlength = 0;
var symbolConfirm;
var upperConfirm;
var lowerConfirm;
var numConfirm;

symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// console.log(symbol)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  while(passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
  passwordlength = Number(prompt("Choose password length: 8 - 128 characters"));
  }
  console.log(passwordlength);
  symbolConfirm = confirm("Would you like Symbols?");
  console.log(symbolConfirm);
  upperConfirm = confirm("Would you like Uppercase letters?");
  console.log(upperConfirm);
  lowerConfirm = confirm("Would you like Lowercase letters?");
  console.log(lowerConfirm);
  numConfirm = confirm("Would you like Numbers?");
  console.log(numConfirm);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//PsuedoCode

//Prompt user to choose between 8 and 128 characters
  //if they input number outside of range or leave empty; say "Invalid answer" and loop prompt till correct input is given
      //use a loop in this area

//Confirm whether user would like symbols, Upper, Lower, or numbers within their password
  // use if statements to determine whether the user's choices are used or not

//Created Password is then written to the page or as an alert for the user to view