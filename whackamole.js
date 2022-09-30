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
    molePopTime = 2000;
  } else if (radios[1].checked === true) {
    molePopTime = 1000;
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
      randomMole.style.backgroundColor = "white";
        if (gameActive === true){
          setTimeout(highlightMole, 1000)
      };
    }, molePopTime);

    randomMole.addEventListener("click", () => {
      if (randomMole.style.backgroundColor === "red"){
        score++;
        scoreDisplay.innerText = `Your Score: ${score}`;
        randomMole.style.background = "white";
      }
    })
}


document.getElementById("start").addEventListener("click", startGame);


function endGame(){
  gameActive = false;
  startButton.disabled = false;
  scoreDisplay.innerText = `Final Score: ${score}`;
  timerDisplay.innerText = "Time's UP";


}












    // randomMole.style.backgroundColor = "red";
    // setTimeout(() => {
    //   randomDiv.style.backgroundColor = "white";
    //   setTimeout(highlightMole, 500);
    // }, 1000);

    // function highlightDiv() {
        //! Shuffle the array into a random order
        // let randomDiv = divs[Math.floor(Math.random() * divs.length)];
        // //! Going through the array one element at a time have the following happen:
        // //!   1. Have the active div change color (to a color of your choice) for 2 seconds.
        // randomDiv.style.backgroundColor = "red";
        // //!   2. Reset the color of the active div to it's starting color
        // setTimeout(() => {
        //   randomDiv.style.backgroundColor = "white";
        //   //!   3. After half a second, repeat these steps for the remaining divs.
        //   setTimeout(highlightDiv, 500);
        // }, 2000);