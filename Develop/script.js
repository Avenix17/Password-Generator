
symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var generateBtn = document.querySelector("#generate");


function generatePassword() {
  let passwordlength = 0;
  while (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
    passwordlength = Number(prompt("Choose password length: 8 - 128 characters"));
  }

  let lowerConfirm = false;
  let upperConfirm = false;
  let symbolConfirm = false;
  let numConfirm = false;

  while (!lowerConfirm && !upperConfirm && !symbolConfirm && !numConfirm) {
    lowerConfirm = confirm("Would you like Lowercase letters?");
    upperConfirm = confirm("Would you like Uppercase letters?");
    symbolConfirm = confirm("Would you like Symbols?");
    numConfirm = confirm("Would you like Numbers?");

    if (!lowerConfirm && !upperConfirm && !symbolConfirm && !numConfirm) {
      alert("You must select at least one character type!");
    }
  }

  let charChoice = [];
  if (lowerConfirm) {charChoice = charChoice.concat(lower);}
  if (upperConfirm) {charChoice = charChoice.concat(upper);}
  if (symbolConfirm) {charChoice = charChoice.concat(symbol);}
  if (numConfirm) {charChoice = charChoice.concat(number);}

  let passwordCharacters = [];

  for(let i = 0; i < passwordlength; i++) {
    let character = "";
    if (lowerConfirm) {
      lowerConfirm = false;
      character = lower[Math.floor(Math.random() * lower.length)];
    } else if (upperConfirm) { 
      upperConfirm = false;
      character = upper[Math.floor(Math.random() * upper.length)];
    } else if (symbolConfirm) { 
      symbolConfirm = false;
      character = symbol[Math.floor(Math.random() * symbol.length)];
    } else if (numConfirm) { 
      numConfirm = false;
      character = number[Math.floor(Math.random() * number.length)];
    } else {
      character = charChoice[Math.floor(Math.random() * charChoice.length)];
    }

    passwordCharacters.push(character);
  }

  passwordCharacters.sort(randomShuffle);

  return passwordCharacters.join("");
}

function randomShuffle(a,b) {
  if (Math.random() > 0.5) {
    return 1;
  } else {
    return -1;
  }
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
