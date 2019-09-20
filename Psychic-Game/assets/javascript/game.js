
// Array of letters for the user to guess.
var letters = ["h", "a", "k", "w"];

// Variables that hold the number of wins, losses and how many guesses user has left.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var currentGuesses = [];

// Variables for where in HTML things need to go.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guessesLeft-text");
var guessesListText = document.getElementById("guesses-text");

// This function runs when the user presses a key.
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();
        console.log(userguess);



    // Randomly chooses a letter to be guessed.
    var chosenLetters = letters[Math.floor(Math.random()*letters.length)];

    // How to lose or win the game
        if ((userguess === "h") || 
        (userguess === "a") || 
        (userguess === "k") || 
        (userguess === "w")) {
        wins++;
    
        } else if (guessesLeft === 0) {
            // End game when user has run out of guesses
            setGameOver();
        } else {
            currentGuesses.push(userguess);
            losses++;
            --guessesLeft;
           
        
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses Left: " + guessesLeft; 
        guessesListText.textContent = "Your Guesses so far: " + currentGuesses;        


        function setGameOver() {
            wins = 0;
            losses = 0;
            guessesLeft = 10;
            currentGuesses = []; 
        }
   

   
}
   
   
   






    







