"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type HeaderMobileNavProps = {
  navLinks: { name: string; href: string }[];
};
export default function HeaderMobileNav({ navLinks }: HeaderMobileNavProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div ref={sidebarRef} className="relative h-full sm:hidden">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col [&>span]:block [&>span]:h-1 [&>span]:w-8 [&>span]:rounded-lg [&>span]:transition-all [&>span]:duration-300 [&>span]:ease-in-out ${isOpen ? "gap-1.5 [&>span]:bg-background" : "gap-1 [&>span]:bg-foreground"}`}
      >
        <span
          className={`origin-[1.1px_1.5px] ${isOpen && "-translate-x-0.5 -translate-y-[1px] rotate-45"}`}
        ></span>
        <span className={`${isOpen && "opacity-0"}`}></span>
        <span
          className={`origin-[0%_100%] ${isOpen && "-translate-y-[1px] -rotate-45"}`}
        ></span>
      </div>
      <ul
        className={`absolute -top-2 z-10 flex w-52 flex-col items-center rounded-bl-xl bg-foreground px-2 pb-4 pt-14 text-background transition-[right_opacity] duration-300 ease-in-out ${isOpen ? "opacity-1 -right-6" : "-right-60 opacity-0"}`}
      >
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
    </div>
  );
}
