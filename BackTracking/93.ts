function restoreIpAddresses(s: string): string[] {
  const res: string[] = [];
  const path: string[] = [];
  const helper = (s: string, index: number) => {
    if (index >= s.length && path.length === 4) {
      res.push(path.join("."));
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (
        (s[index] !== "0" && parseInt(s.substring(index, i + 1)) <= 255) ||
        s.substring(index, i + 1) === "0"
      ) {
        path.push(s.substring(index, i + 1));
      } else {
        continue;
      }
      helper(s, i + 1);
      path.pop();
    }
  };
  helper(s, 0);
  return res;
}
