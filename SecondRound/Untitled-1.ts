let store = [1, 2, 7, 4, 5, 6];

store = store.slice(0, 1).concat(store.slice(1 + 1));

const a = { 2: 3 };
console.log(a[3]);
console.log(store.sort((a, b) => (a - b > 0 ? 1 : -1)));

console.log("abc".charCodeAt(1));
console.log(String.fromCharCode(97));

console.log("abc".toUpperCase());
