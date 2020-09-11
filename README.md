# password-generator
## Javascript Web App 

![Contents](https://img.shields.io/github/languages/top/dan-gentile/password-generator)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/password-generator)

### Table of Contents


- [General Info](#general-info)
- [Technologies](#Technologies)
- [Deployment](Deployment)
- [Screenshots](#screen-shots)


### General Info

This a password generator that allows the user to choose a length between 8-128, upper case letters, lower case letters and special characters. This is done through a series of prompts and confirms. 

This project was built using the following:
- HTML
- CSS
- Javascript

Link to page: <https://dan-gentile.github.io/password-generator/>

### Technologies

This Projects used:
- [Javascript](https://www.javascript.com/)

### Deployment 
Password generator is a browser based app. All you need to do is open the link and hit the generate password button! 

### Screen Shots 

--Home Page--
<img width="934" alt="Screen Shot 2020-09-11 at 8 17 40 AM" src="https://user-images.githubusercontent.com/68626350/92943189-55397a00-f407-11ea-910a-3c63f81e10ca.png">


### Code Snippets 
-Edge Case Testing- <br>
Making sure that number entered is an integer between 8 and 128
~~~
while (isNaN(userLength) || userLength < 8 || userLength > 128 || Number.isInteger(userLength) === false) {
    alert('Not a whole number between 8 - 128! Please Try Again!')
    userLength = prompt('Password Length: Please select a whole number from 8 - 128')
}
~~~
Making sure at least one condition is met. 
~~~
while (userLower === false && userUpper === false && userSpecial === false){
    alert('You have to pick at least one parameter! Try Again!')
    userLower = confirm('Do you want lower-case letters?');
    userUpper = confirm('Do you want upper-case letters?');
    userSpecial = confirm('Do you want any special characters?');
  }
~~~
-Looping Code-
~~~
for(i = 0; i < userLength; i++) {
  var num = Math.floor(Math.random() * passContainer.length);
  sum += passContainer[num];
  }
~~~

### Authors 
- Dan Gentile 

### License 
- Open Source 
