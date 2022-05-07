
var passwordlength;
var symbolConfirm;
var upperConfirm;
var lowerConfirm;
var numConfirm;
var charChoice;

symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var generateBtn = document.querySelector("#generate");



function generatePassword() {
  passwordlength = 0;
  while(passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
  passwordlength = Number(prompt("Choose password length: 8 - 128 characters"));
  }

  while(!lowerConfirm && !upperConfirm && !symbolConfirm && !numConfirm) {
    lowerConfirm = confirm("Would you like Lowercase letters?");
    upperConfirm = confirm("Would you like Uppercase letters?");
    symbolConfirm = confirm("Would you like Symbols?");
    numConfirm = confirm("Would you like Numbers?");
      }
  
  charChoice = "";
  if (lowerConfirm) {charChoice = charChoice.concat(lower);}
  if (upperConfirm) {charChoice = charChoice.concat(upper);}
  if (symbolConfirm) {charChoice = charChoice.concat(symbol);}
  if (numConfirm) {charChoice = charChoice.concat(number);}

  const passwordCharacters = [];

  for(let i = 0; i < passwordlength; i++) {
    const character = charChoice[Math.floor(Math.random() * charChoice.length)];
      passwordCharacters.push(character);
  }

  return passwordCharacters.join("");
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
