import React, { useState, useEffect, useRef } from "react";
// import "mind-ar/dist/mindar-image.prod.js";
// import "aframe";
// import "mind-ar/dist/mindar-image-aframe.prod.js";
//import "aframe";
// import "mind-ar/dist/mindar-image-aframe.prod.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//assets
import cameraIcon from "../assets/icons/camera.png";
import micIcon from "../assets/icons/mic.png";
import questionIcon from "../assets/icons/question.png";
import textIcon from "../assets/icons/text.png";
import monkeyFramedImg from "../assets/monkey-framed.png";
import dancingVideo from "../assets/dancing-no-background.webm";
import roomAudio from "../assets/ice_fire.mp3";
import roomModel from "../assets/models/bedroom.glb";

//aframe components
import "../aframe-components/Room/play-audio-on-click";
import "../aframe-components/Room/play-video-on-click";
import DialogModal from "../components/Dialog";
import BackButton from "../components/BackButton";

import MindARViewer from "./mindARViewer";

function ImageTracking() {
  const loader = new GLTFLoader();
  const sceneRef = useRef(null);

  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];

    return () => {
      if (arSystem) {
        arSystem.stop();
      }
    };
  }, []);

  const [started, setStarted] = useState(false);

  return (
    <>
      <div className="mindar-video-container">
        <BackButton url={"/"}></BackButton>
        <a-scene
          ref={sceneRef}
          mindar-image="imageTargetSrc: /assets/image-targets/monkey.mind; filterMinCF:0.000001; filterBeta: 0.00001; autoStart: true; uiScanning: no;"
          color-space="sRGB"
          embedded
          renderer="colorManagement: true, physicallyCorrectLights"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-assets>
            <img id="icon-camera" src={cameraIcon} />
            <img id="icon-mic" src={micIcon} />
            <img id="icon-question" src={questionIcon} />
            <img id="icon-text" src={textIcon} />
            <img id="monkey" src={monkeyFramedImg} />
            <video id="dance" src={dancingVideo} loop></video>
            <audio id="music" src={roomAudio}></audio>
            <a-asset-item id="bedroom" src={roomModel}></a-asset-item>
          </a-assets>
          <a-entity id="rig" position="0 0 0">
            <a-camera
              id="camera"
              look-controls="enabled: true; magicWindowTrackingEnabled: false;"
              cursor="fuse: false; rayOrigin: mouse;"
              raycaster="far: 10000; objects: .clickable"
            ></a-camera>
          </a-entity>
          <a-entity
            id="image-tracker"
            display-box-on-target
            mindar-image-target="targetIndex: 0"
          >
            <a-video
              id="dance-video"
              src="#dance"
              class="clickable"
              visible="false"
              width="1.6"
              height="2.85"
              position="1.4 0 -2.7"
              rotation="0 0 0"
            ></a-video>
            <a-image
              play-video-on-click
              src="#icon-camera"
              class="clickable"
              position="-0.4 -0.5 0"
              scale="0.2 0.2 0.2"
            ></a-image>
            <a-image
              play-audio-on-click
              src="#icon-mic"
              class="clickable"
              position="-0.1 -0.5 0"
              scale="0.2 0.2 0.2"
            ></a-image>

            <a-image
              display-modal
              src="#icon-text"
              class="clickable"
              position="0.2 -0.5 0"
              scale="0.2 0.2 0.2"
              onClick={() => setDialogOpen(true)}
            ></a-image>
            <a-image
              display-iteration-one
              id="pinpoint-one"
              src="#icon-question"
              class="clickable"
              position="0 0 0"
              scale="0.2 0.2 0.2"
              animation="property: scale; to: 0.26 0.26 0.26; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
              onClick={() => setDialogOpen(true)}
            ></a-image>
            <a-text
              id="text"
              value="Monkey NFT"
              color="black"
              align="center"
              width="2"
              position="0 0.5 0"
              geometry="primitive:plane; height: 0.1; width: 0.8;"
              material="opacity: 0.5"
            ></a-text>
            <a-entity id="audio" sound="src: #music"></a-entity>
          </a-entity>
        </a-scene>
      </div>
      <DialogModal isOpen={dialogOpen} setDialogOpen={setDialogOpen}>
        <div className="flex flex-col space-y-4 mb-4">
          <h1 className="text-xl font-bold text-left mb-4">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-sm text-left font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm text-left font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </DialogModal>
    </>
  );
}

export default ImageTracking;
