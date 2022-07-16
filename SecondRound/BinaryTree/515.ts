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
  if (!root) return [];
  const queue = [];
  queue.push(root);
  const res = [];
  while (queue.length) {
    const len = queue.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.val > max) {
        max = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(max);
  }
  return res;
}
