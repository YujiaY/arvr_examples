import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

function Card({ url, children }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 h-20 rounded-lg overflow-hidden shadow-xl divide-x">
      <p className="text-left text-sm font-extralight pr-2 overflow-auto">
        {children}
      </p>
      <div className="flex items-center w-16">
        <Link to={url} className="w-full flex justify-center">
          <ArrowRightCircleIcon className="h-8 w-8 text-blue-500" />
        </Link>
      </div>
    </div>
  );
}

export default Card;
