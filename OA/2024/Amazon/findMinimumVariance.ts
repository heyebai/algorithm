function findMinimumVariance(height) {
  const appear = new Map();
  let result = Infinity;

  for (let i = 0; i < height.length; i++) {
    const num = height[i];

    if (appear.has(num)) {
      // Calculate the variance as the distance between current and previous occurrence - 1
      result = Math.min(result, i - appear.get(num) - 1);
    }

    // Update the latest index of the current number
    appear.set(num, i);
  }

  return result;
}

// Example usage:
const heights = [4, 2, 5, 4, 4, 3];
console.log(findMinimumVariance(heights)); // Outputs the minimum variance
