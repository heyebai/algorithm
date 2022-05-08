import TreeNode from "./treeNode";

// const helper = (
//   node: TreeNode,
//   path: number[],
//   targetSum: number,
//   res: number[]
// ) => {
//   path.push(node.val);
//   if (!node.left && !node.right) {
//     if (
//       path.reduce((acc, curr) => {
//         return acc + curr;
//       }, 0) === targetSum
//     ) {
//       res.push(1);
//     }
//     return;
//   }
//   if (node.left) {
//     helper(node.left, path, targetSum, res);
//     path.pop();
//   }
//   if (node.right) {
//     helper(node.right, path, targetSum, res);
//     path.pop();
//   }
// };
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   if (!root) {
//     return false;
//   }
//   const path: number[] = [];
//   const res: number[] = [];
//   helper(root, path, targetSum, res);
//   return res.indexOf(1) > -1 ? true : false;
// }

const helper = (node: TreeNode, path: number[], targetSum: number): boolean => {
  path.push(node.val);
  if (!node.left && !node.right) {
    if (
      path.reduce((acc, curr) => {
        return acc + curr;
      }, 0) === targetSum
    ) {
      return true;
    }
    return false;
  }
  if (node.left) {
    if (helper(node.left, path, targetSum)) {
      return true;
    }
    path.pop();
  }
  if (node.right) {
    if (helper(node.right, path, targetSum)) {
      return true;
    }
    path.pop();
  }
  return false;
};
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  const path: number[] = [];

  return helper(root, path, targetSum);
}
