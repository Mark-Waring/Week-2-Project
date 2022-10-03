
let startButton = document.getElementById("start");
let scoreDisplay = document.getElementById("score-text");
const simonButtons = document.getElementsByClassName("simonButton");



const greenButton = document.getElementById("green")
const redButton = document.getElementById("red")
const blueButton = document.getElementById("blue")
const yellowButton = document.getElementById("yellow")

function startGame(){
  startButton.disabled = true;
  score = 0;
  scoreDisplay.innerText = `Your score: ${score}`;
  
 computerLights ();
  
}

function endGame(){
  startButton.disabled = false;
  startButton.innerText = "Play Again";
  scoreDisplay.innerText = `Final Score: ${score}`;
}

let round = 1;
 


const buttonsArray = ["green", "red", "blue", "yellow"];
let rand = buttonsArray[Math.floor(Math.random() * 4)];
console.log(rand);

function computerLights (){
if (rand === "green") {
  greenButton.style.opacity = ".2";
} else if (rand === "red"){
  redButton.style.opacity = ".2";
} else if (rand === "blue"){
  blueButton.style.opacity = ".2";
} else{
    yellowButton.style.opacity = ".2";
  }
  setTimeout(() => {
    greenButton.style.opacity = "100%";
    redButton.style.opacity = "100%";
    blueButton.style.opacity = "100%";
    yellowButton.style.opacity = "100%";
  }, 1000);
}
matchingEvent();

function matchingEvent (){
  for (let i = 0; i < simonButtons.length; i++) {
    simonButtons[i].addEventListener("mousedown", function () {
    this.setAttribute("style", "opacity: .2");
    setTimeout(() => {
      this.setAttribute("style", "opacity: null");
    }, 80);
    let buttonClickedId = (this.id);
    if (buttonClickedId === rand) {
      score++;
      scoreDisplay.innerText = `Your Score: ${score}`;
      round++;
      computerLights ();
    } else {
      endGame();
    }
    });
    
    
  };
}



function startGame(){
  startButton.disabled = true;
  score = 0;
  scoreDisplay.innerText = `Your score: ${score}`;
  
 computerLights ();
  
}

document.getElementById("start").addEventListener("click", startGame);

