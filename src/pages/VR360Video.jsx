import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

//assets
import vr360Video from "../assets/360vr-video.mp4";

//aframe components
import "../aframe-components/play-audio-on-click";
import "../aframe-components/play-video-on-click";
import "../aframe-components/touch-look-controls";

function VR360Video() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pinpointDialogOpen, setPinpointDialogOpen] = useState(false);

  useEffect(() => {
    const videoEl = document.querySelector("#vr360Video");
    if (!videoEl) {
      return;
    }

    videoEl.play();
  });

  return (
    <>
      <BackButton url={"/"}></BackButton>
      <a-scene
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
      >
        <a-assets>
          <video id="vr360Video" src={vr360Video} loop></video>
        </a-assets>

        <a-entity id="rig" position="0 0 0">
          <a-camera
            id="camera"
            look-controls="enabled: true; magicWindowTrackingEnabled: false;"
            cursor="fuse: false; rayOrigin: mouse;"
            raycaster="far: 10000; objects: .clickable"
          ></a-camera>
        </a-entity>
        <a-videosphere src="#vr360Video"></a-videosphere>
      </a-scene>
    </>
  );
}

export default VR360Video;
