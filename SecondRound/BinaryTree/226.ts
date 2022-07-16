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
const helper = (root: TreeNode | null) => {
  if (!root) return;
  const temp = root.left;
  helper(root.left);
  helper(root.right);
  root.left = root.right;
  root.right = temp;
};
function invertTree(root: TreeNode | null): TreeNode | null {
  helper(root);
  return root;
}
