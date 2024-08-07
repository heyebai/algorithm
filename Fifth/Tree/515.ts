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

function largestValues(root: TreeNode | null): number[] {
  const result = [];
  if (!root) return result;
  const nodes = [];
  nodes.push(root);
  while (nodes.length) {
    const length = nodes.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < length; i++) {
      const curr = nodes.shift();
      max = Math.max(max, curr.val);
      if (curr.left) nodes.push(curr.left);
      if (curr.right) nodes.push(curr.right);
    }
    result.push(max);
  }
  return result;
}
