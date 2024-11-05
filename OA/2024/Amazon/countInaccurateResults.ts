function countInaccurateResults(processOrder, executionOrder) {
  const dependencies = new Map();
  for (let i = 0; i < processOrder.length; i++) {
    dependencies.set(processOrder[i], processOrder.slice(0, i));
  }

  const processed = new Set();
  let count = 0;
  for (let i = 0; i < executionOrder.length; i++) {
    const dependency = dependencies.get(executionOrder[i]);
    for (let d of dependency) {
      if (!processed.has(d)) {
        count++;
        break;
      }
    }
    processed.add(executionOrder[i]);
  }

  return count;
}

// Example usage:
const processOrder = [4, 2, 3, 5, 1, 6];
const executionOrder = [2, 3, 5, 1, 6, 4];
console.log(countInaccurateResults(processOrder, executionOrder)); // Output: Number of inaccurate results
