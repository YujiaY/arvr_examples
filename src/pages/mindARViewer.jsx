import React, { useEffect, useRef } from "react";
import cameraIcon from "../assets/icons/camera.png";

export default () => {
  //   const sceneRef = useRef(null);

  //   useEffect(() => {
  //     const sceneEl = sceneRef.current;
  //     const arSystem = sceneEl.systems["mindar-image-system"];
  //     sceneEl.addEventListener("renderstart", () => {
  //       arSystem.start(); // start AR
  //     });

  //     const exampleTarget = document.querySelector("#test");
  //     exampleTarget.addEventListener("targetFound", (event) => {
  //       console.log("target found");
  //     });

  //     exampleTarget.addEventListener("targetLost", (event) => {
  //       console.log("target lost");
  //     });
  //     return () => {
  //       arSystem.stop();
  //     };
  //   }, []);

  return (
    <a-scene
      //ref={sceneRef}
      mindar-image="imageTargetSrc: src/assets/image-targets/monkey.mind; autoStart: true; uiLoading: no; uiError: no; uiScanning: yes;"
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img id="card" src={cameraIcon} />
        <a-asset-item
          id="avatarModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity id="test" mindar-image-target="targetIndex: 0">
        <a-plane
          src="#card"
          position="0 2 0"
          height="20"
          width="20"
          rotation="0 0 0"
        ></a-plane>
        {/* <a-plane
          color="blue"
          opacity="0.95"
          position="0 0 0"
          height="0.552"
          width="1"
          rotation="0 0 0"
        >
          <a-box
            height="0.1"
            width="0.1"
            depth="0.1"
            rotation="0 0 0"
            position="-0.3 0.3 0"
            material="color: blue; transparent: true; opacity: 0.50;"
          ></a-box>
        </a-plane> */}
      </a-entity>
    </a-scene>
  );
};
