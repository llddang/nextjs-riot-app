import Link from "next/link";
import Logo from "@/components/commons/logo";
import HeaderDesktopNav from "@/components/layouts/header/header-desktop-nav";
import HeaderMobileNav from "@/components/layouts/header/header-mobile-nav";

const navLinks = [
  { name: "챔피언 목록", href: "/champions" },
  { name: "아이템 목록", href: "/items" },
  { name: "챔피언 로테이션", href: "/rotation" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-10 w-full bg-background shadow">
      <nav className="flex h-14 max-w-5xl items-center justify-between px-6 py-2 sm:mx-auto">
        <Link href="/">
          <Logo />
        </Link>
        <HeaderMobileNav navLinks={navLinks} />
        <HeaderDesktopNav navLinks={navLinks} />
      </nav>
    </header>
  );
}
