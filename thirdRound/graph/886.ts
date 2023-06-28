function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const graph: number[][] = new Array(n + 1).fill(0).map((_) => []);
  for (const [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(graph);
  return true;
}
possibleBipartition(4, [
  [1, 2],
  [1, 3],
  [2, 4],
]);
const arr = [1, 2, 3];
arr.unshift(5);
arr.sort((a, b) => (a - b >= 0 ? 1 : -1));
console.log(arr);
console.log(arr.slice(0, 2));
arr.splice(1, 0, 9);
console.log(arr);
arr.shift();
console.log(arr);
console.log(String.fromCharCode(97));
const map = new Map();
map.set(1, 2);
map.set(2, 3);
map.set(3, 1);
map.delete(2);
console.log(map);
console.log(map.has(2));
map.forEach((a, b) => {
  console.log(a, b);
});
const mapArr = Array.from(map);
mapArr.sort((a, b) => b[1] - a[1]);
mapArr;
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.delete(1);
set;
set.forEach((a) => {
  console.log(a);
});
console.log(set.has(2));
const obj = { "w w": 2 };
console.log(obj.hasOwnProperty("w w"));
