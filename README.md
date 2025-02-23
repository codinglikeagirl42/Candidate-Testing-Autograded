# Candidate-Testing-Autograded

Welcome to your first graded assignment!

We have broken this assignment into 3 parts:

  **Part 1:** You will create a one-question quiz.  This quiz will also ask for the user's name.
  
  **Part 2:** You will create a 5-question quiz.  You will create a way to store and display questions, correct answers, and user answers.
  
  **Part 3:** You will compare the user's answers with the correct answer and provide a final score.  The score will also tell the user if they passed or failed.

The starter code contains `TODO` statements to guide you.  Look for them as you work through this assignment.

You will need to complete Part 3 to recieve credit for this assignment.

## Assignment Requirements
For this assignment, create a quiz program that meets each of the following conditions:

   1. Use arrays to store 5 quiz questions, the correct answers, and the candidate's answers,
   1. Presents each question to a "candidate" and prompt them for a response,
   1. Does NOT consider case when checking answers,
   1. Includes at least one loop and one conditional,
   1. Uses at least one template literal,
   1. Calculates the candidate's score as a percentage,
   1. Correctly accepts or rejects a candidate based on their percentage.

The output from the program will look similar to the following:

<img width="836" alt="FinalExpectedOutput" src="https://github.com/LaunchCodeEducation/Candidate-Testing-Autograded-Solution/assets/66076696/4d4b2262-f6b9-4d99-8b51-660347dedf70">


## Unit Tests


Even though we are using unit tests to speed up the grading process, it is _CRUCIAL_ that you have your student review their final code with you.  This will help them build skills such as how to talk about code and confidence.

1. Provided with the assignment starter code is a suite of unit tests. These provide a starting point to assess the viability of a student"s solution. 
1. Run the unit tests inside of the submitted repl using the command: ``npm test`` and select the option to run all tests.
1. A passing assignment will have an output of: ``17 specs, 0 failures``.
1. This test suite is designed to give you a quick indication of which of the students' submissions meet the assignment requirements. If the output matches the above, use the section that follows as your guide for what to check in their code.
1. If the number of failures is not zero, use the title of the failing test(s) as a starting point in your evaluation. Provide the student with feedback on what requirement is not met and work with them on a plan and timeline for resubmission.
1. If the number of specs is not ``17``, check that the student has not altered the spec file in any way. If they have, let them know that the unit tests must remain in place in order to receive a passing grade and encourage them to resubmit with an unaltered test suite.
1. A submission cannot be graded on unit tests alone. You will need to schedule time with your TA to demonstrate your project once you pass all of the unit tests.
 
### Troubleshooting Autograded Assignments

***TODO - link to A0***
Refer to [Assignment 0](TODO) for help running the autograded tests

Initial install troubleshooting:
1. Fork and clone the repo
2. Using your terminal, `cd` into the project directory
    a. if you run `ls` you should see `index.js` and other files.  
4. Run `npm install` 
5. Run `npm install jest` this installs the unit testing packages needed for this project.
6. If having trouble with `readline-sync` run this command `npm i readline-sync`.
