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
const memo: Map<TreeNode, number> = new Map();
function rob(root: TreeNode | null): number {
  if (!root) return 0;
  if (memo.has(root)) return memo.get(root);
  // rob root
  let res = root.val;
  let left = 0,
    right = 0;
  if (root.left) {
    left = rob(root.left.right) + rob(root.left.left);
  }
  if (root.right) {
    right = rob(root.right.left) + rob(root.right.right);
  }
  res += left + right;
  // not rob root
  let res1 = 0;
  const left1 = rob(root.left);
  const right1 = rob(root.right);
  res1 += left1 + right1;
  memo.set(root, Math.max(res, res1));
  return Math.max(res, res1);
}
