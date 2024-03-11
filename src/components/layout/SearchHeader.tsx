import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import IconButton from "../ui/IconButton";
import { TbGridDots } from "react-icons/tb";
import { RiSettings3Line } from "react-icons/ri";
import MainButton from "../ui/MainButton";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 left-0 flex items-center gap-4 py-6 px-4 md:px-12 justify-between">
      <div className="flex w-full gap-4 md:gap-8 items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="google logo"
            width={100}
            height={50}
            style={{ width: "auto" }}
            priority
          />
        </Link>
        <Search />
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex gap-2">
          <IconButton>
            <RiSettings3Line />
          </IconButton>
          <IconButton>
            <TbGridDots />
          </IconButton>
        </div>
        <MainButton>Sign in</MainButton>
      </div>
    </header>
  );
}
