import Image from "next/image";
import React from "react";
import { Logo } from "..";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-5 text-gray-400">
      <ul className="flex justify-center list-none p-0 my-4">
        <li className="mx-3">
          <div><Link href={'/posts'}>Posts</Link></div>
        </li>
        <li className="mx-3">
          <div><Link href={'/tags'}>Tags</Link></div>
        </li>
        <li className="mx-3">
          <div><Link href={'/authors'}>Authors</Link></div>
        </li>
        <li className="mx-3">
          <div><Link href={'/team'}>Team</Link></div>
        </li>
      </ul>
      <p>Made with ❤️ by <a href="https://blog.racuwu.com/team">Web Team</a></p>
    </div>
  );
};
