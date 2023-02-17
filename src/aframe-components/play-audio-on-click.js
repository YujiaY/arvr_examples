AFRAME.registerComponent("play-audio-on-click", {
  init: function () {
    let playing = false;
    let audio = document.querySelector("#music");
    this.el.addEventListener("click", () => {
      if (!playing) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      playing = !playing;
    });
  },
});
