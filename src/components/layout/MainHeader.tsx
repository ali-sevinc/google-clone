import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import IconButton from "../ui/IconButton";
import MainButton from "../ui/MainButton";

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
      <IconButton>
        <TbGridDots />
      </IconButton>
      <MainButton>Sign in</MainButton>
    </header>
  );
}
