var btnSound1 = document.querySelector(".playBtn1");
let btnSound2 = document.querySelector(".playBtn2");
let btnSound3 = document.querySelector(".playBtn3");
let btnSound4 = document.querySelector(".playBtn4");
let btnSound5 = document.querySelector(".playBtn5");

var sound1 = document.getElementById("beat1");
var sound2 = document.getElementById("beat2");
var sound3 = document.getElementById("beat3");
var sound4 = document.getElementById("beat4");
var sound5 = document.getElementById("beat5");

var count = 0;

btnSound1.addEventListener("click", () => {
    play(sound1, btnSound1);
});

btnSound2.addEventListener("click", () => {
    play(sound2, btnSound2);
})

btnSound3.addEventListener("click", () => {
    play(sound3, btnSound3);
})

btnSound4.addEventListener("click", () => {
    play(sound4, btnSound4);
})

btnSound5.addEventListener("click", () => {
    play(sound5, btnSound5);
})

function play(sound, btn) {
    if(count == 0) {
        count = 1;
        sound.play();
        btn.style.backgroundColor = "whitesmoke";
    } else {
	if (sound.paused == false) {
		sound.pause();
    btn.style.backgroundColor = "white";
		count = 0;
	} else {
		sound1.pause();
		sound2.pause();
		sound3.pause();
		sound4.pause();
		sound5.pause();
    btnSound1.style.backgroundColor = "white";
    btnSound2.style.backgroundColor = "white";
    btnSound3.style.backgroundColor = "white";
    btnSound4.style.backgroundColor = "white";
    btnSound5.style.backgroundColor = "white";
		sound.play();
    btn.style.backgroundColor = "whitesmoke";
	 }
  }
}
