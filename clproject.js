//begin JavaScript for Quote Generator

    $(document).ready(function(){
    
        var el = document.getElementById("quotes");
        
        var quotes = [
      ["Travel makes one modest. You see what a tiny place you occupy in the world.", "-Gustav Flaubert"],
	    ["The gladdest moment in human life, me thinks, is a departure into unknown lands.", "-Sir Richard Burton"],	
	    ["Traveling – it leaves you speechless, then turns you into a storyteller.", "-Ibn Battuta"],
	    ["Like all great travelers, I have seen more than I remember, and remember more than I have seen.", "-Benjamin Disraeli"],	
	    ["Take only memories, leave only footprints.", "-Chief Seattle"], 
      ["A great way to learn about your country is to leave it.", "-Henry Rollins"], 	
	    ["Travel is never a matter of money but of courage.", "-Paolo Coelho"], 	
      ["Travel far enough, you meet yourself.", "-David Mitchell"], 
      ["Life is either a daring adventure or nothing at all.", "-Helen Keller"],
      ["Life shrinks or expands in proportion to one’s courage.", "-Anais Nin"], 

    ];

//define the containers to target
var lastNum;
var randomNum;
var thisQuote = "Not all those who wander are lost.";
var thisAuthor = "J.R.R. Tolkien";

//getting a new random number to attach to a quote
var randomNumberFinder = function() {
  randomNum = Math.floor((Math.random()*quotes.length)+1);
  return randomNum;
};

//set a new quote
$(document).ready(function() {
  $("#newQuote").click(function() {
    randomNum = randomNumberFinder();
    if (lastNum !== randomNum) {
      $("#quote").text(quotes[randomNum][0]);
      $("#author").text(quotes[randomNum][1]);
      lastNum = randomNum;
      thisQuote = quotes[lastNum][0];
      thisAuthor = quotes[lastNum][1];
    }
    else {
      if (randomNum < quotes.length-2) {
        $("#quote").text(quotes[randomNum+1][0]);
        $("#author").text(quotes[randomNum+1][1]);
        lastNum = randomNum+1;
        thisQuote = quotes[lastNum][0];
        thisAuthor = quotes[lastNum][1];
      }
      else {          
        $("#quote").text(quotes[randomNum-2][0]);
        $("#author").text(quotes[randomNum-2][1]);
        lastNum = randomNum-2;
        thisQuote = quotes[lastNum][0];
        thisAuthor = quotes[lastNum][1];
        }
      }
    });//end newQuote function

  })})