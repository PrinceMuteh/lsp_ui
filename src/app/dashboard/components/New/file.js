"use client";

import PlusIcon from "/public/svg/Plus.svg";
import MicIcon from "/public/svg/Mic.svg";

import { useState } from "react";
import Button from "../../components/Button";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"; // Example

export default function NewFile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center bg-white">
        <div className="text-xl font-bold">Family</div>
        <div className="flex items-center justify-center">
          <Button icon={<MicIcon />} text="Create Recording" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="min-h-screen mt-40 bg-white flex flex-col items-center">
          <h2 className="font-bold text-2xl">File is empty</h2>
          <p className="text-xl text-gray-600 mt-5 text-center">
            It looks like there are no case numbers here at the moment. Add
            <br />
            new cases to the folder.
          </p>

          <div className="flex items-center mt-5 justify-center">
            <Button
              icon={<PlusIcon />}
              onClick={openModal}
              text="Create a new file"
            />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <h2 className="text-xl font-medium text-black mb-6">
                  Create a case file
                </h2>
                <form className="space-y-8">
                  <div>
                    <label
                      htmlFor="casename"
                      className="block text-sm font-medium text-black"
                    >
                      Case Name
                    </label>
                    <input
                      type="text"
                      name="casename"
                      id="casename"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter a case name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="caseType"
                      className="block text-sm font-medium text-black"
                    >
                      Case Type
                    </label>
                    <select id="caseType" className="border rounded p-3 w-full">
                      <option value="" disabled>
                        Select case type
                      </option>
                      <option value="supreme">Supreme Court</option>
                      <option value="appeal">Court of Appeal</option>
                      <option value="highcourt">Federal Highcourt</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-black"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter the location"
                    />
                  </div>
                </form>
              </div>

              <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex w-full justify-center rounded-md bg-secondaryBg px-8 py-3 text-sm font-semibold text-white sm:ml-3 sm:w-auto"
                >
                  Done
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={closeModal}
                  className="mt-3 inline-flex w-full justify-center border-2 border-secondaryBg px-8 py-3 rounded-md bg-white text-sm font-semibold text-secondaryBg shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
