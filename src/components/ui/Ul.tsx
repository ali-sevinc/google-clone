import { ReactNode } from "react";

export default function Ul({ children }: { children: ReactNode }) {
  return <ul className="flex gap-6 items-start">{children}</ul>;
}
