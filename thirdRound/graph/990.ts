const test = ["a==b", "c==d", "a==c"];
function equationsPossible(equations: string[]): boolean {
  const find = (arr: number[], i: number) => {
    while (arr[i] !== i) {
      arr[i] = arr[arr[i]];
      i = arr[i];
    }
    return i;
  };
  const union = (arr: number[], i1: number, i2: number) => {
    arr[find(arr, i1)] = find(arr, i2);
  };
  const notEq: string[] = [];
  const eq: number[] = new Array(25).fill(0);
  for (let i = 0; i < 26; i++) {
    eq[i] = i;
  }
  for (let i = 0; i < equations.length; i++) {
    const x = equations[i][0];
    const y = equations[i][3];
    const op = equations[i].substring(1, 3);
    if (op === "!=") {
      notEq.push(equations[i]);
    } else {
      union(eq, x.charCodeAt(0) - 97, y.charCodeAt(0) - 97);
    }
  }
  console.log(eq);
  for (const ne of notEq) {
    const x = ne.charCodeAt(0) - 97;
    const y = ne.charCodeAt(3) - 97;
    if (find(eq, x) === find(eq, y)) return false;
  }
  return true;
}

equationsPossible(test);
