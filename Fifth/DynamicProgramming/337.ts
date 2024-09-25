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
const map = new Map();
function rob(root: TreeNode | null): number {
  if (!root) return 0;
  if (map.has(root)) {
    return map.get(root);
  }
  const a = rob(root.left) + rob(root.right);

  let b = root.val;
  if (root.left) {
    b += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    b += rob(root.right.left) + rob(root.right.right);
  }
  const max = Math.max(a, b);
  map.set(root, max);
  return max;
}
