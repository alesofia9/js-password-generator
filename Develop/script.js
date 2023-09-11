

// Variables created for criteria characters for password generator that the user will toggle on/off with checkboxes.
// Variables below are Checkbox only.
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase"); 
var numeric = document.getElementById("numeric");
var special = document.getElementById("special");



// Assignment code here.
// Function to execute JS when user clicks checkboxes accordingly. Variables 'chars' & 'pw' are below becuase when moved outside of function, password generator keeps repeating cycle on user screen. Variable 'pwLength' is also below to enable user to select length of password feature without it being generated to a set value.
function generatePassword() {
  var chars = "";
  var pw = "";
  var pwLength = document.getElementById("pw-length").value;

  console.log("pw-length = " + pwLength);
  console.log("lowercase = " + lowercase.checked);
  console.log("uppercase = " + uppercase.checked);
  console.log("numeric = " + numeric.checked);
  console.log("special = " + special.checked);

  if (lowercase.checked == true) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase.checked == true) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric.checked == true) {
    chars += "0123456789";
  }

  if (special.checked == true) {
    chars += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"";
  }

  console.log("chars = " + chars);

  // Random password generator using the 'chars' & 'password' variables.
  for (var i = 0; i <= pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    pw += chars.substring(randomNumber, randomNumber +1);
  }

  if(pw == "") {
    return "Please check at least one of the checkboxes below. Thank you!";
  }
  return pw;
}


// Get references to the #generate element.
var generateBtn = document.querySelector("#generate");

// This function writes the generated password to the #password input. DO NOT TOUCH CODE BELOW!
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
