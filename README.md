
<html>
  <head>
    <title>Memory Game</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <script type="text/javascript" src="http://code.jquery.com/jquery-2.0.0.min.js"></script>
    <script type="text/javascript" src="application.js"></script>
  </head>
  <body>
    <header>
      <h1>Memory Game</h1>
    </header>
    <div id="card_holder">
      <!-- use Javascript / JQuery to create cards with the class 'card' here-->
    </div>
    <p id="clear">Click to Clear</p>
  </body>
</html>









# ifree98516.github.io
$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"];
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter
        
        

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
  var shuffled_array = shuffle(card_array);
  for(i in shuffled_array){
    $('#card_holder').append('<div class="card"><p>'+shuffled_array[i]+'</p></div>');
  } 
    var click_count= 0;
    var click_1= 'nothing';
    var click_2= 'nothing';
  $(".card").click (function() {
     $(this).find('p').css("opacity",1);
      click_1 = $(this).find('p').text();
  });  
  if(click_1 != click_2){
