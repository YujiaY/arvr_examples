import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>AR/VR Examples</h1>
        <div>
          <Link to={"room"}>
            <button>
              Example with full immersive room in VR with interactions.
            </button>
          </Link>
          <Link to={"room-ios"}>
            <button>
              Example with full immersive room in VR with interactions with mp4
              video.
            </button>
          </Link>
          <Link to={"room-gyroscope"}>
            <button>
              Example with full immersive room in VR with interactions tracking
              mobile movements.
            </button>
          </Link>
          <div>
            <Link to={"image-tracking"}>
              <button>
                Example with image tracking and interaction in AR environment.
              </button>
            </Link>
          </div>
          <div>
            <Link to={"vr-video"}>
              <button>Example with 360 VR video.</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div id="detail">
        <Outlet />
      </div> */}
    </>
  );
}
