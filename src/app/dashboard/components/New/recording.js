"use client";

import MicIcon from "/public/svg/Mic.svg";
import { useState } from "react";
import Button from "../../components/Button";
import ModalDialog from "../../components/RecordingDialog";


export default function NewFolder() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center bg-white">
        <div className="text-xl font-bold">0 Court Case</div>
        <div className="flex items-center justify-center">
          <Button icon={<MicIcon />} text="New Recording" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="min-h-screen mt-40 bg-white flex flex-col items-center">
          <h2 className="font-semibold text-2xl">
            No Recording Availiable Yet
          </h2>
          <p className="text-lg text-gray-600 mt-5 text-center">
            Click new recording to get audio, video , or transacript of the
            session
          </p>

          <div className="flex items-center mt-5 justify-center">
            <Button
              icon={<MicIcon />}
              onClick={openModal}
              text="New Recording"
            />
          </div>
        </div>
      </div>

      <ModalDialog isModalOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
