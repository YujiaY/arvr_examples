import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/solid";

function DialogModal({ children, isOpen, setDialogOpen }) {
  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`absolute left-[10%] right-[10%] -bottom-[2vh] max-h-[50vh] 
        flex flex-col p-6 z-10 bg-slate-100 rounded-md`}
        >
          <XCircleIcon
            className="h-8 w-8 mb-4 self-end text-blue-500"
            onClick={() => setDialogOpen(false)}
          />
          <div className="overflow-auto">{children}</div>
        </div>
      </Transition>
    </>
  );
}

export default DialogModal;
