'use strict';

var userAnswer = prompt('Play this guessing game to learn a little more about me! Remember to answer with yes or no.').toLowerCase();
  if (userAnswer === 'yes') {
    console.log('The user agreed to play the guessing game');

    var ansOne = prompt('Was I the rank 1 Barbarian in Diablo 3 for at least 7 minutes?').toLowerCase();
      if (ansOne === 'yes') {
        console.log('The user answered correctly');
        alert('Correct!');
      } else {
        console.log('The user answered incorrectly');
        alert('Wrong!');
      }

    var ansTwo = prompt('Am I over the age of 27?').toLowerCase();
      if (ansTwo === 'no') {
        console.log('The user answered correctly');
        alert('Correct!');
      } else {
        console.log('The user answered incorrectly');
        alert('Wrong!');
      }

      var ansThree = prompt('Am I lactose intolerant?').toLowerCase();
      if (ansThree === 'yes') {
        console.log('The user answered correctly');
        alert('Correct!');
      } else {
        console.log('The user answered incorrectly');
        alert('Wrong!');
      }

      var ansFour = prompt('Do I eat cheese regardless of the answer to the previous question?').toLowerCase();
      if (ansFour === 'yes') {
        console.log('The user answered correctly');
        alert('Correct!');
      } else {
        console.log('The user answered incorrectly');
        alert('Wrong!');
      }

      var ansFive = prompt('Do I own a dog?').toLowerCase();
      if (ansFive === 'no') {
        console.log('The user answered correctly');
        alert('Sadly you are correct. I have a cat though!');
      } else {
        console.log('The user answered incorrectly');
        alert('I wish :(');
      }

      console.log('The user has completed the guessing game');
      alert('Thank you for playing my guessing game. You now know a little bit more about me!');
      
  } else {
    console.log('The user does not want to play the guessing game');
    alert('Ok, refresh the page if you change your mind');
  }




