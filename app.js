'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuiz() {

  console.log('`renderQuiz` ran.');
}





/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//  This function will handle when the user clicks yes to start quiz
function startQuiz() {

  console.log('`startQuiz` ran.');
}

//  This function will handle when the user clicks no and doesn't want to start quiz
function doNotStartQuiz() {

  console.log('`doNotStartQuiz` ran.');
}

// This function will handle when a user submits an answer to a question
function submitAnswer() {

  console.log('`submitAnswer` ran.');
}

// This function will handle when a user clicks next question
function nextQuestion() {

  console.log('`nextQuestion` ran.');
}

// This function will handle when a user clicks finish Quiz on the final question
function finishQuiz() {
  
  console.log('`finishQuiz` ran.');
}

// This function will handle when a user clicks new game
function newQuiz() {

  console.log('`newQuiz` ran.');
}

//  This function will be callback when page loads. Responsible for initial quiz rendering, and activating handler functions for quiz.
function handleQuiz() {
  
}