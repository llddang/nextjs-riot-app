import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-primary flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-2 text-6xl font-bold tracking-widest">404</div>
      <div className="mb-4">페이지를 찾을 수 없습니다</div>
      <Link
        href="/"
        className="rounded-md bg-gold px-4 py-3 font-semibold leading-none text-white"
      >
        첫 화면으로 돌아가기
      </Link>
    </div>
  );
}
