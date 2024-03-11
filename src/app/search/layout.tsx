import SearchHeader from "@/components/layout/SearchHeader";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
