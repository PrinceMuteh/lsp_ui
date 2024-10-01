"use client";
import Link from "next/link";
import PoweredBy from "../../../components/poweredBy";
import EmailIcon from "/public/svg/Email.svg";

export default function EmailConfirmation() {
  return (
    <div className="min-h-screen  bg-primaryBg flex flex-col items-center ">
      <PoweredBy />
      <div className="bg-white p-8 mt-10  rounded-3xl shadow-lg  max-w-lg">
        <div className="flex items-center justify-center">
          <EmailIcon />
        </div>
        <h3 className="text-2xl font-semibold items-center flex flex-col text-black mt-6 test-t-20">
          New password request
        </h3>
        <h4 className="text-black text-md mb-10 mt-2 px-20 items-center justify-center flex flex-col text-center">
          You will receive an email shortly with your new password
        </h4>
        <div>
          <button className="w-full test-t-14 py-3 px-4 text-sm bg-secondaryBg text-white  rounded-md shadow-sm  focus:outline-none ">
            <Link href="">Request New password</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
