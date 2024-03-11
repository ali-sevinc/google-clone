"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export default function Pagination() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const start = Number(searchParams.get("start")) || 1;

  return (
    <div className="flex items-center justify-center mt-12 gap-12 sm:gap-24 md:gap-40">
      {start >= 10 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${(
            start - 10
          ).toString()}`}
          className="flex items-center gap-1 text-blue-500 hover:-translate-x-1 duration-200"
        >
          <HiOutlineChevronLeft className="text-2xl" />
          <span className="text-xl">Previous</span>
        </Link>
      )}
      {start < 90 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${(
            start + 10
          ).toString()}`}
          className="flex items-center gap-1 text-blue-500 hover:translate-x-1 duration-200"
        >
          <span className="text-xl">Next</span>
          <HiOutlineChevronRight className="text-2xl" />
        </Link>
      )}
    </div>
  );
}
