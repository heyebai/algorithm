function backspaceCompare(s: string, t: string): boolean {
  let slen: number = s.length - 1,
    tlen: number = t.length - 1;
  while (slen >= 0 || tlen >= 0) {
    let sr: number = 0,
      tr: number = 0;
    while (slen >= 0) {
      if (s[slen] === "#") {
        sr++;
        slen--;
      } else if (sr > 0) {
        slen--;
        sr--;
      } else {
        break;
      }
    }

    while (tlen >= 0) {
      if (t[tlen] === "#") {
        tr++;
        tlen--;
      } else if (tr > 0) {
        tlen--;
        tr--;
      } else {
        break;
      }
    }
    if (slen >= 0 && tlen >= 0 && s[slen] !== t[tlen]) {
      return false;
    }
    if ((slen >= 0 && tlen < 0) || (slen < 0 && tlen >= 0)) {
      return false;
    }
    slen--;
    tlen--;
  }
  return true;
}
