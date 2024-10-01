"use client";

import { Dialog } from "@headlessui/react";
import Link from "next/link"; // Import Link from Next.js

const FolderDialog = ({ isModalOpen, closeModal }) => {
  return (
    <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h2 className="text-lg font-semibold text-black mb-6">
                Create folder
              </h2>
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="casename"
                    className="block text-sm font-medium text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="casename"
                    id="casename"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter folder name"
                  />
                </div>
              </form>
            </div>

            <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={closeModal}
                className="mt-3 inline-flex w-full justify-center border-2 border-secondaryBg px-8 py-3 rounded-md bg-white text-sm font-semibold text-secondaryBg shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default FolderDialog;
