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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];
  const res = [];
  const arr = [];
  arr.push(root);
  while (arr.length) {
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      const node = arr.shift();
      sum += node.val;
      node.left && arr.push(node.left);
      node.right && arr.push(node.right);
    }
    res.push(sum / len);
  }
  return res;
}
