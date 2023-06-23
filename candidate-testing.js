const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync');
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const input = require('readline-sync');
  //candidateAnswer = input.question(question);
  // Part 2.2
  for (let i=0; i<questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));  
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  //if (correctAnswer === candidateAnswer){
  //  console.log("You Got it right");
  //  } 
  //else {
  //  console.log("Sorry you missed it");
  //  }
  
  //3.1
  let totalCorrect = 0;
  // 2.3
  for (let j = 0; j < correctAnswers.length; j++) {
    console.log(`${j+1}) ${questions[j]}`);
    console.log(`Your Answer: ${candidateAnswers[j]}`);
    console.log(`Correct Answer: ${correctAnswers[j]}`);
    console.log('\n');
    if (correctAnswers[j].toLowerCase() === candidateAnswers[j].toLowerCase()){
      totalCorrect ++;
    }
  }
  //TODO 3.2a use this variable to calculate the candidates score.
  //TODO 3.2b calculate the candidate's percentage

  let grade = (totalCorrect / questions.length) * 100; 
  console.log(`>>> Overall Grade: ${grade}% (${totalCorrect} of ${questions.length} responses correct) <<<`);
  if (grade >= 80){
    console.log(">>> Status: PASSED, Happy Dance!! <<<");
  } else {
      console.log(">>> Status: FAILED <<<");
  }


  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Welcome " + candidateName + "!!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};