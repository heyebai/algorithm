function backspaceCompare(s: string, t: string): boolean {
  let si = s.length - 1,
    ti = t.length - 1;
  while (si >= 0 || ti >= 0) {
    let counter = 0;
    while (si >= 0) {
      if (s[si] === "#") {
        counter++;
        si--;
      } else if (counter > 0) {
        si--;
        counter--;
      } else {
        break;
      }
    }
    counter = 0;
    while (ti >= 0) {
      if (t[ti] === "#") {
        counter++;
        ti--;
      } else if (counter > 0) {
        ti--;
        counter--;
      } else {
        break;
      }
    }
    if (si >= 0 && ti >= 0) {
      if (s[si] !== t[ti]) {
        return false;
      }
    } else {
      if (si >= 0 || ti >= 0) return false;
    }
    si--;
    ti--;
  }
  return true;
}
