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
        question2: ['In which city was the 2016 summer Olympics held?','Toronto','Baku','Rio','Gold Coast'],
        question3: ['The character Jar Jar Binks first appears in which of the Star Wars movies?','Ep1 Phantom Menace','Ep4 New Hope','Ep3 Revenge of the Sith', 'Ep7 Force Awakens'],
        question4: ['Which actor plays the role of Captain Jack Sparrow in the Pirates of the Caribbean movies?','Leo DiCaprio','Bladee','Will Smith','Johnny Depp'],
        question5: ['Chris Hemsworth plays which superhero?','Captain America','Super Man','Iron Man', 'Thor'],
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
    $('.questions').append('<input type="radio" name="question2" value="answer5"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question2[1]}</label>`+'</input>').append(
        '<input type="radio" name="question2" value="answer6" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question2[2]}</label>`+'</input>').append(
            '<input type="radio" name="question2" value="answer7" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question2[3]}</label>`+'</input>').append(
                '<input type="radio" name="question2" value="answer8" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question2[4]}</label>`+'</input>');
    
    //Question 3
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question3[0]+'</div>')
    //Options 3
    $('.questions').append('<input type="radio" name="question3" value="answer9"> '+ `<label style="font-size: 16px; color:rgb(148, 16, 11)">${trivia.question3[1]}</label>`+'</input>').append(
        '<input type="radio" name="question3" value="answer10" style="margin-left:100px;">'+ `<label style="font-size: 16px; color:rgb(148, 16, 11)">${trivia.question3[2]}</label>`+'</input>').append(
            '<input type="radio" name="question3" value="answer11" style="margin-left:100px;">'+ `<label style="font-size: 16px; color:rgb(148, 16, 11)">${trivia.question3[3]}</label>`+'</input>').append(
                '<input type="radio" name="question3" value="answer12" style="margin-left:100px;">'+ `<label style="font-size: 16px; color:rgb(148, 16, 11)">${trivia.question3[4]}</label>`+'</input>');

    //Question 4
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question4[0]+'</div>')

    //Options 4
    $('.questions').append('<input type="radio" name="question4" value="answer13"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question4[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question4" value="answer14" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question4[2]}</label>`+'</input>').append(
            '<input type="radio" name="question4" value="answer15" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question4[3]}</label>`+'</input>').append(
                '<input type="radio" name="question4" value="answer16" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question4[4]}</label>`+'</input>');


    //Question 5
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question5[0]+'</div>')

    //Options 5
    $('.questions').append('<input type="radio" name="question5" value="answer17"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question5[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question5" value="answer18" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question5[2]}</label>`+'</input>').append(
            '<input type="radio" name="question5" value="answer19" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question5[3]}</label>`+'</input>').append(
                '<input type="radio" name="question5" value="answer20" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question5[4]}</label>`+'</input>');
    //Question 6
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question6[0]+'</div>')

    //Options 6
    $('.questions').append('<input type="radio" name="question6" value="answer21"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question6[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question6" value="answer22" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question6[2]}</label>`+'</input>').append(
            '<input type="radio" name="question6" value="answer23" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question6[3]}</label>`+'</input>').append(
                '<input type="radio" name="question6" value="answer24" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question6[4]}</label>`+'</input>');
    
    //Question 7
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question7[0]+'</div>')

    //Options 7
    $('.questions').append('<input type="radio" name="question7" value="answer25"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question7[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question7" value="answer26" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question7[2]}</label>`+'</input>').append(
            '<input type="radio" name="question7" value="answer27" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question7[3]}</label>`+'</input>').append(
                '<input type="radio" name="question7" value="answer28" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question7[4]}</label>`+'</input>');

    //Question 8
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question8[0]+'</div>')

    //Options 8
    $('.questions').append('<input type="radio" name="question8" value="answer29"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question8[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question8" value="answer30" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question8[2]}</label>`+'</input>').append(
            '<input type="radio" name="question8" value="answer31" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question8[3]}</label>`+'</input>').append(
                '<input type="radio" name="question8" value="answer32" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question8[4]}</label>`+'</input>');

    //Question 9
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question9[0]+'</div>')

    //Options 9
    $('.questions').append('<input type="radio" name="question9" value="answer33"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question9[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question9" value="answer34" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question9[2]}</label>`+'</input>').append(
            '<input type="radio" name="question9" value="answer35" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question9[3]}</label>`+'</input>').append(
                '<input type="radio" name="question9" value="answer36" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question9[4]}</label>`+'</input>');

    //Question 10
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question10[0]+'</div>')

    //Options 10
    $('.questions').append('<input type="radio" name="question5" value="answer37"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question10[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question10" value="answer38" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question10[2]}</label>`+'</input>').append(
            '<input type="radio" name="question10" value="answer39" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question10[3]}</label>`+'</input>').append(
                '<input type="radio" name="question10" value="answer40" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question10[4]}</label>`+'</input>');

    //Question 11
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question11[0]+'</div>')

    //Options 11
    $('.questions').append('<input type="radio" name="question11" value="answer41"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question11[1]}</label>`+'</input>').append(
        '<input type="radio" name="question11" value="answer42" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question11[2]}</label>`+'</input>').append(
            '<input type="radio" name="question11" value="answer43" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question11[3]}</label>`+'</input>').append(
                '<input type="radio" name="question11" value="answer44" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question11[4]}</label>`+'</input>');

    //Question 12
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question12[0]+'</div>')

    //Options 12
    $('.questions').append('<input type="radio" name="question12" value="answer45"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question12[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question12" value="answer46" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question12[2]}</label>`+'</input>').append(
            '<input type="radio" name="question12" value="answer47" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question12[3]}</label>`+'</input>').append(
                '<input type="radio" name="question12" value="answer48" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question12[4]}</label>`+'</input>');

    //Question 13
    $('.questions').append('<div style="margin-top:35px;">'+trivia.question13[0]+'</div>')

    //Options 13
    $('.questions').append('<input type="radio" name="question13" value="answer49"> '+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question13[1]}</label>`+ '</input>').append(
        '<input type="radio" name="question13" value="answer50" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question13[2]}</label>`+'</input>').append(
            '<input type="radio" name="question13" value="answer51" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question13[3]}</label>`+'</input>').append(
                '<input type="radio" name="question13" value="answer52" style="margin-left:100px;">'+ `<label style="font-size: 20px; color:rgb(148, 16, 11)">${trivia.question13[4]}</label>`+'</input>');



    
    //Counter
    
    $('.counter').text('100')
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
        $('input[type="radio"][name=question1]:checked').val() =="answer3" || 
        $('input[type="radio"][name=question1]:checked').val() =="answer4" ){
            guessedWrong++;
        }else{
            unanswered++;
        }
    
        //Question2
    
        if ($('input[type="radio"][name=question2]:checked').val() == "answer7") {
            guessedRight++;
        }else if($('input[type="radio"][name=question2]:checked').val() == "answer5" ||
        $('input[type="radio"][name=question2]:checked').val() == "answer6" || 
        $('input[type="radio"][name=question1]:checked').val() =="answer8"){
            guessedWrong++;
        }else{
            unanswered++;
        }
    
        //Question3
        if ($('input[type="radio"][name=question3]:checked').val() == "answer9") {
            guessedRight++;
        }else if($('input[type="radio"][name=question3]:checked').val() == "answer10" || 
        $('input[type="radio"][name=question3]:checked').val() == "answer11" || 
        $('input[type="radio"][name=question1]:checked').val() =="answer12"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 4
        if ($('input[type="radio"][name=question4]:checked').val() == "answer16") {
            guessedRight++;
        }else if($('input[type="radio"][name=question4]:checked').val() == "answer13" || 
        $('input[type="radio"][name=question4]:checked').val() == "answer14" || 
        $('input[type="radio"][name=question4]:checked').val() =="answer15"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 5
        if ($('input[type="radio"][name=question5]:checked').val() == "answer20") {
            guessedRight++;
        }else if($('input[type="radio"][name=question5]:checked').val() == "answer17" || 
        $('input[type="radio"][name=question5]:checked').val() == "answer18" || 
        $('input[type="radio"][name=question5]:checked').val() =="answer19"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 6

        if ($('input[type="radio"][name=question6]:checked').val() == "answer23") {
            guessedRight++;
        }else if($('input[type="radio"][name=question6]:checked').val() == "answer21" || 
        $('input[type="radio"][name=question6]:checked').val() == "answer22" || 
        $('input[type="radio"][name=question6]:checked').val() =="answer24"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 7

        if ($('input[type="radio"][name=question7]:checked').val() == "answer28") {
            guessedRight++;
        }else if($('input[type="radio"][name=question7]:checked').val() == "answer25" || 
        $('input[type="radio"][name=question7]:checked').val() == "answer26" || 
        $('input[type="radio"][name=question7]:checked').val() =="answer27"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 8

        if ($('input[type="radio"][name=question8]:checked').val() == "answer30") {
            guessedRight++;
        }else if($('input[type="radio"][name=question8]:checked').val() == "answer29" || 
        $('input[type="radio"][name=question8]:checked').val() == "answer31" || 
        $('input[type="radio"][name=question8]:checked').val() =="answer32"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 9

        if ($('input[type="radio"][name=question9]:checked').val() == "answer33") {
            guessedRight++;
        }else if($('input[type="radio"][name=question9]:checked').val() == "answer34" || 
        $('input[type="radio"][name=question9]:checked').val() == "answer35" || 
        $('input[type="radio"][name=question9]:checked').val() =="answer36"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 10

        if ($('input[type="radio"][name=question10]:checked').val() == "answer39") {
            guessedRight++;
        }else if($('input[type="radio"][name=question10]:checked').val() == "answer37" || 
        $('input[type="radio"][name=question10]:checked').val() == "answer38" || 
        $('input[type="radio"][name=question10]:checked').val() =="answer40"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 11

        if ($('input[type="radio"][name=question11]:checked').val() == "answer41") {
            guessedRight++;
        }else if($('input[type="radio"][name=question11]:checked').val() == "answer42" || 
        $('input[type="radio"][name=question11]:checked').val() == "answer43" || 
        $('input[type="radio"][name=question11]:checked').val() =="answer44"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 12

        if ($('input[type="radio"][name=question12]:checked').val() == "answer48") {
            guessedRight++;
        }else if($('input[type="radio"][name=question12]:checked').val() == "answer45" || 
        $('input[type="radio"][name=question12]:checked').val() == "answer46" || 
        $('input[type="radio"][name=question12]:checked').val() =="answer47"){
            guessedWrong++;
        }else{
            unanswered++;
        }

        //Question 13

        if ($('input[type="radio"][name=question13]:checked').val() == "answer50") {
            guessedRight++;
        }else if($('input[type="radio"][name=question13]:checked').val() == "answer49" || 
        $('input[type="radio"][name=question13]:checked').val() == "answer51" || 
        $('input[type="radio"][name=question13]:checked').val() =="answer52"){
            guessedWrong++;
        }else{
            unanswered++;
        }
        
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