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
    play(sound1);
});

btnSound2.addEventListener("click", () => {
    play(sound2);
})

btnSound3.addEventListener("click", () => {
    play(sound3);
})

btnSound4.addEventListener("click", () => {
    play(sound4);
})

btnSound5.addEventListener("click", () => {
    play(sound5);
})

function play(sound) {
    if(count == 0) {
        count = 1;
        sound.play();
    } else {
        count = 0;
        sound.pause();
    }
}
