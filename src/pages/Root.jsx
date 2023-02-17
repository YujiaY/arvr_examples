import { Link, Outlet } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Card from "../components/Card";

export default function Root() {
  return (
    <>
      <div className="h-full p-6 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
        <h1 className="text-2xl font-extrabold">AR/VR Examples</h1>
        <div className="h-full py-12 flex flex-col space-y-12">
          <Card url={"room"}>
            Example of immersive 3D room with interactions and no background
            video. (only for android phones, .webm format is not supported in
            safari)
          </Card>

          <Card url={"room-ios"}>
            Example of immersive 3D room with interactions and mp4 flat video
            (Iphone).
          </Card>

          <Card url={"room-gyroscope"}>
            Example of immersive 3D room with interactions and using mobile
            gyroscope to track movements.
          </Card>

          <Card url={"image-tracking"}>
            Example of image tracking and displaying models on top of the
            target. (scan image of monkey NFT)
          </Card>

          <Card url={"vr-video"}>Example of 360 VR video.</Card>
        </div>
      </div>
    </>
  );
}
