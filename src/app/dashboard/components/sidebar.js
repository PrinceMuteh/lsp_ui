"user client";
import { MicrophoneIcon } from "@heroicons/react/24/outline";

export default function sidebar() {
  return (
    <aside className="bg-white w-64 h-full fixed top-0 left-0 shadow-lg text-black">
      <ul className="mt-8 space-y-4 text-black">
        <li className="mx-4 rounded-lg bg-slate-100 hover:bg-blue-200">
          <a
            href="#"
            className="flex items-center p-10 text-md space-x-2 px-4 py-2 text-black "
          >
            <MicrophoneIcon className="h-4 w-4 text-black mr-4" />
            Recents
          </a>
        </li>
        <li className="mx-4 rounded-lg   hover:bg-blue-200">
          <a
            href="#"
            className="flex items-center p-10 text-md space-x-2 px-4 py-2 text-black"
          >
            <MicrophoneIcon className="h-4 w-4 text-black mr-4" />
            Settings
          </a>
        </li>
        <li className="my-4">
          <a href="#" className="block px-4 py-2">
            Folder
          </a>
        </li>
      </ul>
    </aside>
  );
}
