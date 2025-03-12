"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="text-primary flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-2 text-4xl font-bold">이런!</div>
      <div className="mb-4">알 수 없는 오류가 발생했습니다.</div>

      <div className="mt-4 flex flex-col items-center gap-2">
        <button
          className="bg-blue-500 rounded-md border border-gold px-4 py-3 leading-none"
          onClick={() => reset()}
        >
          새로고침
        </button>
        또는
        <Link href="/" className="rounded-md bg-gold px-4 py-3 leading-none">
          첫 화면으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
