import Country from "./Country";
import Ul from "../ui/Ul";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 text-stone-600 bg-stone-300 w-full flex flex-col divide-y-2 divide-stone-500 ">
      <div className="px-8 py-4">
        <Country />
      </div>
      <div className="flex justify-between flex-col sm:flex-row px-8 py-4 gap-4">
        <Ul>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How Search Works</li>
        </Ul>
        <Ul>
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Settings</li>
        </Ul>
      </div>
    </footer>
  );
}
