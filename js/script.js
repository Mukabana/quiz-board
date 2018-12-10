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
