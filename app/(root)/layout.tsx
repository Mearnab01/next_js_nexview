import Image from "next/image";
import Link from "next/link";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href={"/"} className="flex items-center gap-6">
          <Image
            src="/logo.svg"
            width={42}
            height={40}
            alt="logo"
            className="rotate-90 scale-y-[-1] border-2 border-[#9a6efe] rounded-lg p-1"
          />
          <h3 className="text-light-100 flex items-end gap-2">
            Nexview AI
            <span className="w-3 h-3 rounded-full bg-[#9a6efe] animate-pulse inline-block" />
          </h3>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
