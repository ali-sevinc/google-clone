"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { HiOutlineSearch, HiMicrophone } from "react-icons/hi";

export default function Search() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => {
    return searchParams.get("searchTerm") || "";
  });
  const router = useRouter();
  const pathName = usePathname();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!query.trim().length) return;
    router.push(`${pathName}?searchTerm=${query}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-full flex px-6 py-3 w-full max-w-3xl justify-between divide-x-2 md:divide-x-4 shadow-md hover:shadow-xl focus-within:shadow-xl  duration-200"
    >
      <input
        type="search"
        className="focus:outline-none w-full px-4"
        placeholder="Search in Google..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className=" pl-1 md:pl-4 flex gap-4 items-center text-blue-500">
        <button type="button" className="hidden md:inline-block">
          <HiMicrophone className="text-xl" />
        </button>
        <button>
          <HiOutlineSearch className="text-xl" />
        </button>
      </div>
    </form>
  );
}
