
$(document).ready(function(){
  var count=60;
  
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unanswered = 0;
  
      // hide containers
    $("#gameContainer").hide();
    $("#resultsBox").hide();
    
    $("#start_button").on("click", function(){
  
      // Hide the start Div from screen
      $("#startContainer").hide();
      // Show the Game Div
      $("#gameContainer").show();
  
      startCountdown();
      return;
    });
    function countdown(){
      // Decrement the counter, down from 60 seconds
      count--;
      // time left
        $("#timeLeft").html(count + " Seconds");
        // done/stop button
        $("#submit").on("click", function(){
          // Stop timer
          count = 0;
          return;
          });
            // Finish the game after the timer reaches 0
          if(count == -1){
            // Collect the radio inputs
            timeUp();
            // Hide questions
            $("#gameContainer").hide();
          }
      }
      function startCountdown(){
         setInterval(countdown, 100);
      }
      function timeUp(){
        // Checked values of Radio Buttons
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10 = $('input:radio[name="q10"]:checked').val();
        console.log("Q1" + Q1)
        if(Q1 == undefined){
            $('.button').on('mouseenter', function () {
              $(this).addClass('active');
            });
            $('.button').on('mouseleave', function () {
              $(this).removeClass('active');
            });
          unanswered++;
        }else if(Q1 === "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q2 == undefined){
          unanswered++;
        }else if(Q2 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q3 == undefined){
          unanswered++;
        }else if(Q3 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q4 == undefined){
          unanswered++;
        }else if(Q4 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q5 == undefined){
          unanswered++;
        }else if(Q5 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q6 == undefined){
          unanswered++;
        }else if(Q6 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q7 == undefined){
          unanswered++;
        }else if(Q7 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q8 == undefined){
          unanswered++;
        }else if(Q8 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q9 == undefined){
          unanswered++;
        }else if(Q9 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }if(Q10 == undefined){
          unanswered++;
        }else if(Q10 == "1"){
          correctAnswers++;
        }else{
          wrongAnswers++;
        }
        
        // $('.button').on('mouseenter', function () {
        //   $(this).addClass('active');
        // });
        // $('.button').on('mouseleave', function () {
        //   $(this).removeClass('active');
        // });
        
  
        // After answers are validated, display the score results
        $("#correctAnswers").html(correctAnswers);
        $("#wrongAnswers").html(wrongAnswers);
        $("#unanswered").html(unanswered);
  
  
        // Show the completed Score Div
        $("#resultsBox").show();
  
  
      }
  });
  
  {/* <h2>Correct Answers: <span id="correctAnswers">0</span></h2>
  <h2>Incorrect Answers: <span id="wrongAnswers">0</span></h2>
  <h2>Unanswered: <span id="unanswered">0</span></h2> */}