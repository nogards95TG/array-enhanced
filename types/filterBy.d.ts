declare function filterBy<T, K extends keyof T>(
  arr: T[],
  key: K,
  search: T[K] | Array<T[K]>
): T[];

export default filterBy;
