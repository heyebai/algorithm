function permutation(S: string): string[] {
  const res: Set<string> = new Set();
  const bt = (sTemp: string, path: string) => {
    if (path.length === S.length) {
      res.add(path);
    }
    for (let i = 0; i < sTemp.length; i++) {
      bt(
        sTemp.substring(0, i) + sTemp.substring(i + 1, sTemp.length),
        path + sTemp[i]
      );
    }
  };
  bt(S, "");
  return Array.from(res);
}
