"use client";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PoweredBy from "../../../components/poweredBy";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen  bg-primaryBg flex flex-col items-center ">
      <PoweredBy />
      <div className="bg-white p-8 mt-10  rounded-3xl shadow-lg w-full max-w-lg">
        <div className="flex items-center space-x-2">
          <Link href="/login" className="">
            <ChevronLeftIcon className="h-5 w-5 font-bold text-black" />
          </Link>
          <span className="text-lg text-black test-t-14">Back to login</span>
        </div>
        <h3 className="text-2xl font-bold text-black mt-6 test-t-20">
          New password
        </h3>
        <h4 className="text-black mb-10 mt-2 test-t-16">
          Enter your email to request new password from admin
        </h4>
        <form className="space-y-12">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black test-t-14"
            >
              Work email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
        </form>
        <div>
          <button
            // type="submit"
            className="w-full py-3 px-4 text-sm  mt-10 bg-secondaryBg text-white  rounded-md shadow-sm  focus:outline-none "
          >
            <Link href="email-sent">Request New password</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
