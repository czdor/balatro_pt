// converts a string to capitalized. e.g. console => Console
export const capitalize = (s: string): string => {
  if (!s.length) return "";

  return s.charAt(0).toUpperCase() + s.slice(1);
};

// export const debounce = <T extends (...args: any[]) => void>(
//   func: T,
//   delay: number
// ): ((...args: Parameters<T>) => void) => {
//   let timeoutId: any;

//   return function (...args: Parameters<T>): void {
//     if (timeoutId) clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       // @ts-ignore
//       func.apply(this, args);
//     }, delay);
//   };
// };
