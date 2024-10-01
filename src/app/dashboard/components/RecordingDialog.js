"use client";

import { Dialog } from "@headlessui/react";
import MicOffIcon from "/public/svg/MicOff.svg";
import MicDark from "/public/svg/MicDark.svg";
import FrameIcon from "/public/svg/Frame.svg";
import Button from "../components/Button";

const ModalDialog = ({ isModalOpen, closeModal }) => {
  return (
    <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h2 className="text-lg font-semibold text-black mb-6">
                New Recording
              </h2>

              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="rtsp"
                    className="block text-sm font-medium text-black"
                  >
                    RTSP
                  </label>
                  <input
                    type="text"
                    name="rtsp"
                    id="rtsp"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter RTSP URL"
                  />
                </div>

                {/* Microphone Off */}
                <div className="">
                  <span className="mb-4 text-t-14">Judge</span>
                  <div className="flex items-center justify-start p-4 bg-blue-50 rounded-md">
                    <MicOffIcon />
                    <h3 className="ml-4 text-t-14">
                      Default - internal Microphone
                    </h3>
                  </div>
                </div>
                {/* Microphone On */}
                <div className="">
                  <span className="mb-4 text-t-14">Defense Lawyer</span>
                  <div className="flex items-center justify-start p-4 bg-blue-50 rounded-md">
                    <MicOffIcon className="text-black" />
                    <h3 className="ml-4 text-t-14">
                      Default - internal Microphone
                    </h3>
                  </div>
                </div>
                <div className="">
                  <span className="mb-4 text-t-14">Prosecutor Lawyer</span>
                  <div className="flex items-center justify-start p-4 bg-blue-50 rounded-md">
                    <MicOffIcon className="text-black" />
                    <h3 className="ml-4 text-t-14">
                      Default - internal Microphone
                    </h3>
                  </div>
                </div>
                <div className="">
                  <span className="mb-4 text-t-14">Eye withness</span>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-md">
                    <div className="flex item-center justify-center">
                      <MicDark className="text-black" />
                      <h3 className="ml-4 text-t-14">
                        Default - internal Microphone
                      </h3>
                    </div>
                    <FrameIcon className="text-black flex  items-end justify-end justify-items-end" />
                  </div>
                </div>
                <Button
                  text="Start recording"
                  className="w-full flex justify-center items-center bg-secondaryBg  text-white font-normal py-3 px-4 rounded-lg"
                />
              </form>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalDialog;
