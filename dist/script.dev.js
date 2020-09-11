"use strict";

// Assignment Code
var generateBtn = document.querySelector("#generate"); // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} // Function to gather user data and create a random string based on their parameters 


function generatePassword() {
  var userLength = prompt('Password Length: Please select a whole number from 8 - 128'); // Round down if given a non whole number 

  userLength = Math.floor(parseInt(userLength)); // edge casing 

  while (isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert('Not a whole number between 8 - 128! Please Try Again!');
    userLength = prompt('Password Length: Please select a whole number from 8 - 128');
  }

  ;
  var userLower = confirm('Do you want lower-case letters?');
  var userUpper = confirm('Do you want upper-case letters?');
  var userSpecial = confirm('Do you want any special characters?'); // min requirements 

  while (userLower === false && userUpper === false && userSpecial === false) {
    alert('You have to pick at least one parameter! Try Again!');
    userLower = confirm('Do you want lower-case letters?');
    userUpper = confirm('Do you want upper-case letters?');
    userSpecial = confirm('Do you want any special characters?');
  }

  ; // array values 

  var passLower = 'abcdefghijklmnopqrstuvwxyz';
  var passUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var passSpecial = '!@#$%^&*~+=';
  var sum = '';

  if (userLower === true) {
    passLowerSplit = passLower.split('');
  } else {
    passLowerSplit = [];
  }

  ;

  if (userUpper === true) {
    passUpperSplit = passUpper.split('');
  } else {
    passUpperSplit = [];
  }

  ;

  if (userSpecial === true) {
    passSpecialSplit = passSpecial.split('');
  } else {
    passSpecialSplit = [];
  }

  ; // combining arrays 

  var passContainer = passLowerSplit.concat(passUpperSplit, passSpecialSplit); // looping through arrays to generate final string 

  for (i = 0; i < userLength; i++) {
    var num = Math.floor(Math.random() * passContainer.length);
    sum += passContainer[num];
  }

  ; // returning value 

  return sum;
} // Add event listener to generate button


generateBtn.addEventListener("click", writePassword);