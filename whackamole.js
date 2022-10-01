let timer;
let score;
let timerDisplay = document.getElementById("timer");
let scoreDisplay = document.getElementById("score");
let startButton = document.getElementById("start");
let gameActive = false;
let molePopTime;
let radios = document.querySelectorAll("input");



function startGame(){
  
  gameActive = true;
  startButton.disabled = true;
  timer = 30;
  score = 0;
  timerDisplay.innerText = `Time left: ${timer}`;
  scoreDisplay.innerText = `Your score: ${score}`;
  if(radios[0].checked === true) {
    molePopTime = 1000;
  } else if (radios[1].checked === true) {
    molePopTime = 750;
  } else { 
    molePopTime = 500;
  }
let countdown = setInterval (() =>{
  timer--;
  timerDisplay.innerText = `Time left: ${timer}`;
  console.log(timer);
}, 1000);
setTimeout (() =>{
  clearInterval(countdown)
  endGame();
}, timer * 1000);

highlightMole();


}


function highlightMole() {
  let moleDivs = document.querySelectorAll(".mole");
  let randomMole = moleDivs[Math.floor(Math.random() * moleDivs.length)];
  randomMole.style.backgroundColor = "red";
  setTimeout(() => {
      randomMole.innerText = "";
      randomMole.style.backgroundColor = "black";
        if (gameActive === true){
          setTimeout(highlightMole, 1000)
          
          
      };
    }, molePopTime);

    randomMole.addEventListener("click", () => {
      if (randomMole.style.backgroundColor === "red"){
        score++;
        scoreDisplay.innerText = `Your Score: ${score}`;
        randomMole.style.background = "black";
        randomMole.innerText = "WHACK!";
      }
    })
}


document.getElementById("start").addEventListener("click", startGame);


function endGame(){
  gameActive = false;
  startButton.disabled = false;
  startButton.innerText = "Play Again";
  scoreDisplay.innerText = `Final Score: ${score}`;
  timerDisplay.innerText = "Time's UP";


}










