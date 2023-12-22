"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavbarAuth() {
  //mock session
  const [session, setSession] = useState(false);
  return (
    <div className="h-full w-[100%] flex flex-row items-center text-white font-md justify-end pr-8">
      <div className=" h-[100%] flex items-center justify-center">
        <Link
          href="/register"
          className="border border-white p-2 hover:bg-white hover:text-[#B22222] transition duration-300 rounded-md"
        >
          Create account
        </Link>
      </div>
      <div className="h-[100%] flex items-center justify-center pr-8 pl-5">
        {session ? (
          <Link href="/login"> Sign out </Link>
        ) : (
          <Link href="/login"> Sign in </Link>
        )}
      </div>
    </div>
  );
}
