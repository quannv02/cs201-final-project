let playBtn = document.querySelector(".play-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");
let timeAppear = document.querySelector(".time-appear");
let audio = new Audio('backgrounds/bell-ring.mp3');

let isPause = false;
let myInterval;
let time = 0;
pauseBtn.disabled = true;

playBtn.addEventListener("click",startCount);
pauseBtn.addEventListener("click",pauseCount);
resetBtn.addEventListener("click",resetTimer);

function startCount() {
  if(isPause == true) {
    myInterval = setInterval(updateCountdown, 1000);
    playBtn.disabled = true;
    pauseBtn.disabled = false;
  } else {
    let minInput = document.querySelector(".min-input").valueAsNumber;
    let secInput = document.querySelector(".sec-input").valueAsNumber;

    if(document.querySelector(".min-input").value === ''){
      minInput = 0;
    }

    if(document.querySelector(".sec-input").value === ''){
      secInput = 0;
    }

    if(Number.isInteger(minInput) == false|| Number.isInteger(secInput) == false|| minInput < 0 || minInput > 300 ||secInput<0 || secInput>300 ){
      alert("Invalid value!");
      return false;
    }

    time = minInput*60 + secInput;
    myInterval = setInterval(updateCountdown, 1000);

    playBtn.disabled = true;
    pauseBtn.disabled = false;
    playBtn.innerText = "Resume";
  }
}

function updateCountdown() {
  timeAppear.style.display="block";

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let timer = document.getElementById("appear-here");
  timer.innerHTML = `${minutes}:${seconds}`;

  time--;

  if (time < -1) {
    clearInterval(myInterval);
    audio.play();
    alert("Time's Up!");
    timeAppear.style.display = "none";
    playBtn.disabled = false;
    playBtn.innerText = "Start";
    pauseBtn.disabled = true;
  }
}

function pauseCount() {
  clearInterval(myInterval);
  playBtn.disabled = false;
  pauseBtn.disabled = true;
  isPause = true;
}

function resetTimer() {
  timeAppear.style.display = "none";
  clearInterval(myInterval);
  isPause = false;

  playBtn.disabled = false;
  playBtn.innerText = "Start";
  pauseBtn.disabled = true;
  document.querySelector(".min-input").value = null;
  document.querySelector(".sec-input").value = null;
}
