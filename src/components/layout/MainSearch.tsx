"use client";

import { HiOutlineSearch, HiMicrophone } from "react-icons/hi";
import Button from "../ui/Button";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function MainSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!searchTerm.trim().length) return;

    router.push(`/search/web?searchTerm=${searchTerm}`);
  }

  async function handleRandomSearch() {
    setLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const words = await res.json();
    setLoading(false);
    if (!res.ok) return;
    router.push(`/search/web?searchTerm=${words[0]}`);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <div className="mt-5 w-full max-w-[80%] sm:max-w-xl lg:max-w-2xl mx-auto flex border items-center px-5 py-3 rounded-full hover:shadow focus-within:shadow-md ">
          <HiOutlineSearch className="text-2xl text-stone-500" />
          <input
            type="text"
            className="focus:outline-none w-full mx-2"
            placeholder="Search in Google..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <HiMicrophone className="text-2xl text-stone-500" />
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <Button type="submit">Google Search</Button>
          <Button disabled={loading} type="button" onClick={handleRandomSearch}>
            {loading ? "Searching..." : "I am Feeling Lucky"}
          </Button>
        </div>
      </form>
    </>
  );
}
