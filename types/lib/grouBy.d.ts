declare function groupBy<T, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, T[]>;

export default groupBy;
