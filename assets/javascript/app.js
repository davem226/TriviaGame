// Create array of questions
questions = [
    "Which biome type has the most number of species per unit area?",
    "How many species of birds breed in Ohio?",
    "Which team won the 2008 Stanley Cup?",
    "Who was the starting goalie for the team that lost the 2008 Stanley Cup?",
    "Which biome type covers the largest land area throughout the world?",
    "In what year was the original Ninentendo Entertainment System released in the US?",
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
var one = new Question(questions[0], "Tropical Rainforest", "Boreal Forest", "African Savanna", "Tundra");
var two = new Question(questions[1], 192, 26, 52, 598);
var three = new Question(questions[2], "Detroit Red Wings", "Pittsburgh Penguins", "Toronto Maple Leafs", "New Jersey Devils");
var four = new Question(questions[3], "Marc-Andre Fleury", "Patrick Roy", "Dominik Hasek", "Sidney Crosby");
var five = new Question(questions[4], "Boreal Forest", "Tropical Rainforest", "Desert", "Temperate Deciduous Forest");
var six = new Question(questions[5], 1986, 1983, 1988, 1993);



// Create a startGame() function that...
//  generates click event for start button
//  hides the start div
//  executes the showQuestion() function

// Create showQuestion(randNum) function that...
//  takes a random number as an argument to render the next question randomly
//  creates a timer div...
//      insert "Time Remaining: " into html
//      insert countdown timer (30 seconds) into html
//  a question div... 
//      insert element of question array into html
//  a choices div...
//      insert correct and wrong answers randomly into html as p tags
//  create click events for each answer choice

// Create a changeQuestion() function that...
//  executes... 
//      if timer runs out...
//      else if answer is correct... 
//      else answer is incorrect...

$(document).ready(function () {

});