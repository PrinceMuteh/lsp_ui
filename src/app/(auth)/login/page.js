"use client";
import Image from "next/image";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PoweredBy from "../../../components/poweredBy";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen  bg-primaryBg flex flex-col items-center">
      <PoweredBy />
      <div className="bg-white p-8 mt-10  rounded-3xl shadow-lg w-full max-w-lg">
        <h2 className="text-t-24 font-semibold text-black mb-6">
          Welcome Back
        </h2>
        <form className="space-y-8">
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
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black test-t-14"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="h-5 w-5 text-black" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-black" />
                )}
              </button>
            </div>
          </div>

          <div>
            <Link href="dashboard" className="">
              <button
                // type="submit"
                className="w-full py-3 px-4 bg-secondaryBg text-white text-sm rounded-md shadow-sm  focus:outline-none focus:ring-2 "
              >
                Login
              </button>
            </Link>
          </div>
        </form>

        <div className="mt-3">
          <a href="dashboard" className="">
            <button
              // type="submit"
              className="w-full py-3 px-4  border-2 border-secondaryBg text-secondaryBg text-sm rounded-md shadow-sm  focus:outline-none focus:ring-2 "
            >
              Go to Dashboard
            </button>
          </a>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Dont remember yout password?{" "}
          <Link
            href="forgot-password"
            className="text-secondaryBg hover:underline"
          >
            Request new one
          </Link>
        </p>
      </div>
    </div>
  );
}
