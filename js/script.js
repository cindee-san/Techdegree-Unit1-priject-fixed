/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//quotes that are inspirational to me
const quotes = [
  { 
    quote: 'Remember, success is within you already.',
    source: 'Amirah Salaam',
    citation: 'Goodbye Card for Crosby',
    year: 2022,
    tag: 'Well Wishes'
  },
   
  { 
    quote: 'You are going to crush it.',
    source: 'Michael Burks',
    citation: 'Goodbye Card for Crosby',
    year: 2022,
    tag: 'Well Wishes'
  },
  { 
    quote: 'Change takes courage',
    source: 'Alexandria Ocasio-Cortez',
    citation: 'Campaign T-Shirt from AOC website',
    year: 2020,
    tag: 'Girl Power!'
  },
  {
    quote: 'You define your own life. Don\’t let other people write your script.',
    source: 'Oprah Winfrey',
    citation: 'Inspiration',
    year: 1990,
    tag: 'Girl Power!'
  },
  {
    quote: 'I am experienced enough to do this. I am knowledgeable enough to do this. I am prepared enough to do this. I am mature enough to do this. I am brave enough to do this.',
    source: 'Alexandria Ocasio-Cortez',
    citation: 'Knock Down the House',
    year: 2019,
    tag: 'Girl Power!'
    },
];


/***
 * `getRandomQuote` function
gets a random number and stores in the getRandomIndex variable 
uses the random number to get a random object from the quotes array
returns a random object from the quotes array
***/
function getRandomQuote () {

 var getRandomIndex = Math.floor(Math.random() * quotes.length);
   
 var getRandomObject = quotes[getRandomIndex]

  return getRandomObject;
}

getRandomQuote();
/***
 * `printQuote` function
stores the random object from the quotes array in variable getRandomQuoteObject
stores the quote and source properties of the random object in the "displayRandomQuoteString"
if the random object has a citation property, then add the citation to the "displayRandomQuoteString"
if the random object has a year property, then add the year to the "displayRandomQuoteString"
if the random object has a tag property, then add the tag to the "displayRandomQuoteString"
displays the "displayRansomQuoteString" to the page
***/

function printQuote () {
  let getRandomQuoteObject = getRandomQuote();
  
  let displayRandomQuoteString = `<p class = 'quote'> ${getRandomQuoteObject.quote}</p> <p class = 'source'> ${getRandomQuoteObject.source}`
  
  if (getRandomQuoteObject.citation){
      displayRandomQuoteString += (`<span class = 'citation' > ${getRandomQuoteObject.citation} </span>`);

  }

  if (getRandomQuoteObject.year) {
    displayRandomQuoteString += (`<span class = 'year' > ${getRandomQuoteObject.year} </span>`);

  }

  if (getRandomQuoteObject.tag) {
    displayRandomQuoteString += (`<span class = 'tag' > ${getRandomQuoteObject.tag} </span> </p>`);

  }
  
document.getElementById('quote-box').innerHTML = displayRandomQuoteString;
}
printQuote();

//function to randomly change the color of the background, adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function randomBackgroundColor(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var backgroundColor = 'rgb('+ x + ',' + y + ',' + z + ')';
 
  console.log(backgroundColor);

  document.body.style.background =backgroundColor;

  return backgroundColor;

}

randomBackgroundColor();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


