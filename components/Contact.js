import React from "react";
import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div
      className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200
    cursor-pointer p-2 rounded-xl"
    >
      <Image
        className="rounded-full object-cover h-10 w-10"
        src={src}
        width={50}
        height={50}
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
    </div>
  );
}

export default Contact;
