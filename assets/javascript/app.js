// Create array of questions
let questions = [
    "How much time passes in the show from the first to the last episode?",
    "Walter White's sister-in-law is named",
    "Hank works for what organization?",
    "Gus Fring was born in which country?",
    "Walt spends much of seasons 3 and 4 working in what kind of structure?",
    "Which book serves as the catalyst of Walter's demise?",
];

// Create object constructor for questions and answer choices
function Question(question, correct, A, B, C) {
    this.question = question;
    this.correct = correct;
    this.choiceA = A;
    this.choiceB = B;
    this.choiceC = C;
}

// Create each question as an object
var zero = new Question(questions[0], "2 years", "5 years", "6 years", "1 year");
var one = new Question(questions[1], "Marie", "Skyler", "Claire", "Holly");
var two = new Question(questions[2], "DEA", "APD", "FBI", "US Border Patrol");
var three = new Question(questions[3], "Chile", "Mexico", "Columbia", "United States");
var four = new Question(questions[4], "Laundry Facility", "High School", "RV", "Basement");
var five = new Question(questions[5], "Leaves of Grass", "Advanced Organic Chemistry", "The Learn'd Astronomer", "The Life of Werner Heisenberg");

// Declare score variables
let wins; let losses; let unanswered;

// Create a startQuiz() function
function startQuiz() {

    // Generate click event to start quiz
    $("#start").click(function () {
        // Set score to zero to begin
        wins = 0; losses = 0; unanswered = 0;

        // Hide quiz box
        $("#quiz").hide();

        // Show gif
        $("#gif-box").show();

        // Play audio -- *Note, URL is relative to HTML, not JS file -- UGH!!!
        let theme = new Audio("assets/media/theme.mp3");
        theme.play();

        // Create function to transition between intro page and quiz questions
        function transition() {
            // Hide gif
            $("#gif-box").hide();

            // Turn of audio
            theme.pause();

            // Show quiz but without start button
            $("#quiz").show();
            $("#start").hide();

            // Create new quiz divs for the timer, question, and answer choices
            $("#quiz").append("<div id='timer'></div>",
                "<div id='question'></div>",
                "<div id='choices'></div>");

            // Append p tags to choices so questions are vertically displayed
            $("#choices").append("<p id='correct'></p>",
                "<p id='a'></p>",
                "<p id='b'></p>",
                "<p id='c'></p>");
        }

        // After gif plays once, execute transition() function
        setTimeout(transition, 9 * 1000); // Change back to 9 seconds!!!!

    });


    // Show timer in html
    let timeLeft = 30;
    $("#timer").html("Time Remaining: " + timeLeft);

    // Create function to change between questions
    function changeQuestion() {

        // Start countdown
        setInterval(function () {
            timeLeft--;
            $("#timer").html("Time Remaining: " + timeLeft);
            // If time left = 0 display time's up
            if (timeLeft === 0) {
                $("#timer").html("Sorry, Time's Up...");
                clearInterval();
            }
        }, 1000);

        // Show question and answer choices -- *Will only work if I delay execution of this function
        setTimeout(function () {
            $("#question").html(zero.question);
            $("#correct").html(zero.correct);
            $("#a").html(zero.choiceA);
            $("#b").html(zero.choiceB);
            $("#c").html(zero.choiceC);
        }, 1010);
    }

    // Switch to first question after gif and theme are done playing
    setTimeout(changeQuestion, 9010);

    // Create function to generate click events for each choice
    function clickChoices() {
        $("#correct").click(function () {
            // Display correct
            $("#question").html("Correct!!!");
            wins++;

            // Insert gif
            $("#choices").html("<img src='assets/media/correct.gif'>");
        });

        $("#a").click(function () {
            // Display incorrect
            $("#question").html("Sorry, Incorrect...");
            losses++;
        });
        $("#b").click(function () {
            // Display incorrect
            $("#question").html("Sorry, Incorrect...");
            losses++;
        });
        $("#c").click(function () {
            // Display incorrect
            $("#question").html("Sorry, Incorrect...");
            losses++;
        });
    }

    // Call clickChoices after delay
    setTimeout(clickChoices, 9050);

}

$(document).ready(function () {
    // Call startQuiz() on ready
    startQuiz();

});