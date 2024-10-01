"use client";
import { useState } from "react";
import MicIcon from "/public/svg/Mic.svg";
import MicDark from "/public/svg/MicDark.svg";
import Folder from "/public/svg/Folder.svg";
import Squared from "/public/svg/Squared.svg";
import Button from "../components/Button";
import ModalDialog from "../components/RecordingDialog";
import FolderDialog from "../components/FolderDialog";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NewFile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openModal2 = () => setModalOpen2(true);
  const closeModal2 = () => setModalOpen2(false);

  return (
    <section className="mt-6">
      <div className="flex  justify-end items-end bg-white">
        <div className="flex items-center justify-center  space-x-4">
          <Button
            onClick={openModal2}
            className="px-4 flex py-3 border-2 border-secondaryBg text-secondaryBg text-sm rounded-md shadow-sm  focus:outline-none"
            icon={<MicDark />}
            text="New Folder"
          />
          <Button
            onClick={openModal}
            icon={<MicIcon />}
            text="Create  Recording"
          />
        </div>
      </div>
      <div className="flex justify-between mt-5 items-center bg-white">
        <div className="text-xl font-bold">1 Case Found</div>

        <div className="flex items-center justify-center  space-x-10">
          <div className="flex">
            <h4 className="mr-1">All Cases</h4>
            <ChevronDownIcon className="w-5 h-5 pt-1" />
          </div>

          <div className="flex">
            <h4 className="">Last Viewed</h4>
            <ChevronDownIcon className="w-5 h-5 pt-1" />
          </div>
          <Squared />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start mt-10">
        <Link href="/dashboard/files">
          <div className="justify-self-center">
            <Folder /> {/* Assuming this is an icon or component */}
            <h4 className="mt-1 text-t-14 text-center">Family</h4>{" "}
          </div>
        </Link>
      </div>

      <ModalDialog isModalOpen={isModalOpen} closeModal={closeModal} />
      <FolderDialog isModalOpen={isModalOpen2} closeModal={closeModal2} />
    </section>
  );
}
