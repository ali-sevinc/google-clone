"use client";

import MainButton from "@/components/ui/MainButton";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-12">
      <h2 className="text-2xl font-semibold">Something went wrong!</h2>
      <MainButton onClick={() => reset()}>Try again</MainButton>
    </div>
  );
}
