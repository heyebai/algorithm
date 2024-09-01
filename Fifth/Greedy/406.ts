function reconstructQueue(people: number[][]): number[][] {
  const sortedPeople = people.sort(([ah, ak], [bh, bk]) => {
    if (ah === bh) {
      return ak - bk;
    }
    return bh - ah;
  });
  const result = [];
  for (let i = 0; i < sortedPeople.length; i++) {
    result.splice(sortedPeople[i][1], 0, sortedPeople[i]);
  }
  return result;
  // [4,4],[5,0],[5,2],[6,1],[7,0],[7,1]
  // [7,0],[7,1],[6,1],[5,0],[5,2],[4,4]
  // [7,0],[6,1],[7,1],[5,0],[5,2],[4,4]
  // [5,0],[7,0],[6,1],[7,1],[5,2],[4,4]
}
