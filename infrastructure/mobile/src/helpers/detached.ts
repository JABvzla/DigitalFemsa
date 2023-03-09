export const detached = (fn: () => void | Promise<void>) => setTimeout(fn, 0);
