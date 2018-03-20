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
        question1: ['Which actor made his debut as James Bond in the film Casino Royale in 2006?','Daniel Craig','Idris Elba','Frank Lampard',
    'Owen Wilson'],
        question2: ['In which city where the 2016 summer Olympics held?','Toronto','Baku','Rio','Gold Coast'],
        question3: ['The character Jar Jar Binks first appears in which of the Star Wars movies?','Ep1 Phantom Menace','Ep4 New Hope','Ep3 Revenge of the Sith', 'Ep7 Force Awakens'],
        question4: ['Which actor plays the role of Captain Jack Sparrow in the Pirates of the Caribbean movies?','Leo DiCaprio','Bladee','Will Smith','Johnny Depp'],
        question5: ['Chris Hemsworth plays which superhero?','answerN','answerO','answerP'],
        question6: ['Which rapper dropped the single God\'s plan?', 'Future', 'Jay Z','Drake','LL Cool J'],
        question7: ['The team that won the 2014 World Cup is ?', 'Spain', 'France','Brazil', 'Germany'],
        question8: ['Which artist had the hit single \'Hello\' ', 'Lady Gaga', 'Adele', 'Taylor Swift', 'Halsey'],
        question9: ['Which super hero was bit by a radio-active spider', 'Spider-Man','Ant-Man','Spider-Hero','Tarantula'],
        question10: ['Who was the founder of Coca-Cola', 'Sam Walton', 'Barack Obama', 'Asa Griggs Candler', 'Caleb Bradham'],
        question11: ['In which year did the great recession occur','2008','2009','1993','1999'],
        question12: ['A solar eclipse had everyone in North America rushing outside to witness the rare natural phenomenon in 2017. When did it happen?',
        'January','May','December','August'],
        question13: ['Which trivia mobile app game was widely popular in late 2017, early 2018','Trivia Crack','HQ','Triviagogo','Trivster'],
    };

    //Time 
    //Question 1 
    $('.questions').append('<div style="margin-top:15px;">'+trivia.question1[0]+'</div>')
    //Options 1
    $('.questions').append('<input type="radio" name="question1" value="answer1"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question1[1]}</label>`+'</input>').append(
        '<input type="radio" name="question1" value="answer2" style="margin-left:100px;">' + `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question1[2]}</label>`+'</input>').append(
            '<input type="radio" name="question1" value="answer3" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question1[3]}</label>`+'</input>').append(
                '<input type="radio" name="question1" value="answer4" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question1[4]}</label>`+'</input>');

    
    
    //Question 2
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question2[0]+'</div>')
    //Options 2
    $('.questions').append('<input type="radio" name="question5" value="answer4"> '+
    trivia.question2[1] + '</input>').append(
        '<input type="radio" name="question2" value="answer6" style="margin-left:100px;">'+trivia.question2[2]+'</input>').append(
            '<input type="radio" name="question2" value="answer7" style="margin-left:100px;">'+trivia.question2[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer8" style="margin-left:100px;">'+trivia.question2[4]+'</input>');
    
    //Question 3
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question3[0]+'</div>')
    //Options 3
    $('.questions').append('<input type="radio" name="question3" value="answer9"> '+
    trivia.question3[1] + '</input>').append(
        '<input type="radio" name="question3" value="answer10" style="margin-left:100px;">'+trivia.question3[2]+'</input>').append(
            '<input type="radio" name="question3" value="answer11" style="margin-left:100px;">'+trivia.question3[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer12" style="margin-left:100px;">'+trivia.question3[4]+'</input>');

    //Question 4
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question4[0]+'</div>')

    //Options 4
    $('.questions').append('<input type="radio" name="question4" value="answer13"> '+
    trivia.question4[1] + '</input>').append(
        '<input type="radio" name="question4" value="answer14" style="margin-left:100px;">'+trivia.question4[2]+'</input>').append(
            '<input type="radio" name="question4" value="answer15" style="margin-left:100px;">'+trivia.question4[3]+'</input>').append(
                '<input type="radio" name="question4" value="answer16" style="margin-left:100px;">'+trivia.question4[4]+'</input>');


    //Question 5
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 5
    $('.questions').append('<input type="radio" name="question17" value="answer14"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question5" value="answer18" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question5" value="answer19" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer20" style="margin-left:100px;">'+trivia.question2[4]+'</input>');
    //Question 6
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question6[0]+'</div>')

    //Options 6
    $('.questions').append('<input type="radio" name="question6" value="answer21"> '+
    trivia.question6[1] + '</input>').append(
        '<input type="radio" name="question6" value="answer22" style="margin-left:100px;">'+trivia.question6[2]+'</input>').append(
            '<input type="radio" name="question6" value="answer23" style="margin-left:100px;">'+trivia.question6[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer24" style="margin-left:100px;">'+trivia.question2[4]+'</input>');
    
    //Question 7
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 7
    $('.questions').append('<input type="radio" name="question5" value="answer25"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question5" value="answer26" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question5" value="answer27" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer28" style="margin-left:100px;">'+trivia.question2[4]+'</input>');

    //Question 8
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 8
    $('.questions').append('<input type="radio" name="question5" value="answer29"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question5" value="answer30" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question5" value="answer31" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer32" style="margin-left:100px;">'+trivia.question2[4]+'</input>');

    //Question 9
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 9
    $('.questions').append('<input type="radio" name="question33" value="answer13"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question5" value="answer34" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question5" value="answer35" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer36" style="margin-left:100px;">'+trivia.question2[4]+'</input>');

    //Question 10
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 10
    $('.questions').append('<input type="radio" name="question5" value="answer37"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question5" value="answer38" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question5" value="answer39" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer40" style="margin-left:100px;">'+trivia.question2[4]+'</input>');

    //Question 11
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 11
    $('.questions').append('<input type="radio" name="question11" value="answer41"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question42" value="answer42" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question43" value="answer43" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question44" value="answer44" style="margin-left:100px;">'+trivia.question2[4]+'</input>');

    //Question 12
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 12
    $('.questions').append('<input type="radio" name="question5" value="answer45"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question5" value="answer46" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question5" value="answer47" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer48" style="margin-left:100px;">'+trivia.question2[4]+'</input>');

    //Question 13
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 13
    $('.questions').append('<input type="radio" name="question5" value="answer49"> '+
    trivia.question5[1] + '</input>').append(
        '<input type="radio" name="question5" value="answer50" style="margin-left:100px;">'+trivia.question5[2]+'</input>').append(
            '<input type="radio" name="question5" value="answer51" style="margin-left:100px;">'+trivia.question5[3]+'</input>').append(
                '<input type="radio" name="question2" value="answer52" style="margin-left:100px;">'+trivia.question2[4]+'</input>');



    
    //Counter
    
    $('.counter').text()
    let counter = $('.counter');


    let game = setInterval(function(){
        if(parseInt(counter.text()) == 0) {
            //Is 90th minute
            $('#game').hide();
            $('#finish').show();
            $('.counter'.append('0'))
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