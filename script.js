// Assignment Code
var generateBtn = document.querySelector("#generate");

const pass_strings = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  extra: '!`~@#$%^&*()?><":[]{|}=+_-,./?;',
};

function generatePassword() {


  var password = ""
  var passCharSet = ""
  // Adding in prompt for char length
  var length = prompt("How long of a password should be generated, value should be between 8 and 128.");
  length = parseInt(length);
  // If the user does not input a number, will prompt for one to be used
  if (!length) {
    alert("A number must be entered.")
    return "";
  }

  // If the user does not enter a value between values listed will be prompted and returned
  else if (length < 8 || length > 128) {
    alert("Character value must be between 7 and 129")
    return "";
  }

  // Once length has been established, prompt for character usage
  else {

    // Prompt for lowercase letters
    var lower = window.confirm("Should lowercase letters be included?");
    if (lower) {
      passCharSet += pass_strings.lower;
    };

    // Prompt for uppercase letters
    var upper = window.confirm("Should uppercase Letters be included?");
    if (upper) {
      passCharSet += pass_strings.upper;
    };

    // Prompt for numbers
    var number = window.confirm("Should numbers be included?");
    if (number) {
      passCharSet += pass_strings.number;
    };

    // Prompt for special characters
    var extra = window.confirm("Do you want to include symbols?");
    if (extra) {
      passCharSet += pass_strings.extra;
    };
  }

  for (var i = 0; i < length; i++) {
    password += passCharSet[Math.floor(Math.random() * passCharSet.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
