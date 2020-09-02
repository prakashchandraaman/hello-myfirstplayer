let m = "klp.mp3";
let song = new Audio();
let play = document.querySelector ("#btn");
let player = document.querySelector("#player");
let isplay = false;
window.onload = plays;

function plays() {
  song.src = m;
  console.log(song);
  play.addEventListener("click", function () {
    if (!isplay) {
      song.play();
      isplay = true;
      player.src = "pause.png";
    } else {
      song.pause();
      isplay = false;

      player.src = "play.png";
    }
  });
}
