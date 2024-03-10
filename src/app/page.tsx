import MainHeader from "@/components/layout/MainHeader";
import MainSearch from "@/components/layout/MainSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col items-center justify-center flex-1 mt-32">
        <Image
          src="/logo.png"
          alt="google logo"
          width={300}
          height={100}
          style={{ width: "auto" }}
          priority
        />
        <MainSearch />
      </div>
    </>
  );
}
