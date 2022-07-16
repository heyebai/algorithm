/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
const helper = (
  node: TreeNode | null,
  targetSum: number,
  path: number[],
  res: number[][]
) => {
  if (!node) return;
  path.push(node.val);
  if (!node.left && !node.right) {
    let sum = 0;
    for (const n of path) {
      sum += n;
    }
    if (sum === targetSum) {
      res.push([...path]);
    }
  }
  if (node.left) {
    helper(node.left, targetSum, path, res);
    path.pop();
  }
  if (node.right) {
    helper(node.right, targetSum, path, res);
    path.pop();
  }
};
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [],
    path = [];
  helper(root, targetSum, path, res);
  return res;
}
