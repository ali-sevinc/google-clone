import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function MainHeader() {
  return (
    <header className="flex justify-end items-center text-sm gap-4 p-4">
      <Link
        href="https://mail.google.com/"
        className="hover:underline duration-200"
      >
        Gmail
      </Link>
      <Link
        href="https://images.google.com/"
        className="hover:underline duration-200"
      >
        Images
      </Link>
      <button className="p-2 rounded-full text-2xl text-stone-600 hover:bg-stone-200 ">
        <TbGridDots />
      </button>
      <button className="bg-blue-500 text-base text-stone-50 px-3 py-2 rounded hover:shadow-lg hover:bg-blue-600">
        Sign in
      </button>
    </header>
  );
}
