var score = 0; //Set score to 0 initially
var total = 5; //This is the total number of questions in this quiz
var point = 1; // This refers to points awarded per correct answer
var highest = total * point; //This is the highest possible score which is the total multiplied by the points awarded

//Initializer
function init () {
  //set correct answers
  sessionStorage.setItem('a1','c');//'a1' represents answer 1. So, answer 1 is 'c'
  sessionStorage.setItem('a2','a');//'a2' represents answer 2. So, answer 2 is 'a'
  sessionStorage.setItem('a3','b');//'a3' represents answer 3. So, answer 3 is 'b'
  sessionStorage.setItem('a4','b');//'a4' represents answer 4. So, answer 4 is 'b'
  sessionStorage.setItem('a5','b');//'a5' represents answer 5. So, answer 5 is 'b'
}

$(document).ready(function() {
  //Hide all questions
  $('.questionForm').hide();

  //Show first question
  $('#q1').show();

  $('.questionForm #submit').click(function() {
    //Get data attributes
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question')+1;
    //Hide all questions
    $('.questionForm').hide();
    //Show next question
    $('#q'+next+'').fadeIn(300);
    process(''+current+'');
    return false;

    event.preventDefault();
  });
});

//Process the answers. This will take the submitted answers and compare them with the correct answers that we have in the sessionStorage variable
function process(n) {
  //Get input value
  var submitted = $('input [name=q'+n+']:checked').val();
  if(submitted==sessionStorage.getItem('a'+n+'')) {
        score+1;
  }

  if(n==total) {
    $('#results').html('<h3>Your final score is: '+score+' out of 5</h3><a href="index.html">Take Quiz Again</a>');
  }
  return false;
}

//Add event listener
window.addEventListener('load', init, false);//This will listen for the load event. When the load event happens, it'll run 'init', which will set the answer items
