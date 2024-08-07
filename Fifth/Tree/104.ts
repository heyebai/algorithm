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

function maxDepth(root: TreeNode | null): number {
  const result = [];
  if (!root) return 0;
  const nodes = [];
  nodes.push(root);
  while (nodes.length) {
    const length = nodes.length;
    const temp = [];
    for (let i = 0; i < length; i++) {
      const curr = nodes.shift();
      temp.push(curr.val);
      if (curr.left) nodes.push(curr.left);
      if (curr.right) nodes.push(curr.right);
    }
    result.push(temp);
  }
  return result.length;
}
