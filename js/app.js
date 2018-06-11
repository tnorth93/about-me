'use strict';

// global variables
var userName = prompt('What\'s your name?');
var score = 0;
var wrong = userName + ' that is incorrect.';
var correct = userName + ', you got it right!';
var incorrectInput = 'Input type was not appropriate for the question';

// quiz confirmation
function qConfirm() {
  if (confirm('Play this guessing game to learn a little more about me! Remember to answer with yes or no until question 6.') === true) {
    console.log(userName + ' agreed to play the guessing game');
  } else {
    alert('That was rude :(');
  }
}

// question 1
function qOne() {
  var answer = prompt('Was I the rank 1 Barbarian in Diablo 3 for at least 7 minutes?').toLowerCase();
  if (answer === 'yes') {
    console.log(userName + ' answered question 1 correctly');
    alert(correct);
    score++;
  } else if (answer === 'no') {
    console.log(userName + ' answered question 1 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }
}
// question 2
function qTwo() {
  var answer = prompt('Am I over the age of 27?').toLowerCase();
  if (answer === 'no') {
    console.log(userName + ' answered question 2 correctly');
    alert(correct);
    score++;
  } else if (answer === 'yes') {
    console.log(userName + ' answered question 2 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }
}

// question 3
function qThree() {
  var answer = prompt('Am I lactose intolerant?').toLowerCase();
  if (answer === 'yes') {
    console.log(userName + ' answered question 3 correctly');
    alert(correct);
    score++;
  } else if (answer === 'no') {
    console.log(userName + ' answered question 3 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }
}

// question 4
function qFour() {
  var answer = prompt('Do I eat cheese regardless of the answer to the previous question?').toLowerCase();
  if (answer === 'yes') {
    console.log(userName + ' answered question 4 correctly');
    alert(correct);
    score++;
  } else if (answer === 'no') {
    console.log(userName + ' answered question 4 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }
}

// question 5
function qFive() {
  var answer = prompt('Do I own a dog?').toLowerCase();
  if (answer === 'no') {
    console.log(userName + ' answered question 5 correctly');
    alert('Sadly you are correct. I have a cat though!');
    score++;
  } else if (answer === 'yes') {
    console.log(userName + ' answered question 5 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }
}

// question 6
function qSix() {
  var relGuess;
  var favNum = 17;
  var triesSix = 4;
  for (var i = 0; i < 4; i++) {
    var answer = parseInt(prompt('Can you guess my favorite number? You get ' + triesSix + ' guesses.'));
    if (answer === favNum) {
      console.log(userName + ' guessed ' + favNum + ' correctly!');
      alert('That\'s right it\'s ' + favNum + ' , how\'d you know?');
      score++;
      break;
    } else if (answer > favNum) {
      relGuess = 'Too high';
      console.log(relGuess);
      alert(relGuess);
      triesSix--;
    } else if (answer < favNum) {
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
}

// question 7
function qSeven() {
  var citiesLived = ['tacoma', 'puyallup', 'federal way', 'orlando'];
  var counter = 1;
  var triesSeven = 6;
  while (counter < 7) {
    var answer = prompt('Can you guess one of the cities I have lived in other than Seattle? You have ' + triesSeven + ' tries!').toLowerCase();
    if (citiesLived.includes(answer)) {
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
}

// quiz conclusion
function qConclusion() {
  console.log(userName + ' has completed the guessing game');
  alert('The possible answers for question 7 were: Tacoma, Puyallup, Federal Way, and Orlando');
  alert('Thank you for playing my guessing game ' + userName + '. You scored ' + score + ' out of 7!');
}

// calling the quiz functions
qConfirm();
qOne();
qTwo();
qThree();
qFour();
qFive();
qSix();
qSeven();
qConclusion();