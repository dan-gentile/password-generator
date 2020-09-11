// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// TODO: create a generatePassword function 
// prompt length of password (between 8-128 characters) make variable 
// confirm lowercase letters make variable
// confirm uppercase letters make variable
// confirm special characters make variable 
// after I'm done with prompts I have to create the password 

//create an array for uppercase, lowercase and special character .split?? 

//create a conditional situation that saves the chosen characters from our confirms 
//create a variable that holds the characters that the user wants to have 
//randomly select a password from the given information at the length asked
//math.floor and math.random  
//create a loop
// make validations that at least one type of character is selected
// make validations that its a number of 8-128 characters 
// alert the user if no types selected 
// alert the user if a number between 8-128 isn't selected 





function generatePassword(){  

  var userLength = prompt('Password Length: Please select a number from 8 - 128');
 
  
  while (isNaN(userLength) || userLength < 8 || userLength > 128){
    alert('Not a Number between 8 - 128! Please Try Again!')
    userLength = prompt('Password Length: Please select a number from 8 - 128')
  }

  var userLower = confirm('Do you want lower-case letters?');
  var userUpper = confirm('Do you want upper-case letters?');
  var userSpecial = confirm('Do you want any special characters?');

  while (userLower === false && userUpper === false && userSpecial === false){
    alert('You have to pick at least one parameter! Try Again!')
    userLower = confirm('Do you want lower-case letters?');
    userUpper = confirm('Do you want upper-case letters?');
    userSpecial = confirm('Do you want any special characters?');
  }

  var passLower = 'abcdefghijklmnopqrstuvwxyz';
  var passUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var passSpecial = '!@#$%^&*~+=';
  var sum = '';



 


  if (userLower === true){   
    passLowerSplit = passLower.split('');

  } else {
    passLowerSplit = [];
  }

 if (userUpper === true){
    passUpperSplit = passUpper.split('');
 } else {
    passUpperSplit = [];
 }

 if (userSpecial === true){
   passSpecialSplit = passSpecial.split('');
 } else {
   passSpecialSplit = [];
 }

  var passContainer = passLowerSplit.concat(passUpperSplit, passSpecialSplit);
 
  for(i = 0; i < userLength; i++) {
  var num = Math.floor(Math.random() * passContainer.length);
  sum += passContainer[num];
}
return(sum);

 
}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
