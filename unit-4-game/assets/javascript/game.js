$(document).ready(function() { 

    // Variables for the number of wins and losses in the game
    var wins = 0;
    var losses = 0;

    // Variable that reflects the users progress 
    var counter = 0;

    // Variables for where in HTML things need to go
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var counterText = document.getElementById("counter-text");

    // A number is chosen between 19 - 120 for the user to match
    var numberChoices = Math.floor(Math.random() * 120) + 20;
    console.log(numberChoices);
    numberChoicesText = document.getElementById("randomNumber");

    // Fuction that resets the counter to zero
    function reset() {

        counter = 0;

        $("#counter-text").text("0");

        // numberChoices=" ";




    }
    

    // Each crystal is given a value betwen 1 - 12 that changes after each game 
     
        $(".crystal").click(function() {
            if(parseInt(this.value) === -1) {
                this.value = Math.floor(Math.random() * 12) +1;
            }
            // Every click from every crystal adds to global counter
            counter += parseInt(this.value);

            // If the user wins
        if(counter === numberChoices) {
            wins++;
            // document.getElementById("numberChoicesText").innerHTML=wins++;
            reset();

        
        // If the user looses
        } else if (counter > numberChoices) {
            losses++;
            // document.getElementById("numberChoicesText").innerHTML=losses++;
            reset();

        }


        numberChoicesText.textContent = numberChoices;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        counterText.textContent = "Your total score is: " + counter;

        })

    
    

        numberChoicesText.textContent = numberChoices;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        counterText.textContent = "Your total score is: " + counter;

    
        
        
    
});
  