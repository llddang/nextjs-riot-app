import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/header/header";
import { ToastContainer } from "react-toastify";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
});

const riot = localFont({
  src: "../../public/fonts/RiotRegular.woff2",
  variable: "--font-riot",
});

export const metadata: Metadata = {
  title: "Riot App",
  description:
    "This is a learning project that implements League of Legends game information using the Riot API through various rendering methods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} ${riot.variable} w-full overflow-x-hidden antialiased`}
      >
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
