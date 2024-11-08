"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex w-full h-20 items-center px-5 bg-gray-100">
      <div className="font-bold uppercase text-gray-800 flex-1 text-left">
        <Link href="/">Chill Apes</Link>
      </div>

      <div className="flex-1 flex gap-3 justify-center items-center">
        <Link
          href="/dashboard"
          className={pathname === "/dashboard" ? "text-lg font-bold" : ""}
        >
          Dashboard
        </Link>
        <Link
          href="/mint"
          className={pathname === "/mint" ? "text-lg font-bold" : ""}
        >
          Mint
        </Link>
        <Link
          href="/activity"
          className={pathname === "/activity" ? "text-lg font-bold" : ""}
        >
          Activity
        </Link>
      </div>

      <div className="flex-1 flex justify-end">Connect Wallet</div>
    </nav>
  );
}
