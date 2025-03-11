"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderDesktopNavProps = {
  navLinks: { name: string; href: string }[];
};
export default function HeaderDesktopNav({ navLinks }: HeaderDesktopNavProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden gap-4 sm:flex">
      {navLinks.map(({ href, name }) => {
        const isActive = href === pathname;
        return (
          <li key={href} className="hover-underline group px-1 py-2">
            <Link
              href={href}
              className={`rounded-xl px-2 py-1 group-hover:bg-hover ${isActive && "font-bold"}`}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
