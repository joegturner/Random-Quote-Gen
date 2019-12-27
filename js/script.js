/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//'quotes` array 
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
  }
];
var lastRandom = 0;
var delay = 5000;
var interval;

//'print' function
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

/*'getRandomQuote` function
**Generates a random number
**Returns a Object from the 'quote' array
*/
function getRandomQuote(){
  var random = Math.floor(Math.random()*quote.length);
  var quoteObj = {};
  console.log(random);
  do{
    random = Math.floor(Math.random()*quote.length);
   } while (random === lastRandom)
  quoteObj = quote[random];
  lastRandom = random;
  return quoteObj;
};

/*'printQuote` function
**Concatenates random quote and prints by calling 'print' function
*/
function printQuote(){
  var message='';
  var quoteObj = getRandomQuote();
  var hasCitation = false;
  var hasYear = false;

  if (quoteObj.citation){
    hasCitation = true;
  }
  if (quoteObj.year){
    hasYear = true;
  }

  message += '<p class="quote">' + quoteObj.quote + '</p>';
  message += '<p class="source">' + quoteObj.source;
  if(hasCitation === true){
    message += '<span class="citation">' + quoteObj.citation + '</span>';
  }
  if(hasYear === true){
    message += '<span class="year">' + quoteObj.year + '</span>';
  }
  message += '</p>';
  autoRefreshQuote();
  print(message);
};

/*'autoRefreshQuote' function
**Reloads a new random quote based on 'delay' variable.
*/
function autoRefreshQuote(){
  clearInterval(interval);
  interval = window.setInterval(printQuote, delay);
}

//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//autoRefreshQuote();