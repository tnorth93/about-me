'use strict';

var favNum = 17;
var relGuess = 'Not used yet';
var userName = prompt('What\'s your name?');
var incorrectInput = 'Input type was not appropriate for the question';
// var userAnswer = prompt('Play this guessing game to learn a little more about me! Remember to answer with yes or no.').toLowerCase();
// if (userAnswer === 'yes') {
//   console.log(userName + ' agreed to play the guessing game');
//   var ansOne = prompt('Was I the rank 1 Barbarian in Diablo 3 for at least 7 minutes?').toLowerCase();
//   if (ansOne === 'yes') {
//     console.log(userName + ' answered question 1 correctly');
//     alert('Correct!');
//   } else if (ansOne === 'no') {
//     console.log(userName + ' answered question 1 incorrectly');
//     alert('Wrong!');
//   } else {
//     console.log(userName + ' did not respond with yes or no');
//     alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
//   }

//   var ansTwo = prompt('Am I over the age of 27?').toLowerCase();
//   if (ansTwo === 'no') {
//     console.log(userName + ' answered question 2 correctly');
//     alert('Correct!');
//   } else if (ansTwo === 'yes') {
//     console.log(userName + ' answered question 2 incorrectly');
//     alert('Wrong!');
//   } else {
//     console.log(userName + ' did not respond with yes or no');
//     alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
//   }

//   var ansThree = prompt('Am I lactose intolerant?').toLowerCase();
//   if (ansThree === 'yes') {
//     console.log(userName + ' answered question 3 correctly');
//     alert('Correct!');
//   } else if (ansThree === 'no') {
//     console.log(userName + ' answered question 3 incorrectly');
//     alert('Wrong!');
//   } else {
//     console.log(userName + ' did not respond with yes or no');
//     alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
//   }

//   var ansFour = prompt('Do I eat cheese regardless of the answer to the previous question?').toLowerCase();
//   if (ansFour === 'yes') {
//     console.log(userName + ' answered question 4 correctly');
//     alert('Correct!');
//   } else if (ansFour === 'no') {
//     console.log(userName + ' answered question 4 incorrectly');
//     alert('Wrong!');
//   } else {
//     console.log(userName + ' did not respond with yes or no');
//     alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
//   }

//   var ansFive = prompt('Do I own a dog?').toLowerCase();
//   if (ansFive === 'no') {
//     console.log(userName + ' answered question 5 correctly');
//     alert('Sadly you are correct. I have a cat though!');
//   } else if (ansFive === 'yes') {
//     console.log(userName + ' answered question 5 incorrectly');
//     alert('Wrong!');
//   } else {
//     console.log(userName + ' did not respond with yes or no');
//     alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
//   }

var i = 0;
for(i = 0; i < 4; i++) {
  var ansSix = parseInt(prompt('Can you guess my favorite number? You get 4 tries and I\'ll even give you hints!'));
  if (ansSix === favNum) {
    console.log(userName + ' guessed ' + favNum + ' correctly!');
    alert('That\'s right it\'s ' + favNum + ' , how\'d you know?');
    i = 4;
  } else if (ansSix > favNum) {
    console.log(userName + relGuess);
    relGuess = 'too high';
    alert(ansSix + ' is ' + relGuess);
  } else if (ansSix < favNum) {
    relGuess = 'guessed too low';
    console.log(userName + relGuess);
    alert(ansSix + ' is not right, you ' + relGuess);
  } else {
    alert(incorrectInput);
    console.log(incorrectInput);
  }
}

prompt('this is quesiton 7');
   
//   console.log(userName + ' has completed the guessing game');
//   alert('Thank you for playing my guessing game ' + userName + '. You now know a little bit more about me!');

// } else if (userAnswer === 'no') {
//   console.log(userName + ' does not want to play the guessing game');
//   alert('Ok, refresh the page if you change your mind');
// } else {
//   console.log(userName + ' did not respond with yes or no');
//   alert('Please answer with \'yes\' or \'no\'. Refresh the page and try again!');
// }