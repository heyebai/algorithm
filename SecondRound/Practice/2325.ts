function decodeMessage(key: string, message: string): string {
  const secret: string[] = new Array(26).fill("");
  let index = 0;
  for (let c of key) {
    if (c === " ") {
      continue;
    }
    if (!secret.includes(c)) {
      secret[index++] = c;
    }
  }
  let res: string = "";
  for (let c of message) {
    if (c === " ") {
      res += " ";
      continue;
    }
    res += String.fromCharCode(secret.indexOf(c) + 97);
  }
  return res;
}
