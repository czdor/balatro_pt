// converts a string to capitalized. e.g. console => Console
export const capitalize = (s: string): string => {
  if (!s.length) return "";

  return s.charAt(0).toUpperCase() + s.slice(1);
};
