
$(document).ready(function(){
  //f a way for the program to choose a random number between 1 and 100, save this a
  var number= Math.floor(Math.random()*100);
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var guess= $('input').val();
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (number === guess)
    {
      alert('YOU GOT IT')
      }
      else if (number< guess)
        {
        alert('GUESS LOWER')
      }
       else
       {
         alert('GUESS HIGHER BITCH')
       }
       ));
       ));
    
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
