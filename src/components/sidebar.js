"user client";
import DraftsIcon from "/public/svg/Drafts.svg";
import ClockIcon from "/public/svg/Clock.svg";
import SettingsIcon from "/public/svg/Settings.svg";
import PlusIcon from "/public/svg/PlusGreen.svg";

export default function sidebar() {
  return (
    <aside className="bg-white w-64 h-full fixed top-0 left-0 shadow-lg text-black">
      <ul className="mt-8 space-y-4 text-black">
        <li className="mx-4 rounded-lg bg-slate-100 hover:bg-blue-200">
          <a
            href="#"
            className="flex items-center p-10 text-md space-x-2 px-4 py-2 text-black "
          >
            <ClockIcon className="h-5 w-6 text-black mr-3" />
            Recents
          </a>
        </li>
        <li className="mx-4 rounded-lg   hover:bg-blue-200">
          <a
            href="#"
            className="flex items-center p-10 text-md space-x-2 px-4 py-2 text-black"
          >
            <DraftsIcon className="h-5 w-5 text-black mr-3" />
            Drafts
          </a>
        </li>
        <li className="mx-4 rounded-lg   hover:bg-blue-200">
          <a
            href="#"
            className="flex items-center p-10 text-md space-x-2 px-4 py-2 text-black"
          >
            <SettingsIcon className="h-5 w-5 text-black mr-3" />
            Settings
          </a>
        </li>
        <li className="mx-4">
          <a
            href="#"
            className="flex items-center justify-between text-center px-4 py-4"
          >
            Folder
            <PlusIcon className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
