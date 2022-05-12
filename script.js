// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Array to make string into Array to create the following
// list of lower case characters
// list of upper case characters
// list of special characters
// list of numbers

var lower = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+-=";
var numbers = "0123456789";
var lowerArray = Array(lower);
var upperArray = Array(lower.toUpperCase());
var specialCharArray = Array(specialChar);
var numberArray = Array(numbers);

//create blank arrays

var generatePassword = function () {
  var password = "";
  var finalArr = "";
  var confirmLength = "";

  //prompt for confirming the length of your password

  confirmLength =
    prompt(`Please specify the number of characters you would like for your password.
  Password must be 8-128 characters.`);

  //while loop to confirm user's choice was between 8 and 128

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert(`Password length must be 8-128 characters. 
    Please try again.`);

    confirmLength =
      prompt(`Please specify the number of characters you would like for your password.
  Password must be 8-128 characters.`);

    // if user cancels or does not put in anything it returns  an alert

    if (confirmLength === null) {
      alert("Please enter the number of characters");
      return;
    }
  }

  //confirmations to add certain characters

  var confirmLowalph = confirm(
    "Would you like for your password to include lower case letters?"
  );
  var confirmUpAlph = confirm(
    "Would you like for your password to include capital letters?"
  );
  var confirmSpecchar = confirm(
    "Would you like for your password to include special characters?"
  );
  var confirmNum = confirm(
    "Would you like for your password to include numbers?"
  );

  //combine final array with conditional arrays using concat based on user's choice

  if (confirmLowalph) {
    finalArr = finalArr.concat(lowerArray);
  }

  if (confirmUpAlph) {
    finalArr = finalArr.concat(upperArray);
  }

  if (confirmSpecchar) {
    finalArr = finalArr.concat(specialCharArray);
  }

  if (confirmNum) {
    finalArr = finalArr.concat(numberArray);
  }

  //combine final array with random elements within the final array into the password array

  for (i = 0; i < confirmLength; i++) {
    password = password.concat(
      finalArr.charAt(Math.floor(Math.random() * finalArr.length))
    );
  }

  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
