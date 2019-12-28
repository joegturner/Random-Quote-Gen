/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// by joegturner - 12/28/2019

// 'quote` array 
var quote = [
  {
    quote: 'Hakuna matata', 
    source: 'Simon', 
    citation: 'Lion King',
    year: 1994,
    category: 'motivational',
    rating: 6.2
  },
  { 
    quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', 
    source: 'Helen Keller', 
    citation: '',
    year: null,
    category: 'inspirational',
    rating: 6.5
  },
  { 
    quote: 'Do. Or do not. There is no try.',
    source: 'Yoda', 
    citation: 'Star Wars: The Empire Strikes Back',
    year: 1980,
    category: 'motivational',
    rating: 10
  },
  { 
    quote: 'Always.',
    source: 'Severus Snape', 
    citation: 'Harry Potter: The Deathly Hollows',
    year: 2007,
    category: 'epic',
    rating: 8.1
  },
  { 
    quote: 'Falling down is how we grow. Staying down is how we die.',
    source: 'Maximus', 
    citation: 'Gladiator',
    year: 2000,
    category: 'motivational',
    rating: 9.4
  },
  { 
    quote: 'Yeah, well - the Dude abides.',
    source: 'The Dude', 
    citation: 'The Big Lebowski',
    year: 1998,
    category: 'humor',
    rating: 9.1
  }
];
var lastRandom = 0; //previous randomly generated number
var delay = 20000; //quote refresh delay
var interval; //setInterval() timer

// 'print' function
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

/* 'getRandomQuote` function
** Generates a random number
** Returns an Object from the 'quote' array
** New 'random' is compared against 'lastRandom' in order to avoid quote repeats
*/
function getRandomQuote(){
  var random = Math.floor(Math.random()*quote.length);
  var quoteObj = {};
  do{
    random = Math.floor(Math.random()*quote.length);
   } while (random === lastRandom)
  quoteObj = quote[random];
  lastRandom = random;
  return quoteObj;
};

/* 'printQuote` function
** Concatenates random quote and prints by calling 'print' function
*/
function printQuote(){
  var message='';
  var quoteObj = getRandomQuote();

  // builds HTML for 'quote', 'source', 'citation', and 'year'
  message += '<p class="quote">' + quoteObj.quote + '</p>';
  message += '<p class="source">' + quoteObj.source;
  if(quoteObj.citation){
    message += '<span class="citation">' + quoteObj.citation + '</span>';
  }
  if(quoteObj.year){
    message += '<span class="year">' + quoteObj.year + '</span>';
  }
  message += '</p>';

  // builds HTML for 'category' and 'rating' properties
  if(quoteObj.category || quoteObj.rating){
    message += '<p class="source">';
    if(quoteObj.category){
      message += 'Category: "' + quoteObj.category + '"';
    }
    if(quoteObj.rating){
      message += ' / User Rating: ' + quoteObj.rating;
    }
    message += '</p>';
  }

  setBackgroundColor(randomColor()); //change background color
  autoRefreshQuote(); //start page refresh timer
  print(message); //print random quote
};

/* 'setBackgroundColor' function
** Changes background color based on hexadecimal
*/
function setBackgroundColor(hexColor){
  document.body.style.backgroundColor = '#' + hexColor;
}

/* 'randomColor' function
** Random hexadecimal is padded with 0's
** Returns a random hexadecimal from #000000 to #FFFFFF
*/
function randomColor(){
  var hexColor = '';
  //Found the below code for generating a random color in hex. Posted by Nicolas Buduroi on https://stackoverflow.com/questions/1484506/random-color-generator
  hexColor = (Math.random().toString(16) + '000000').substring(2, 8);
  return hexColor;
}

/* 'autoRefreshQuote' function
**Reloads a new random quote based on 'delay' variable.
*/
function autoRefreshQuote(){
  clearInterval(interval);
  interval = window.setInterval(printQuote, delay);
}

//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);