'use strict';

var incorrectInput = 'Input type was not appropriate for the question';
var userName = prompt('What\'s your name?');
var favNum = 17;
var relGuess = 'Not used yet';
var citiesLived = ['tacoma', 'puyallup', 'federal way', 'orlando'];
var counter = 1;
var score = 0;
var wrong = userName + ' that is incorrect.';
var correct = userName + ', you got it right!';
var triesSix = 4;
var triesSeven = 6;

var userAnswer = prompt('Play this guessing game to learn a little more about me! Remember to answer with yes or no until question 6.').toLowerCase();
if (userAnswer === 'yes') {
  console.log(userName + ' agreed to play the guessing game');
  var ansOne = prompt('Was I the rank 1 Barbarian in Diablo 3 for at least 7 minutes?').toLowerCase();
  if (ansOne === 'yes') {
    console.log(userName + ' answered question 1 correctly');
    alert(correct);
    score++;
  } else if (ansOne === 'no') {
    console.log(userName + ' answered question 1 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }

  var ansTwo = prompt('Am I over the age of 27?').toLowerCase();
  if (ansTwo === 'no') {
    console.log(userName + ' answered question 2 correctly');
    alert(correct);
    score++;
  } else if (ansTwo === 'yes') {
    console.log(userName + ' answered question 2 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }

  var ansThree = prompt('Am I lactose intolerant?').toLowerCase();
  if (ansThree === 'yes') {
    console.log(userName + ' answered question 3 correctly');
    alert(correct);
    score++;
  } else if (ansThree === 'no') {
    console.log(userName + ' answered question 3 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }

  var ansFour = prompt('Do I eat cheese regardless of the answer to the previous question?').toLowerCase();
  if (ansFour === 'yes') {
    console.log(userName + ' answered question 4 correctly');
    alert(correct);
    score++;
  } else if (ansFour === 'no') {
    console.log(userName + ' answered question 4 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }

  var ansFive = prompt('Do I own a dog?').toLowerCase();
  if (ansFive === 'no') {
    console.log(userName + ' answered question 5 correctly');
    alert('Sadly you are correct. I have a cat though!');
    score++;
  } else if (ansFive === 'yes') {
    console.log(userName + ' answered question 5 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }


  for (var i = 0; i < 4; i++) {
    var ansSix = parseInt(prompt('Can you guess my favorite number? You get ' + triesSix + ' guesses.'));
    if (ansSix === favNum) {
      console.log(userName + ' guessed ' + favNum + ' correctly!');
      alert('That\'s right it\'s ' + favNum + ' , how\'d you know?');
      score++;
      break;
    } else if (ansSix > favNum) {
      relGuess = 'Too high';
      console.log(relGuess);
      alert(relGuess);
      triesSix--;
    } else if (ansSix < favNum) {
      relGuess = 'Too low';
      console.log(relGuess);
      alert(relGuess);
      triesSix--;
    } else {
      alert(incorrectInput);
      console.log(incorrectInput);
      triesSix--;
    }
  }

  while (counter < 7) {
    var ansSeven = prompt('Can you guess one of the cities I have lived in other than Seattle? You have ' + triesSeven + ' tries!').toLowerCase();
    if (citiesLived.includes(ansSeven)) {
      console.log(userName + ' guessed question 7 correctly');
      alert('Congrats, you guessed correctly!');
      score++;
      break;
    } else {
      console.log(userName + ' guessed question 7 incorrectly');
      alert(wrong);
      counter++;
      triesSeven--;
    }
  }

  console.log(userName + ' has completed the guessing game');
  alert('The possible answers for question 7 were: Tacoma, Puyallup, Federal Way, and Orlando');
  alert('Thank you for playing my guessing game ' + userName + '. You scored ' + score + ' out of 7!');

} else if (userAnswer === 'no') {
  console.log(userName + ' does not want to play the guessing game');
  alert('Ok, refresh the page if you change your mind');
} else {
  console.log(userName + ' did not respond with yes or no');
  alert('Please answer with \'yes\' or \'no\'. Refresh the page and try again!');
}