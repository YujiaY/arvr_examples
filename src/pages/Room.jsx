import React, { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import DialogModal from "../components/Dialog";
import BackButton from "../components/BackButton";

//assets
import cameraIcon from "../assets/icons/camera.png";
import micIcon from "../assets/icons/mic.png";
import questionIcon from "../assets/icons/question.png";
import textIcon from "../assets/icons/text.png";
import monkeyFramedImg from "../assets/monkey-framed.png";
import monkeyCut from "../assets/monkey-cut.png";
import dancingVideo from "../assets/dancing-no-background.webm";
import roomAudio from "../assets/ice_fire.mp3";
import roomModel from "../assets/models/bedroom.glb";

//aframe components
import "../aframe-components/touch-look-controls";
import "../aframe-components/play-audio-on-click";
import "../aframe-components/play-video-on-click";

function Room() {
  const loader = new GLTFLoader();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [pinpointDialogOpen, setPinpointDialogOpen] = useState(false);

  // loading the room model in the scene
  loader.load(roomModel, (d) => {
    const roomEntity = document.getElementById("room");
    roomEntity.object3D.add(d.scene);
  });
  return (
    <>
      <BackButton url={"/"}></BackButton>
      <a-scene
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        gesture-detector
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
          id="room"
          gltf-model="#bedroom"
          position="0 2 -1.8"
          rotation="0 0 0"
        >
          <a-image
            src="#monkey"
            height="2.2"
            width="3.3"
            position="0 0.5 -2.8"
          ></a-image>
          <a-video
            id="dance-video"
            src="#dance"
            class="clickable"
            visible="false"
            width="1.6"
            height="2.85"
            position="1.6 0 -2.7"
            rotation="0 0 0"
          ></a-video>
          <a-image
            play-video-on-click="videoEntity: #dance-video; videoElement: #dance"
            src="#icon-camera"
            class="clickable"
            position="-1.6 1 -2.79"
            scale="0.4 0.4 0.4"
          ></a-image>
          <a-image
            play-audio-on-click
            src="#icon-mic"
            class="clickable"
            position="-1.6 0.4 -2.79"
            scale="0.4 0.4 0.4"
          ></a-image>

          <a-image
            display-modal
            src="#icon-text"
            class="clickable"
            position="-1.6 -0.2 -2.79"
            scale="0.4 0.4 0.4"
            onClick={() => setDialogOpen(true)}
          ></a-image>
          <a-image
            display-iteration-one
            id="pinpoint-one"
            src="#icon-question"
            class="clickable"
            position="0.2 0.92 -2.79"
            scale="0.2 0.2 0.2"
            animation="property: scale; to: 0.26 0.26 0.26; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
            onClick={() => setPinpointDialogOpen(true)}
          ></a-image>
          <a-text
            id="text"
            value="Monkey NFT"
            color="black"
            align="center"
            width="6"
            position="-0.2 1.28 -3.9"
            geometry="primitive:plane; height: 0.38; width: 4;"
            material="opacity: 0.5"
          ></a-text>
          <a-entity id="audio" sound="src: #music"></a-entity>
        </a-entity>
      </a-scene>
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
      <DialogModal
        isOpen={pinpointDialogOpen}
        setDialogOpen={setPinpointDialogOpen}
      >
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
          <div className="flex justify-center">
            <img src={monkeyCut} alt="Detailed view of monkey eyes" />
          </div>
        </div>
      </DialogModal>
    </>
  );
}

export default Room;
