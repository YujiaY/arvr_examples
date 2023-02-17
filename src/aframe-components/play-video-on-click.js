AFRAME.registerComponent("play-video-on-click", {
  schema: {
    videoEntity: { type: "string" },
    videoElement: { type: "string" },
  },
  init: function () {
    this.el.addEventListener("click", (evt) => {
      var video = document.querySelector(this.data.videoEntity);
      var videoEl = document.querySelector(this.data.videoElement);

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
