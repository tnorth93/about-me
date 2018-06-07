
var userName = prompt('What\'s your name?');
var score = 0;
var wrong = userName + ' that is incorrect.';
var correctMessage = userName + ', you got it right!';

//First question
if (quiz('Play this guessing game to learn a little more about me! Remember to answer with yes or no until question 6.', null)) {
  score++;
}

//Second question
if (quiz('Was I the rank 1 Barbarian in Diablo 3 for at least 7 minutes?',correctMessage)) {
  score++;
}

//Third question
if (quiz('Am I over the age of 27?',correctMessage)) {
  score++;
}

//Fourth question
if (quiz('Am I lactose intolerant?',correctMessage)) {
  score++;
}

//Fifth question
if (quiz('Do I eat cheese regardless of the answer to the previous question?',correctMessage)) {
  score++;
}

//Sixth question
if (quiz('Do I own a dog?',correctMessage)) {
  score++;
}

function quiz(question, isCorrectMessage) {
  var isCorrect = false;
  console.log('In quiz funtion, question is: '+question);
  var userAnswer = prompt(question).toLowerCase();
  console.log(userName + ' answered: '+userAnswer);
  
  if (userAnswer === 'yes') {
    console.log(userName + ' answered question 1 correctly');
    if(isCorrectMessage !== null) {
      alert(isCorrectMessage);
    }
    isCorrect = true;
  } else if (userAnswer === 'no') {
    console.log(userName + ' answered question 1 incorrectly');
    alert(wrong);
  } else {
    console.log(userName + ' did not respond with yes or no');
    alert('I don\'t think that was a real answer, ' + userName + '. Please stick to yes or no answers.');
  }
  return isCorrect;
}

alert('Thank you for playing my guessing game ' + userName + '. You scored ' + score + ' out of 7!');