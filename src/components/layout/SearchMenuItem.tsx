"use client";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
};
export default function SearchMenuItem({
  children,
  onClick,
  isActive,
}: PropsType) {
  return (
    <li
      className={`border-b-[5px]  ${
        isActive
          ? "border-b-blue-500 text-blue-500 "
          : "border-b-transparent text-stone-600"
      }`}
    >
      <button onClick={onClick} className="flex gap-2 items-center text-lg">
        {children}
      </button>
    </li>
  );
}
