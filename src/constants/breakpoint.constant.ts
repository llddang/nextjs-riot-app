const breakpoint = {
  XS: 0,
  SM: 40, // "40rem",
  MD: 48, // "48rem",
  LG: 64, // "64rem",
  XL: 80, // "80rem",
  "2XL": 96, // "96rem",
};
export default breakpoint;

export type BreakpointType = keyof typeof breakpoint;
export const breakpointOrder = Object.keys(breakpoint).sort(
  (a, b) => breakpoint[a as BreakpointType] - breakpoint[b as BreakpointType],
) as BreakpointType[];
