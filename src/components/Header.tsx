"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Posts", href: "/posts" },
  ];

  return (
    <ul className="flex gap-5 justify-start mb-10">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={`text-zinc-400 transition ${
              pathname === link.href ? "text-white" : ""
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
