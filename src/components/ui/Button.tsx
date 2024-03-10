"use client";
import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
  disabled?: boolean;
};
export default function Button({
  children,
  onClick,
  type,
  disabled = false,
}: ButtonType) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick && onClick}
      className="bg-stone-200 rounded text-sm hover:ring hover:shadow-lg w-36 h-10 duration-200 hover:ring-stone-300 focus:ring-stone-300 focus:outline-none"
    >
      {children}
    </button>
  );
}
