import React from "react";
import { Link, redirect } from "react-router-dom";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";

function BackButton({ url }) {
  return (
    <>
      <Link
        className={`absolute top-8 left-8 w-12 h-12
          flex items-center justify-center  z-10 bg-purple-900 rounded-full`}
        to={url}
      >
        <ArrowSmallLeftIcon className="h-6 w-6 text-white" />
      </Link>
    </>
  );
}

export default BackButton;
