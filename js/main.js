let btnBackground = document.querySelector('.my-background');
let btnTodoList = document.querySelector('.my-todoList');
let btnTimer = document.querySelector('.my-timer');
let dBackground = document.querySelector('.background-menu');
let dSound = document.querySelector('.sound-menu');
let dTodoList = document.querySelector('.todo-list');
let dTimer = document.querySelector('.timer');

btnBackground.addEventListener("click", () => {
  if (dBackground.style.display === "none") {
    dBackground.style.display="block";
    dSound.style.display="none";
    dTodoList.style.display="none";
    dTimer.style.display="none";
    btnBackground.style.backgroundColor = "lightgrey";
    btnMusic.style.backgroundColor = "white";
    btnTodoList.style.backgroundColor = "white";
    btnTimer.style.backgroundColor = "white";
  } else {
    dBackground.style.display="none";
    btnBackground.style.backgroundColor = "white";
  }
});

btnTodoList.addEventListener("click", () => {
  if (dTodoList.style.display === "none") {
    dBackground.style.display="none";
    dSound.style.display="none";
    dTodoList.style.display="block";
    dTimer.style.display="none";
    btnBackground.style.backgroundColor = "white";
    btnMusic.style.backgroundColor = "white";
    btnTodoList.style.backgroundColor = "lightgrey";
    btnTimer.style.backgroundColor = "white";
  } else {
    dTodoList.style.display="none";
    btnTodoList.style.backgroundColor = "white";
  }
});

btnTimer.addEventListener("click", () => {
  if (dTimer.style.display === "none") {
    dBackground.style.display="none";
    dSound.style.display="none";
    dTodoList.style.display="none";
    dTimer.style.display="block";
    btnBackground.style.backgroundColor = "white";
    btnMusic.style.backgroundColor = "white";
    btnTodoList.style.backgroundColor = "white";
    btnTimer.style.backgroundColor = "lightgrey";
  } else {
    dTimer.style.display="none";
    btnTimer.style.backgroundColor = "white";
  }
});
