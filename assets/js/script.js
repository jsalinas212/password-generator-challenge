// Assignment code here
var generatePassword = function() {

  // Character types
  var specialChars = [" ","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",";"];
  var alphaChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numericChars = [1,2,3,4,5,6,7,8,9,0];

  // package up data as an object
  var passwordDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  var value = Math.floor(Math.random());

  // send as an arg to createTaskEl
  createTaskEl(passwordDataObj);
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
