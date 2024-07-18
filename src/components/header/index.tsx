import React from "react";

import { Logo } from "@components";
import AvenueSelector from "./avenues";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between animate__animated animate__fadeInDown">
      <Logo />
      <div className="justify-start hidden md:flex ">
        <Link href="/">
          <div className="my-2 mx-8 py-2 hover:border-pink-700 border-b-4 border-white cursor-pointer">
            Home
          </div>
        </Link>
        <Link href="/posts">
          <div className="my-2 mx-8 py-2 hover:border-pink-700 border-b-4 border-white cursor-pointer">
            Posts
          </div>
        </Link>
        <Link href="/authors">
          <div className="my-2 mx-8 py-2 hover:border-pink-700 border-b-4 border-white cursor-pointer">
            Authors
          </div>
        </Link>
      </div>
      <div className="flex justify-start ">
        {/* <AvenueSelector /> */}
        <a
          href={"https://racuwu.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden md:block ml-4 h-12 border py-3 pt-3 px-8 mt-1 rounded-full bg-pink-700 text-white shadow-lg hover:border-pink-700 hover:bg-white hover:text-pink-700 hover:shadow-sm">
            Visit Site
          </button>
        </a>
      </div>
    </div>
  );
};
