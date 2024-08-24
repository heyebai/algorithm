function combinationSum2(candidates: number[], target: number): number[][] {
  const sortedCandidates = candidates.sort((a, b) => a - b);
  const result = [];
  const temp = [];
  let sum = 0;
  // const record=[]
  const backTracking = (index) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(temp.slice());
      return;
    }
    // if(!Array.isArray(record[index])){
    //     record.push([])
    // }
    for (let i = index; i < sortedCandidates.length; i++) {
      if (sortedCandidates[i] === sortedCandidates[i - 1] && i > index) {
        continue;
      }
      // if(record[index]?.includes(sortedCandidates[i])){
      //     continue
      // }
      // record[index]?.push(sortedCandidates[i])
      temp.push(sortedCandidates[i]);
      sum += sortedCandidates[i];
      backTracking(i + 1);
      const num = temp.pop();
      sum -= num;
    }
  };
  // console.log(record)
  backTracking(0);
  return result;
}
