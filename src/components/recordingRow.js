"use client";

import MicDark from "../../public/svg/MicDark.svg"; // Adjust the import paths based on your project structure
import FrameIcon from "../../public/svg/Frame.svg";

export default function rexordingRow({ text }) {
  return (
    <div className="">
      <span className="mb-4 text-t-14">{text}</span>
      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-md">
        <div className="flex items-center justify-center">
          <MicDark className="text-black" />
          <h3 className="ml-4 text-t-14">Default - internal Microphone</h3>
        </div>
        <FrameIcon className="text-black flex items-end justify-end" />
      </div>
    </div>
  );
}
