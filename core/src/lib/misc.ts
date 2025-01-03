export const sleep = (msDelay: number): Promise<void> =>
  new Promise((res, rej) => setTimeout(res, msDelay));
