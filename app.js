'use strict';

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which movie is this line from? "Leave the gun, take the cannoli"',
      answers: [
        'The Godfather',
        'Goodfellas',
        'Heat',
        'The Irishman'
      ],
      correctAnswer: 'The Godfather',
      image: '<img src="images/q1image.gif" alt="The Godfather, leave the gun take the cannoli"></img>;'
    },
    {
      question: 'Which movie is this line from? "These are not the droids you’re looking for."',
      answers: [
        'Terminator',
        'Avatar',
        'Star Wars',
        'Star Trek'
      ],
      correctAnswer: 'Star Wars',
      image: '<img src="images/q2image.gif" alt="Star Wars, these are not the droids you\'re looking for">'
    },
    {
      question: 'Which movie is this line from? "I volunteer as tribute"',
      answers: [
        'Indiana Jones',
        'Hunger Games',
        'Planet of The Apes',
        'After Earth'
      ],
      correctAnswer: 'Hunger Games',
      image: '<img src="images/q3image.gif" alt="The Hunger Games, I volunteer as tribute.">'
    },
    {
      question: 'Which movie is this line from? "With great power, comes great responsibility"',
      answers: [
        'Avengers',
        'Justice League',
        'Spiderman',
        'X-Men'
      ],
      correctAnswer: 'Spiderman',
      image: '<img src="images/q4image.gif" alt="Spiderman, with great power comes great responsibilty.">'
    },
    {
      question: 'Which movie is this line from? "King Kong ain’t got **** on me!"',
      answers: [
        'King Kong',
        'Training Day',
        'Queen Kong',
        'Godzilla vs Kong'
      ],
      correctAnswer: 'Training Day',
      image: '<img src="images/q5image.gif" alt="Training Day, King Kong ain\'t got nothing on me!">'
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
  const startQuizHtml = 
  `<div class="beginQuiz">
    <h2>Shall we play a game?</h2>
    <img src="images/startimage.gif" alt="Shall we play a game? image">
    <div class = "btn">
      <button type="button" id ="startBtn" class = "block">Yes</button>
    </div>
  </div>`;

$('main').html(startQuizHtml);
}

function generateQuestion() {
  const index = STORE.questionNumber - 1;
  let ans1 = STORE.questions[index].answers[0];
  let ans2 = STORE.questions[index].answers[1];
  let ans3 = STORE.questions[index].answers[2];
  let ans4 = STORE.questions[index].answers[3];
  let correct = STORE.questions[index].correctAnswer;
  const QuestionHtml = `<div class="questionPg">
  <h2>Question ${STORE.questionNumber} of 5:</h2>

  <p>${STORE.questions[index].question}</p>

  <div class="answerChoices">
    <form id = "answers">
      <ol>
        <li>
          <input type="radio" name = "answerChoice" id = "choice1" value = "${ans1}" required>
          <label for="choice1">${ans1}</label>
        </li>
        <li>
          <input type="radio" name = "answerChoice" id = "choice2" value = "${ans2}">
          <label for="choice2">${ans2}</label>
        </li>
        <li>
          <input type="radio" name = "answerChoice" id = "choice3" value = "${ans3}">
          <label for="choice3">${ans3}</label>
        </li>
        <li>
          <input type="radio" name = "answerChoice" id = "choice4" value = "${ans4}">
          <label for="choice4">${ans4}</label>
        </li>
      </ol>
      <div class = "submitBtn block">
        <input type="submit" id = "submitAnswerBtn">
      </div>
    </form>

  </div>
</div>`;

$('main').html(QuestionHtml);
}


function generateCorrect() {
  let index = STORE.questionNumber - 1;
  let image = STORE.questions[index].image;
  let correct = STORE.scoreCorrect;
  let incorrect = STORE.scoreIncorrect;

  const correctAnswerHtml = `<div class="correctAnswerPg">
  <h2>Correct!</h2>

  ${image}

  <p>Score: </p>
  <p>Correct: ${correct}</p>
  <p>Incorrect: ${incorrect}</p>

  <div class = "btn">
  <button type="button" id ="nextQuestionBtn">Next Question</button>
  </div>

</div>
`;

$('main').html(correctAnswerHtml);

}

function generateIncorrect() {
  let index = STORE.questionNumber - 1;
  let image = STORE.questions[index].image;
  let correct = STORE.scoreCorrect;
  let incorrect = STORE.scoreIncorrect;
  let correctAnswer = STORE.questions[index].correctAnswer;

  const incorrectAnswerHtml = `<div class="incorrectAnswerPg">
  <h2>Incorrect!</h2>

  ${image}

  <section>
        <p>The correct answer was: ${correctAnswer}</p>
  </section>
  <p>Score: </p>

  <ul>
    <li>Correct: ${correct}</li>
    <li>Incorrect: ${incorrect}</li>
  </ul>

  <div class = "btn">
    <button type="button" id ="nextQuestionBtn">Next Question</button>
  </div>

</div>
`;
$('main').html(incorrectAnswerHtml);

}

function generateEndQuiz() {
  let correct = STORE.scoreCorrect;
  let incorrect = STORE.scoreIncorrect;
  const endQuizHtml = `
  <div class="quizOverPg">
  <h2>You Finished the Quiz!</h2>

  <img src="images/qfinal.gif" alt="Avengers Assemble">

  <p>Score Total:</p>
  
  <ul>
    <li>Correct: ${correct}</li>
    <li>Incorrect: ${incorrect}</li>
  </ul>

  <div class = "btn">
      <button type="button" id ="endBtn">New Game</button>
  </div>
  

</div>`;
$('main').html(endQuizHtml);

}

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuiz() {
  let html = ``;

  if (STORE.quizStarted === false) {
    $('main').html(generateStartQuiz);
  }
  else if (STORE.questionNumber > 0 && STORE.questionNumber <= STORE.questions.length) {
    $('main').html(generateQuestion);
  }
  else {
    $('main').html(generateEndQuiz);
    // console.log('this will generate the last page');
  }

  // console.log('`renderQuiz` ran.');

  
}





/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)



//  This function will handle when the user clicks yes to start quiz
//  It should listen for the submit
//  It should reassign the value of STORE.quizStarted to true
//  and reassign STORE.questionNumber to 1
//  Then it should call render

function handleStartQuizBtn() {
  $('main').on('click','#startBtn', event => {
    event.preventDefault();
    
    STORE.quizStarted = true;
    STORE.questionNumber = 1;
    // console.log('Start button ran')
    // console.log(`${STORE.quizStarted}`)
    // console.log(`${STORE.questionNumber}`)
    renderQuiz();
  });
  // console.log('`handleStartQuizBtn` ran.');
}

//  This function will handle when the user clicks no and doesn't want to start quiz
function handleDoNotStartQuiz() {

  // console.log('`handleDoNotStartQuiz` ran.');
}

// This function will handle when a user submits an answer to a question
function handleSubmitAnswer() {
  $('main').submit("submitAnswerBtn", event => {
    event.preventDefault();
    let index = STORE.questionNumber -1;
    let input = $("input[type=radio]:checked").val();
    // console.log(input)

    if ($("input[type=radio]:checked").val() === STORE.questions[index].correctAnswer) {
      STORE.scoreCorrect ++;
      generateCorrect();
      // console.log('correct');
      // console.log(STORE.scoreCorrect)
     
    }
    else {
      STORE.scoreIncorrect ++;
      generateIncorrect();
      // console.log(STORE.scoreIncorrect);
    }

    // console.log('submit button ran')
  });


  // console.log('`handleSubmitAnswer` ran.');
}

// This function will handle when a user clicks next question
function handleNextQuestion() {
  $('main').on('click', '#nextQuestionBtn', event => {
    event.preventDefault();
    STORE.questionNumber ++;
    if (STORE.questionNumber <= STORE.questions.length) {
      generateQuestion();
    }
    else {
      generateEndQuiz();
    }
    
    // console.log('NextQuestion works')
  });

  // console.log('`handleNextQuestion` ran.');
}

// This function will handle when a user clicks new game
function handleNewQuiz() { 
  $('main').on('click', '#endBtn', event => {
    event.preventDefault();
    STORE.quizStarted = false;
    STORE.questionNumber = 0;
    STORE.scoreCorrect = 0;
    STORE.scoreIncorrect = 0;

    // console.log(STORE.quizStarted)
    // console.log(STORE.questionNumber)
    // console.log(STORE.scoreCorrect)
    // console.log(STORE.scoreIncorrect)
    // console.log('new game works')
    renderQuiz();
  });

  // console.log('`handleNewQuiz` ran.');
}

//  This function will be callback when page loads. Responsible for initial quiz rendering, and activating handler functions for quiz.
function handleQuiz() {
  renderQuiz();
  handleStartQuizBtn();
  handleDoNotStartQuiz();
  handleSubmitAnswer();
  handleNextQuestion();
  handleNewQuiz();
}

$(handleQuiz);