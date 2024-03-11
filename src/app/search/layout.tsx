import SearchHeader from "@/components/search/SearchHeader";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
