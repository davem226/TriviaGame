// Create array of questions
questions = [
    "About how much time passes in the show from the first to the last episode?",
    "Walter White's sister-in-law is named",
    "Hank works for what organization?",
    "Gus Fring was born in which country?",
    "Walt spends much of seasons 3 and 4 working in what kind of structure?",
    "Which book serves as the catalyst of Walter's demise?",
];

// Create object constructor for questions and answer choices
function Question(question, correct, wrongA, wrongB, wrongC) {
    this.question = question;
    this.correctAns = correct;
    this.choiceA = wrongA;
    this.choiceB = wrongB;
    this.choiceC = wrongC;
}

// Create each question as an object
var zero = new Question(questions[0], "2 years", "5 years", "6 years", "1 year");
var one = new Question(questions[1], "Marie", "Skyler", "Claire", "Holly");
var two = new Question(questions[2], "DEA", "APD", "FBI", "US Border Patrol");
var three = new Question(questions[3], "Chile", "Mexico", "Columbia", "United States");
var four = new Question(questions[4], "Laundry Facility", "High School", "RV", "Basement");
var five = new Question(questions[5], "Leaves of Grass", "Advanced Organic Chemistry", "The Learn'd Astronomer", "The Life of Werner Heisenberg");

// Create a startQuiz() function
$("#start").click(function() {
    // Hide quiz box
    $("#quiz").hide();

    // Play gif
    $("#gif-box").show();

    // Play audio -- * Note, URL is relative to HTML, not JS file * -- UGH!!
    var theme = new Audio('assets/media/theme.mp3');
    theme.play();

    // After gif plays once, stop theme, hide gif, show quiz box, hide start button
    

    // Sets score to zero before start of quiz
    let wins = 0; losses = 0; unanswered = 0;

});


// Create changeQuestion() function that...
//  creates a timer div...
//      insert "Time Remaining: " into html
//      insert countdown timer (30 seconds) into html
//  a question div... 
//      insert element of question array into html
//  a choices div...
//      insert correct and wrong answers randomly into html as p tags
//  create click events for each answer choice

// Create a endQuiz() function

// Create a changeQuestion() function that...
//  executes... 
//      if timer runs out...
//      else if answer is correct... 
//      else answer is incorrect...

$(document).ready(function () {

});