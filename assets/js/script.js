// Assignment code here
var formEl = document.querySelector("#selectForm");

// Character types
var specialChars = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",";"];
var lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [1,2,3,4,5,6,7,8,9,0];

var getRandom = function(max) {
  return Math.floor(Math.random() * max);
}

var generatePassword = function(passObj) {
  // Get password options
  var passwordLength = passObj.passLen;
  var charTypes = [];

  if (passObj.charNum != null) {
    charTypes.push(numeric);
  }

  if (passObj.charUC != null) {
    charTypes.push(upperAlpha);
  }

  if (passObj.charLC != null) {
    charTypes.push(lowerAlpha);
  }

  if (passObj.charSpec != null) {
    charTypes.push(specialChars);
  }

  if (passObj.charNum === null && passObj.charUC === null && passObj.charLC === null && passObj.charSpec === null) {
    alert("You need to make at least one character type selection.");
    return "";
  }

  var charArrSize = charTypes.length;

  var passGen = function() {
    // Variables
    var passBuild = [];
    var password;

    // Take types and build password by length
    for (var i = 0; i < passwordLength; i++) {
      var typeSelector = charTypes[getRandom(charArrSize)];
      var typeArrSize = typeSelector.length;
      var charSelector = typeSelector[getRandom(typeArrSize)];
      passBuild.push(charSelector);
    }

    // Convert array to string and remove commas
    password = passBuild.toString();
    password = password.replace(/,/g, '');

    // Return password
    return password;
  };

  // Return function result
  return passGen();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passObj) {
  var password = generatePassword(passObj);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password event handler
var passHandler = function(event) {
  event.preventDefault();

  // Collect form input
  var charNum = document.querySelector("#charNum:checked");
  var charUC = document.querySelector("#charUC:checked");
  var charLC = document.querySelector("#charLC:checked");
  var charSpec = document.querySelector("#charSpec:checked");
  var passLen = document.querySelector("input[name='passLen']").value;

  if (!passLen || passLen < 8 || passLen > 128) {
    alert("Please make sure password length is between 8 and 128.");
  }

  // Build password object from form data
  var passObj = {
    charNum: charNum,
    charUC: charUC,
    charLC: charLC,
    charSpec: charSpec,
    passLen: passLen
  }

  // Pass object data to writePassword function
  writePassword(passObj);
}

// Add event listener to generate button
formEl.addEventListener("submit", passHandler);
