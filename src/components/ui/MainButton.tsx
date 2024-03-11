import { ReactNode } from "react";

export default function MainButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick && onClick}
      className="bg-blue-500 text-base w-32 text-stone-50 px-6 py-2 rounded hover:shadow-lg hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
