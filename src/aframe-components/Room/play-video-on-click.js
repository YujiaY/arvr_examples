AFRAME.registerComponent("play-video-on-click", {
  init: function () {
    this.el.addEventListener("click", (evt) => {
      var video = document.querySelector("#dance-video");
      var videoEl = document.querySelector("#dance");

      if (!videoEl) {
        return;
      }

      if (video.getAttribute("visible")) {
        videoEl.pause();
        video.setAttribute("visible", false);
        return;
      }

      videoEl.play();
      video.setAttribute("visible", true);
    });
  },
});
