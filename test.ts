const data = {
  name: "John Doe",
  age: 30,
  scores: {
    math: 80,
    science: 75,
    history: {
      midterm: 70,
      final: {
        first: 100,
        second: 50,
      },
      secondFinal: {
        first: 80,
        second: 70,
        third: 95,
      },
    },
  },
};
let count = 0;
function getAverage(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += getAverage(obj[key]);
    } else if (typeof obj[key] === "number") {
      console.log(count);
      sum += obj[key];
      count++;
    }
  }
  console.log(">>>sum", sum);
  console.log(">>>count", count);
  return sum;
}

console.log(getAverage(data.scores));
