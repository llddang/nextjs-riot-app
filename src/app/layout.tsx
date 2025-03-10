import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

const riot = localFont({
  src: "../public/fonts/RiotRegular.woff2",
  weight: "400",
  style: "normal",
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
      <body className={`${pretendard.className} ${riot.variable} antialiased`}>{children}</body>
    </html>
  );
}
