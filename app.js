'use strict';

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which movie is this line from? “Leave the gun, take the cannoli"',
      answers: [
        'The Godfather',
        'Goodfellas',
        'Heat',
        'The Irishman'
      ],
      correctAnswer: 'The Godfather'
    },
    {
      question: 'Which movie is this line from? “These are not the droids you’re looking for."',
      answers: [
        'Terminator',
        'Avatar',
        'Star Wars',
        'Star Trek'
      ],
      correctAnswer: 'Star Wars'
    },
    {
      question: 'Which movie is this line from? ”I volunteer as tribute"',
      answers: [
        'Indiana Jones',
        'Hunger Games',
        'Planet of The Apes',
        'After Earth'
      ],
      correctAnswer: 'Hunger Games',
    },
    {
      question: 'Which movie is this line from? ”With great power, comes great responsibility"',
      answers: [
        'Avengers',
        'Justice League',
        'Spiderman',
        'X-Men'
      ],
      correctAnswer: 'Spiderman',
    },
    {
      question: 'Which movie is this line from? “King Kong ain’t got **** on me!"',
      answers: [
        'King Kong',
        'Training Day',
        'Queen Kong',
        'Godzilla vs Kong'
      ],
      correctAnswer: 'Training Day',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  scoreCorrect: 0,
  scoreIncorrect: 0,
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
//

/********** RENDER FUNCTION(S) **********/
//These functions generate the html templates to be rendered for each page of the quiz

function generateStartQuiz() {
  const startQuizHtml = `<div class="beginQuiz">
  <h2>Shall we play a game?</h2>

  <img src="images/startimage.gif" alt="Shall we play a game? image">

  <form action = "#questionPg">
    <input type = "submit" value = yes id = "startBtn">
  </form>
</div>`;

$('main').html(startQuizHtml);
}



// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuiz() {
  let html = ``;

  if (STORE.quizStarted === false) {
    $('main').html(generateStartQuiz);
  }

  
  console.log('`renderQuiz` ran.');

  
}





/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)



//  This function will handle when the user clicks yes to start quiz
function handleStartQuiz() {

  console.log('`handleStartQuiz` ran.');
}

//  This function will handle when the user clicks no and doesn't want to start quiz
function handleDoNotStartQuiz() {

  console.log('`handleDoNotStartQuiz` ran.');
}

// This function will handle when a user submits an answer to a question
function handleSubmitAnswer() {

  console.log('`handleSubmitAnswer` ran.');
}

// This function will handle when a user clicks next question
function handleNextQuestion() {

  console.log('`handleNextQuestion` ran.');
}

// This function will handle when a user clicks finish Quiz on the final question
function handleFinishQuiz() {
  
  console.log('`handleFinishQuiz` ran.');
}

// This function will handle when a user clicks new game
function handleNewQuiz() {

  console.log('`handleNewQuiz` ran.');
}

//  This function will be callback when page loads. Responsible for initial quiz rendering, and activating handler functions for quiz.
function handleQuiz() {
  renderQuiz();
  handleStartQuiz();
  handleDoNotStartQuiz();
  handleSubmitAnswer();
  handleNextQuestion();
  handleFinishQuiz();
  handleNewQuiz();

}

$(handleQuiz);