import breakpoint, {
  breakpointOrder,
  BreakpointType,
} from "@/constants/breakpoint.constant";
import { useCallback, useEffect, useState } from "react";

export default function useMediaQuery(type: BreakpointType): boolean {
  const [currentMedia, setCurrentMedia] = useState<BreakpointType>(
    breakpointOrder[0],
  );
  const [remSize, setRemSize] = useState<number>(16);

  useEffect(() => {
    const size = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    setRemSize(size);
  }, []);

  const updateCurrentMedia = useCallback(() => {
    const width = window.innerWidth;
    for (let i = breakpointOrder.length - 1; i >= 0; i--) {
      const bp = breakpointOrder[i];
      if (width > breakpoint[bp] * remSize || i === 0) {
        setCurrentMedia(bp);
        break;
      }
    }
  }, [remSize, breakpointOrder]);

  useEffect(() => {
    updateCurrentMedia();
    window.addEventListener("resize", updateCurrentMedia);
    return () => window.removeEventListener("resize", updateCurrentMedia);
  }, [updateCurrentMedia]);

  const typeIndex = breakpointOrder.indexOf(type);
  const currentIndex = breakpointOrder.indexOf(currentMedia);

  return currentIndex >= typeIndex;
}
