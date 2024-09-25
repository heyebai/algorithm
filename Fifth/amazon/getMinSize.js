const getMinSize = (gameSize, k) => {
  if (gameSize.length === k) {
    return Math.max(...gameSize);
  }
  const sortedGameSize = gameSize.sort((a, b) => a - b);
  const diff = gameSize.length - k;
  const kids = sortedGameSize.slice(diff);
  let kIndex = 0;
  for (let i = diff - 1; i >= 0; i--) {
    kids[kIndex++] += sortedGameSize[i];
  }
  return Math.max(...kids);
};

console.log(getMinSize([9, 2, 4, 6], 3));
console.log(getMinSize([5, 11], 1));
console.log(getMinSize([1, 1, 1, 5, 5, 5, 8, 8, 9], 5));
