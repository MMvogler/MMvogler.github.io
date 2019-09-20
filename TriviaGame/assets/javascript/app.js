
// Variable to position the timer on the page
var timerText = $("#timer");

// Variables for game scoring
var corrAnswers = 0;
var incorrAnswers = 0;
var unansweredQs = 0;
var countDown = 60;

// The start button
var startButton;

// Array of questions with their answers 

var questions = [
    {
        question : "Twizzlers were made in what year?",
        answers : ["1972","1929","1884"],
        correct : "1929",
    },

    {
        question : "The Hershey Company was worth how much in 2017?",
        answers : ["$23 million","$254 million", "$783 million"],
        correct : "$783 million",
    },

    {
        question : "What is the largest candy company in the world?",
        answers: ["The Hershey Company","Mars Inc.","Nestle"],
        correct : "Mars Inc.",
    }
]

var counter = 12;

// Counter that counts down
function count () {

    counter--;

    $("#timer").text(counter);

    // Counter stops at zero 
    if(counter === 0) {

        // Hide the counter
        $("#game").hide();

        // // Display the user's score
        // $("#score").display();

    }
    
    }

// A start button that starts the counter
$(".btn").on("click", function() {
   
   // Hides the button once it is pressed
    $(".btn").hide();

     // Counts one second at a time
    var timer = setInterval(count, 1000);

    // // Variable for the users answers 
    // var response = append(questions[i].append);

    // var questionOrder = -1;

    // Display questions with their answer choices
    for (var i = 0; i< questions.length; i++) {
        console.log(questions[i].question);
        $("#quiz-area").append("<h2>" + questions[i].question + "</h2>" );

        for (var j = 0; j < questions[i].answers.length; j++) {
            console.log(questions[i].answers[j]);
            $("#quiz-area").append("<p>" + questions[i].answers[j] + "</p>");
            // $(".box").append('<button class="checkAnswer"
            //     answersText=${questions[i].answers[j]}
            //     correctAnswer=${questions[i].correct}>
            //     ${questions[i].answers[j]}</button>');
        }


        // function displayCheckbox(){
        //     if(questionOrder < questions.length-1)
        //         {questionOrder++;
        //         $("#box").html(<h2>${questions[questionNumber].question}</h2>);
        //         for(var j = 0; j<  )
        //         }

        // $(".box").append("checkbox" + questions[i].answers[j]);

        // if (response === questions[i].correct) {
        //     corrAnswers ++;
        // } else {
        //     incorrAnswers ++;
        // }
        
    }
   
})






