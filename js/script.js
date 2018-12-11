
$(document).ready(function() {
  //Hide all questions
  $('.questionForm').hide();
  var score = 0; //Set score to 0 initially. This will be increased by 1 for every correct answer submitted
  var total = 5; //This is the total number of questions in this quiz
  var point = 1; // This refers to points awarded per correct answer
  var highest = total * point; //This is the highest possible score which is the total multiplied by the points awarded

  //Show first question
  $('#q1').show();

  $('.questionForm #submit1').click(function() {
    var answer1 = $("input:radio[name=q1]:checked").val();
    if(answer1 == "c"){
      score++;
    }
    $('.questionForm#q2').show();
    $('.questionForm#q1').hide();
  event.preventDefault();
  });
 $('.questionForm #submit2').click(function() {
  var answer2 = $("input:radio[name=q2]:checked").val();
  if(answer2 == "a"){
    score++;
  }
  $('.questionForm#q3').show();
  $('.questionForm#q2').hide();
  event.preventDefault();
 })
 $('.questionForm #submit3').click(function() {
  var answer3 = $("input:radio[name=q3]:checked").val();
  if(answer3 == "b"){
    score++;
  }
  $('.questionForm#q4').show();
  $('.questionForm#q3').hide();
  event.preventDefault();
 })
 $('.questionForm #submit4').click(function() {
  var answer4 = $("input:radio[name=q4]:checked").val();
  if(answer4 == "b"){
    score++;
  }
  $('.questionForm#q5').show();
  $('.questionForm#q4').hide();
  event.preventDefault();
 })
 $('.questionForm #submit5').click(function() {
  var answer5 = $("input:radio[name=q5]:checked").val();
  if(answer5 == "b"){
    score++;
  }
  $('.questionForm#q5').hide();
  $('#results').html('<h3>Your final score is: '+score+' out of 5</h3><a href="index.html">Take Quiz Again</a>');
  event.preventDefault();
 })
});
