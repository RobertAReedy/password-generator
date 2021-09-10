// Assignment code here

//Gets the desired length of the password from the user
//Handles blank or invalid inputs
function promptLength() {
  var length = -999;
  while(length === false || isNaN(length) || (length) < 8 || length > 128) {
    length = parseInt(window.prompt("What length should the password be? Choose a length from at least 8 characters up to 128 characters."));
  }
  console.log("length input = " + length)
  return length;
}

//Determines if a user would like a certain type of character in their password
function confirmCharType(charType) {
  var retVal = window.confirm("Allow " + charType + " in the password?");
  console.log(charType + " allowed = " + retVal);
  return retVal;
}

//Creates the set of characters from which the password will choose
function createCharSet() {
  var allowUpperCase = confirmCharType("uppercase letters");
  var allowLowerCase = confirmCharType("lowercase letters");
  var allowNumbers = confirmCharType("numbers");
  var allowSpecChars = confirmCharType("special characters");
  var charSet = "";

  if (allowUpperCase) {
    charSet = (charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (allowLowerCase) {
    charSet = (charSet + "abcdefghijklmnopqrstuvwxyz");
  }
  if (allowNumbers) {
    charSet = (charSet + "0123456789");
  }
  if (allowSpecChars) {
    charSet = (charSet + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
  }

  return charSet;
}

//Generates the password using above functions
function generatePassword() {
  var password = "";
  var length = promptLength();
  var charSet = createCharSet();

  //Handles if a user decides not to allow any characters at all; forces them to try again
  console.log("charSet = " + charSet);
  while (charSet.length === 0) {
    window.alert("Cannot generate a password with no characters. Please select at least one character type from the following choices.");
    charSet = createCharSet();
    console.log("charSet = " + charSet)
  }

  //Generates the password from the charSet
  for (var i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
