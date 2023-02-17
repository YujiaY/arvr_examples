AFRAME.registerComponent("play-audio-on-click", {
  init: function () {
    this.el.addEventListener("click", (evt) => {
      var entity = document.querySelector("[sound]");
      entity.components.sound.playSound();
    });
  },
});
