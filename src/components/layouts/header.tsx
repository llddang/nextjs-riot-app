"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/commons/logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full shadow bg-background">
      <nav className="sm:px-4 sm:py-2 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex gap-4">
          {navLinks.map(({ href, name }) => {
            const isActive = href === pathname;
            return (
              <li key={href} className="group hover-underline px-1 py-2">
                <Link
                  href={href}
                  className={`group-hover:bg-hover px-2 py-1 rounded-xl ${isActive && "font-bold"}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

const navLinks = [
  { name: "챔피언 목록", href: "/champions" },
  { name: "아이템 목록", href: "/items" },
  { name: "챔피언 로테이션", href: "/rotation" },
];
