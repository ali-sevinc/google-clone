import SearchHeader from "@/components/search/SearchHeader";
import { ReactNode, Suspense } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchHeader />
      <Suspense>{children}</Suspense>
    </div>
  );
}
