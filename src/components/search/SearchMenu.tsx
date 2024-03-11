"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiOutlineCamera, HiOutlineSearch } from "react-icons/hi";
import SearchMenuItem from "./SearchMenuItem";

export default function SearchMenu() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleRedirect(path: "web" | "image") {
    if (pathName.includes(path)) return;
    router.push(`/search/${path}?searchTerm=${searchParams.get("searchTerm")}`);
  }

  return (
    <menu className="flex gap-6 items-center justify-center lg:justify-start lg:pl-52 mt-4 border-b-2">
      <SearchMenuItem
        isActive={pathName === "/search/web"}
        onClick={() => handleRedirect("web")}
      >
        <HiOutlineSearch />
        all
      </SearchMenuItem>
      <SearchMenuItem
        isActive={pathName === "/search/image"}
        onClick={() => handleRedirect("image")}
      >
        <HiOutlineCamera />
        images
      </SearchMenuItem>
    </menu>
  );
}
