// Assignment code here


// Get password length
var passwordLength = 24;
// Character types
var specialChars = [" ","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",";"];
var lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [1,2,3,4,5,6,7,8,9,0];

var getRandom = function(max) {
  return Math.floor(Math.random() * max);
}

var generatePassword = function() {
  // Array of available types
  var charTypes = [specialChars, lowerAlpha, numeric, upperAlpha];
  var charArrSize = charTypes.length;

  var passGen = function() {
    // Variables
    var passBuild = [];
    var password;
    // Take types and build password by length
    for (var i = 0; i < passwordLength; i++) {
      var typeSelector = charTypes[getRandom(4)];
      var typeArrSize = typeSelector.length;
      var charSelector = typeSelector[getRandom(typeArrSize)];

      
    }
    console.log(charSelector);
  };

  passGen();
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
