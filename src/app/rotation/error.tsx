"use client";

import { HttpError } from "@/types/error.type";
import Link from "next/link";
import { toast } from "react-toastify";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="text-primary flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-2 text-4xl font-bold">이런!</div>
      <div className="mb-4">{getRotationChampionErrorMessage(error)}</div>

      <div className="mt-4 flex flex-col items-center gap-2">
        <button
          className="bg-blue-500 rounded-md border border-gold px-4 py-3 leading-none"
          onClick={() => {
            reset();
            window.location.reload();
          }}
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

function getRotationChampionErrorMessage(error: Error) {
  if (
    error instanceof HttpError &&
    (error.statusCode === 403 || error.statusCode === 401)
  ) {
    return "유효하지 않은 API 키입니다.";
  }
  return "오늘의 무료 챔피언을 불러오는데 실패했습니다.";
}
