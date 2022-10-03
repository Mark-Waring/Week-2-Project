
// const simonButtons = document.querySelectorAll("simonButton");
// function changeOpacity () {
//   simonButtons.style.opacity = "20%";
// }
let startButton = document.getElementById("start");
let scoreDisplay = document.getElementById("score-text");
const simonButtons = document.getElementsByClassName("simonButton");
// for (let i = 0; i < simonButtons.length; i++) {
//   simonButtons[i].addEventListener("mousedown", function () {
//   this.setAttribute("style", "opacity: .2");
//   console.log(this.id  + " button clicked.")
//   setTimeout(() => {
//     this.setAttribute("style", "opacity: null");
//   }, 80);
//   });
// };

// const selectedLight = function {[Math.floor(Math.random() * simonButtons.length)]};
// console.log(selectedLight);

// function computerChoice() {
//   let options = ["green", "red", "blue", "yellow"];
//   return options[Math.floor(Math.random() * options.length)];
// }

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
 


const buttonsArray = ["green", "red", "blue", "yellow"];
let rand = buttonsArray[Math.floor(Math.random() * 4)];

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

function endGame(){
  startButton.disabled = false;
  startButton.innerText = "Play Again";
  scoreDisplay.innerText = `Final Score: ${score}`;
}

// const greenButton = document.getElementById("green")
// computerSelection ();
// if(computerSelection = "blue"){
//   greenButton.style.opacity = ".2";
// }



// let idButton = document.getElementById
// if computerSelection === idButton

// const runComputerSelection = computerSelection();

// this.setAttribute("style", "opacity: .2");
//   setTimeout(() => {
//     this.setAttribute("style", "opacity: null");
//   }, 80);
//   });
          



// randomLight();
  
// function lightUpButton (){
    
//     let simonButtons = document.querySelectorAll(".simonButton");
//     randomStart.style.opacity = "white";
//     setTimeout(() => {
//         randomStart.style.opacity = null;
        
//       }, 1000);
// }
// function randomLight() {
//   let options = ["green", "red", "blue", "yellow"];
//   return options[Math.floor(Math.random() * options.length)];


// }


// not working to send to Mike
// for (let i = 0; i < simonButtons.length; i++) {
//   simonButtons[i].addEventListener("click", function () {
//     simonButtons.style.opacity = ".2";
//   });
// }
  
// const greenButton = document.getElementById("green");
// const redButton = document.getElementById("red");
// const blueButton = document.getElementById("blue");
// const yellowButton = document.getElementById("yellow");

// greenButton.addEventListener("mousedown", function(){
//   greenButton.style.opacity = ".2";
// setTimeout(() => {
//   greenButton.style.opacity = null;
  
// }, 80);
// });

// redButton.addEventListener("mousedown", function(){
//   redButton.style.opacity = ".2";
// setTimeout(() => {
//   redButton.style.opacity = null;
  
// }, 80);
// });

// blueButton.addEventListener("mousedown", function(){
//   blueButton.style.opacity = ".2";
// setTimeout(() => {
//   blueButton.style.opacity = null;
  
// }, 80);
// });

// yellowButton.addEventListener("mousedown", function(){
//   yellowButton.style.opacity = ".2";
// setTimeout(() => {
//   yellowButton.style.opacity = null;
  
// }, 80);
// });

// lightUpButton();
  
// function lightUpButton (){
    
//     let simonButtons = document.querySelectorAll(".simonButton");
//     randomStart.style.opacity = "white";
//     setTimeout(() => {
//         randomStart.style.opacity = null;
        
//       }, 1000);
// }


// function randomLight() {
//   let options = ["green", "red", "blue", "yellow"];
//   return options[Math.floor(Math.random() * options.length)];
// }

// function userPick(e) {
//   let lightUp = randomLight();

//   if (lightUp === "green") {
//       console.log("green");
      
//     } else if (lightUp = "red") {
//       console.log("red");
//     } else if (lightUp = "blue"){
//       console.log("blue");
//     } else {
//       console.log("yello");
//   }
// }

// userPick();




// simonButtons.forEach(simonButton => {
//   simonButton.addEventListener("click", function lightUpButton(event) { 
//     simonButton.setAttribute("style", "opacity: 20%");
//     console.log(testing);
//   });
// });

// document.querySelectorAll('.simonButton').forEach(item => {
//   item.addEventListener('click', event => {
//     changeOpacity;
//   })
// })

