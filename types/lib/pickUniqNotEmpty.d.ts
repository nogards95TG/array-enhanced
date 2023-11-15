declare function pickUniqNotEmpty<T, K extends keyof T>(
  src: Array<{
    [K in keyof T]?: T[K] | null | undefined;
  }>,
  key: K
): { [K in keyof T]: T[K] }[K][];

export default pickUniqNotEmpty;
