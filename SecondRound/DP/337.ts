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
const map: Map<TreeNode, number> = new Map();
function rob(root: TreeNode | null): number {
  if (!root) return 0;
  if (map.get(root)) return map.get(root);
  // not include root
  const res1 = rob(root.left) + rob(root.right);
  // include root
  let res2 = root.val;
  if (root.left) {
    res2 += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    res2 += rob(root.right.left) + rob(root.right.right);
  }
  map.set(root, Math.max(res1, res2));
  return Math.max(res1, res2);
}
