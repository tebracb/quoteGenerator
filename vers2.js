const fragmentBeginning =
  ["\"Physically experience",
    "\"Observe",
    "\"Turn dogs into",
    "\"Exploring",
    "\"Global warming transformed into",
    "\"Combat aging with",
    "\"Developing"];

const fragmentMiddle =
  ["3D printing",
    "real-time art",
    "transhumanism",
    "the online world",
    "cryptocurrency",
    "dolphins",
    "facial recognition",
    "deep learning"];

const fragmentEnd =
  ["by post-digital methods\"",
    "by speculations\"",
    "through the Sylicon Valley\"",
    "by quantum computing\"",
    "with self-driving cars\"",
    "against political AI\"",
    "with colonising Mars\"",
    "out of blockchain\""];

const dfragmentBeginning =
  ["\"Collapsing civilisations by",
    "\"The rise of robots through",
    "\"Losing the last tree against",
    "\"Eternal ice-age thanks to",
    "\"Worldwide epidemic neglected by",
    "\"The dinosaurs are back with",
    "\"Alien invasion for"
  ];

const dfragmentMiddle =
  ["demonic alien spirits",
    "genetic modifications",
    "super intelligence",
    "a gigantic black hole",
    "privacy issues",
    "augmented reality",
    "anarchy",
    "cyberpunk"
  ];

const dfragmentEnd =
  ["against all odds\"",
    "and conversations\"",
    ", oh no!\"",
    "with nanorobots\"",
    "on Jupiter\"",
    "until 2800\"",
    "in a solar storm\""
  ];




//get access to DOM elements
const h2 = document.querySelector("h2");
const utopButton = document.querySelector("#utopButton");
const distopButton = document.querySelector("#distopButton");
const Img = document.getElementById("Img");
const audioButton = document.querySelector("#audio");
const audioIcon = document.querySelector("#audioIcon");
const h1 = document.querySelector("h1");
const multQuoteButton = document.querySelector(".multipleQuotes");
const formDiv = document.querySelector(".form");
const downIcon = document.querySelector(".fa-angle-down");
const quoteNum = document.getElementsByName("quoteNum");



let i = 0;
const SPEED = 65; /* number of milliseconds between each character*/


function typeWriter(a, speed) {
  if (i < a.length) {

    utopButton.disabled = true;
    distopButton.disabled = true;

    h2.innerHTML += a.charAt(i);

    if (a.charAt(i) == "\n") {
      h2.innerHTML += "<br>";
    }

    i++;

    setTimeout(function () {

      typeWriter(a, speed)
    }, speed);


  } else {

    i = 0;
    utopButton.disabled = false;
    distopButton.disabled = false;

  }
}


// Audio

const sound = new Audio();
let muted = true;

function playSound() {
  sound.src = "audio/EpicOrchestralTrailer_AShamaluevMusic.mp3"
  sound.play()
}


audioButton.addEventListener("click", function () {
  if (muted == true) {
    playSound();
    muted = false;
    audioIcon.src = "images/001-speaker.png";
  } else {
    sound.pause();
    muted = true;
    audioIcon.src = "images/002-mute.png";
  }
});



//Multiple Quote div basic setup
formDiv.style.display = "none";
multQuoteButton.classList.add("text-secondary");


// make Multiple Quote options appear and disappear by clicking on multQuoteButton
function toggle() {
  if (formDiv.style.display == "none") {
    formDiv.style.display = "block";
    multQuoteButton.classList.remove("text-secondary");
    downIcon.classList.add("fa-rotate-180");

  } else {
    formDiv.style.display = "none";
    multQuoteButton.classList.add("text-secondary");
    downIcon.classList.remove("fa-rotate-180");
  }
}

//clear radio buttons 
function uncheckRadioButtons() {

  for (let i = 0; i < quoteNum.length; i++) {
    quoteNum[i].checked = false;
  }
}


//creating new random number

function createRandomNumber(a) {

  /*
pick a number between 0 and 1 with math.random
multiply it with length of the array
make it a whole number with Math.floor
*/

  return (Math.floor(Math.random() * a.length));
}


//creating new random quote

function createUQuote(a, b, c) {
  return fragmentBeginning[a] + " " + fragmentMiddle[b] + " " + fragmentEnd[c];
}

function createDQuote(a, b, c) {
  return dfragmentBeginning[a] + " " + dfragmentMiddle[b] + " " + dfragmentEnd[c];
}


function getChosenNum() {
  for (let i = 0; i < quoteNum.length; i++) {
    if (quoteNum[i].checked === true) {
      return Number(quoteNum[i].value);
    }
  }
  return 1;
}


//Creating Utopian Quotes

utopButton.addEventListener("click", function () {


  h1.classList.remove("h1_distop");
  h1.classList.add("h1_utop");
  Img.src = "images/utop.png";
  h2.textContent = "";

  let chosenNum = getChosenNum();

  let quotes = "";

  for (let i = 0; i < chosenNum; i++) {
    quotes += createUQuote(createRandomNumber(fragmentBeginning), createRandomNumber(fragmentMiddle),
      createRandomNumber(fragmentEnd));
    quotes += "\n";
  }
  typeWriter(quotes, SPEED / chosenNum);
  uncheckRadioButtons();


})

//Creating Distopian Quotes

distopButton.addEventListener("click", function () {

  h1.classList.remove("h1_utop");
  h1.classList.add("h1_distop");
  Img.src = "images/distop.png";
  h2.textContent = "";

  let chosenNum = getChosenNum();

  let quotes = "";

  for (let i = 0; i < chosenNum; i++) {
    quotes += createDQuote(createRandomNumber(dfragmentBeginning), createRandomNumber(dfragmentMiddle),
      createRandomNumber(dfragmentEnd));
    quotes += "\n";
  }
  typeWriter(quotes, SPEED / chosenNum);
  uncheckRadioButtons();

})


multQuoteButton.addEventListener("click", function () {
  toggle();
})
