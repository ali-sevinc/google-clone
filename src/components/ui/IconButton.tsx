import { ReactNode } from "react";

export default function IconButton({ children }: { children: ReactNode }) {
  return (
    <button className="p-2 rounded-full text-2xl text-stone-600 hover:bg-stone-200 ">
      {children}
    </button>
  );
}
