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
function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let pre = 0;
  const inorder = (node: TreeNode | null) => {
    if (!node) return;
    inorder(node.right);
    node.val = node.val + pre;
    pre = node.val;
    inorder(node.left);
  };
  inorder(root);
  return root;
}
