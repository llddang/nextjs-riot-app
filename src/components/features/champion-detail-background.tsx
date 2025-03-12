"use client";

import useMediaQuery from "@/lib/hooks/useMediaQuery.hook";

type ChampionDetailBackgroundProps = { id: string };
export default function ChampionDetailBackground({
  id,
}: ChampionDetailBackgroundProps) {
  const isMDOrLarger = useMediaQuery("MD");

  return (
    <div
      className="absolute -z-10 h-full w-full !bg-cover !bg-center"
      style={{
        background: `
          linear-gradient(to ${isMDOrLarger ? "top left" : "top"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) ${isMDOrLarger ? "70%" : "40%"}),
          url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg') no-repeat top center / contain
        `,
      }}
    />
  );
}
