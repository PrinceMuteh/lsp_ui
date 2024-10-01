"user client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white">
      <div className="text-sm">Dashboard</div>
      <div class="space-x-4 relative w-full  max-w-sm">
        <div class="flex items-center border-2   border-gray-300 rounded-md hover:border-black hover:rounded-md   transition duration-300">
          <EyeIcon className="h-5 w-5 text-gray-300 m-2" />
          <input
            type="text"
            placeholder="Search"
            class="pl-3 w-full border-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </header>
  );
}
