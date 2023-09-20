"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="flex cursor-pointer items-center gap-2"
      onClick={() => router.push("/")}
    >
      <Image
        alt="Logo"
        className="hidden md:block"
        height={70}
        width={70}
        src={"/logo.svg"}
      />
      <h1 className="font-poppins hidden text-lg font-bold text-cyan-900 lg:block">
        havenhopper.
      </h1>
    </div>
  );
};

export default Logo;
