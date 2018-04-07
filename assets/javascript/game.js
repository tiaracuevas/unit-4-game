$(document).ready(function() {
    
    //generate random number//
    var randomNumber= Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
    $('.random-number').text("Target number: " + randomNumber)
    
    
    //generate crystal numbers
    var crystalOne= Math.floor((Math.random() * 12) + 1);
        console.log(crystalOne)
    
    var crystalTwo= Math.floor((Math.random() * 12) + 1);
        console.log(crystalTwo)
    
    var crystalThree= Math.floor((Math.random() * 12) + 1);
        console.log(crystalThree)
    
    var crystalFour= Math.floor((Math.random() * 12) + 1);
        console.log(crystalFour)
    
    //counters//
    var winCounter= 0;
    var lossCounter= 0;
    var totalScore= 0;
    
    
    //reset game//
    function reset (){
        randomNumber= Math.floor((Math.random() * 120) + 19);
        //display random number//
        $('.random-number').text("Target number: " + randomNumber);
        //do not display crystal values//
        crystalOne= Math.floor((Math.random() * 12) + 1);
        crystalTwo= Math.floor((Math.random() * 12) + 1);
        crystalThree= Math.floor((Math.random() * 12) + 1);
        crystalFour= Math.floor((Math.random() * 12) + 1);
        //reset total score & display//
        totalScore= 0;
        $('#totalScore').text("Your total score is: " + totalScore);
    }
    
    //display win/loss counters
    $('#wins').text("Wins: " + winCounter);
    $('#losses').text("Losses: " + lossCounter);

    //display total score
    $('#totalScore').text("Your total score is: " + totalScore);
    
    //win and loss functions//
    function win (){
        $('#message').text("You Win!");
        winCounter++;
        $('#wins').text("Wins: " + winCounter);
        reset ();
        
        
    }
    
    function loss (){
        $('#message').text("You Lose!");
        lossCounter++;
        $('#losses').text("Losses: " + lossCounter);
        reset ();
        
    }


    //click functions for crystal buttons//
    //crystal button 1//
    $('#crystal-one').on ('click', function (){
        totalScore= crystalOne + totalScore;
        $('#totalScore').text("Your total score is: " + totalScore);

        if (totalScore == randomNumber) {
            win();
        }
       else if (totalScore > randomNumber) {
            loss ();  
        }
    
    });
    
    //crystal button 2//
    $('#crystal-two').on ('click', function (){
        totalScore= crystalTwo + totalScore;
        $('#totalScore').text("Your total score is: " + totalScore);
    
        if (totalScore == randomNumber) {
            win();
        }
        else if (totalScore > randomNumber) {
            loss ();
        }
    });
    
    //crystal button 3//
    $('#crystal-three').on ('click', function (){
        totalScore= crystalThree + totalScore;
        $('#totalScore').text("Your total score is: " + totalScore);
    
        if (totalScore == randomNumber) {
            win();
        }
       else if (totalScore > randomNumber) {
            loss ();
        }
    });
    
    //crystal button 4//
    $('#crystal-four').on ('click', function (){
        totalScore= crystalFour + totalScore;
        $('#totalScore').text("Your total score is: " + totalScore);
    
        if (totalScore == randomNumber) {
            win();
        }
        else if (totalScore > randomNumber) {
            loss ();
        }

    });

    
    
    });
