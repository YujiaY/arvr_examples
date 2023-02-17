import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact from "./pages/contact";
import ImageTracking from "./pages/ImageTracking";
import Room from "./pages/Room";
import RoomGyroscope from "./pages/RoomGyroscope";
import RoomIOS from "./pages/RoomIOS";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: "room",
    element: <Room />,
  },
  {
    path: "room-ios",
    element: <RoomIOS />,
  },
  {
    path: "room-gyroscope",
    element: <RoomGyroscope />,
  },
  {
    path: "image-tracking",
    element: <ImageTracking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
