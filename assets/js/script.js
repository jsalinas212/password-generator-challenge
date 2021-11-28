// Assignment code here
var generatePassword = function() {
  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var passCriteria = {
    passLength: null, 
    lowercase: null, 
    uppercase: null, 
    numeric: null, 
    special: null
  }
};


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
