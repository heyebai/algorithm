// const graph = [
//   [1, 1, 0, 0, 1],
//   [1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [1, 0, 0, 1, 1],
// ];
// const directions = [
//   [-1, 0],
//   [0, 1],
//   [1, 0],
//   [0, -1],
// ];

// const bfs = () => {
//   const record = [];
//   for (let i = 0; i < graph.length; i++) {
//     record.push([...graph[i]]);
//   }
//   let result = 0;
//   const stack = [];
//   for (let i = 0; i < graph.length; i++) {
//     for (let j = 0; j < graph[i].length; j++) {
//       if (record[i][j] === 1) {
//         result++;
//         stack.push([i, j]);
//         while (stack.length) {
//           const [x, y] = stack.pop();
//           record[x][y] = -1;
//           for (let m = 0; m < directions.length; m++) {
//             if (
//               record[x + directions[m][0]] &&
//               record[x + directions[m][0]][y + directions[m][1]] === 1
//             ) {
//               stack.push([x + directions[m][0], y + directions[m][1]]);
//             }
//           }
//         }
//       }
//     }
//   }
//   return result;
// };

// console.log(bfs());
