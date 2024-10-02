// Example in pages/liveFeed.js
"use client";
import RecordingRow from "../../components/recordingRow";
import { useState } from "react";

export default function LiveFeed() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className="mt-6">
      <div className="relative isolate">
        <div className="flex flex-col items-center justify-center">
          <div className="w-8/12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/images/liveFeed1.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="/images/liveFeed2.png"
              alt="Image 2"
              className="w-full h-auto"
            />
            <img
              src="/images/liveFeed3.png"
              alt="Image 3"
              className="w-full h-auto"
            />
            <img
              src="/images/liveFeed4.png"
              alt="Image 4"
              className="w-full h-auto"
            />
          </div>

          <div className="w-8/12 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full h-auto ">
              <RecordingRow />
            </div>
            <div className="w-full h-auto ">
              <RecordingRow />
            </div>
            <div className="w-full h-auto ">
              <RecordingRow />
            </div>
            <div className="w-full h-auto ">
              <RecordingRow />
            </div>
          </div>
        </div>

        <div
          onClick={toggleModal}
          className="cursor-pointer fixed bottom-4  left-4 w-60 h-20 bg-gray-900 p-4 rounded-2xl"
        >
          <div className="flex items-center justify-between text-white">
            <div className="bg-red-600 p-3 text-center rounded-xl">
              End recording
            </div>
            <div className="h-12 border-l border-gray-700"></div>
            <div>00:00:01</div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">
              Would you like to end this recording{" "}
            </h2>
            <p className="mt-4 w-90 ">
              Please ensure court preceeding has ended before going ahead with
              this action
            </p>
            <div className="mt-6 flex justify-end">
              <button
                className="inline-flex w-full justify-center border-2 border-secondaryBg px-8 py-3 rounded-md bg-white text-sm font-semibold text-secondaryBg shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button className=" ml-4 block w-auto px-8 py-3  bg-secondaryBg text-white   rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
