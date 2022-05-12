\// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// use split to split string into array
//combine use .concat()
var lower = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+-=";
var numbers = "0123456789";

  // list of special characters
  // list of numbers
  // list of upper case characters
  // list of lower case characters

var lowerArray = lower.split("");
var upperArray = lower.toUpperCase().split("");
var specialCharArray = specialChar.split("");
var numberArray = numbers.split("");

function generatePassword() {

  var password = ""
  var finalArr = ""
  var confirmLength = ""

  confirmLength = prompt.(`Please specify the number of characters you would like for your password.
  Password must be 8-128 characters.`);

  while(confirmLength <=7 || confirmLength >= 129) {
    alert.(`Password length must be 8-128 characters. 
    Please try again.`)
    if(confirmLength === null) {
      alert("Please enter the number of characters");
      return;
    }
  }

  // how many characters?
  // is it 8 or more characters?
  // no? send an error message
  // use special characters?
  // use numbers?
  // use capital letters?
  // use lower case letters?

  // put together password
  // combine the arrays that were chosen yes to
  // pick random characters from combined array based on how many characters there are

  return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
