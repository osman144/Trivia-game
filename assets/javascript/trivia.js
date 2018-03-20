"use strict";

$(document).ready(function(){


$("#game").hide();
$("#finish").hide();

//Start button 
$('.button').on("click", function(){
    $('.button').hide();
    $("#game").show();

    game();

});


function game(){
    let guessedRight= 0;
    let guessedWrong = 0;
    let unanswered = 0;

    let trivia = {
        question1: ['questionA','answerA','answerB','answerC'],
        question2: ['questionB','answerE','answerF','answerG'],
        question3: ['questionC','answerH','answerI','answerJ'],
    };

    //Time 
    //Question 1 
    $('.questions').append('<div style="margin-top:15px;">'+trivia.question1[0]+'</div>')
    //Options 1
    $('.questions').append('<input type="radio" name="question1" value="answer1"> '+ trivia.question1[1] + '</input>').append(
        '<input type="radio" name="question1" value="answer2" style="margin-left:100px;">' + 
        trivia.question1[2]+'</input>').append(
            '<input type="radio" name="question1" value="answer3" style="margin-left:100px;">'+trivia.question1[3]+'</input>');

    
    
    //Question 2
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question2[0]+'</div>')
    //Options 2
    $('.questions').append('<input type="radio" name="question2" value="answer4"> '+
    trivia.question2[1] + '</input>').append(
        '<input type="radio" name="question2" value="answer5" style="margin-left:100px;">'+trivia.question2[2]+'</input>').append(
            '<input type="radio" name="question2" value="answer6" style="margin-left:100px;">'+trivia.question2[3]+'</input>');
    
    //Question 3
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question3[0]+'</div>')
    //Options 3
    $('.questions').append('<input type="radio" name="question3" value="answer7"> '+
    trivia.question3[1] + '</input>').append(
        '<input type="radio" name="question3" value="answer8" style="margin-left:100px;">'+trivia.question3[2]+'</input>').append(
            '<input type="radio" name="question3" value="answer9" style="margin-left:100px;">'+trivia.question3[3]+'</input>');


    //Counter
    
    $('.counter').text('100')
    let counter = $('.counter');


    let game = setInterval(function(){
        if(parseInt(counter.text()) == 0) {
            //Is 90th minute
            $('#game').hide();
            $('#finish').show();
        }
        //Increment counter 
        counter.text(parseInt(counter.text())-1);
    }, 550);

    function score() {

        //Question1 
        if ($('input[type="radio"][name=question1]:checked').val() == "answer1") {
            guessedRight++;
        }else if($('input[type="radio"][name=question1]:checked').val() == "answer2" || 
        $('input[type="radio"][name=question1]:checked').val() =="answer3"){
            guessedWrong++;
        }else{
            unanswered++;
        }
    
        //Question2
    
        if ($('input[type="radio"][name=question2]:checked').val() == "answer4") {
            guessedRight++;
        }else if($('input[type="radio"][name=question2]:checked').val() == "answer5" ||
        $('input[type="radio"][name=question2]:checked').val() == "answer6"){
            guessedWrong++;
        }else{
            unanswered++;
        }
    
        //Question3
        if ($('input[type="radio"][name=question3]:checked').val() == "answer7") {
            guessedRight++;
        }else if($('input[type="radio"][name=question3]:checked').val() == "answer8" || 
        $('input[type="radio"][name=question3]:checked').val() == "answer9"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 4
        
    }

    //Submit button
    $('.questions').append('<div style="margin-top:30px"> <button class="button2"> Submit </button> </div>')
    $('.button2').click(function(){
    $('#game').hide();
    $('#finish').show();

    
    score();
    $(".right").append(guessedRight);
    $(".wrong").append(guessedWrong);
    $(".unanswered").append(unanswered);

    });



}





});