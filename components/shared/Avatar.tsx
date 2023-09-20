"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="aspect-square rounded-full object-cover"
      height={30}
      width={30}
      alt="Avatar"
      src="/placeholder.jpg"
    />
  );
};

export default Avatar;
