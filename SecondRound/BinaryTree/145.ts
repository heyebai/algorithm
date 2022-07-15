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
const helper = (root: TreeNode | null, res: number[]) => {
  if (!root) return;
  helper(root.left, res);
  helper(root.right, res);
  res.push(root.val);
};
function postorderTraversal(root: TreeNode | null): number[] {
  const res = [];
  helper(root, res);
  return res;
}
