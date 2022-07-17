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

function isValidBST(root: TreeNode | null): boolean {
  const inorderArr = [];
  const inorder = (node: TreeNode | null) => {
    if (!node) return;
    inorder(node.left);
    inorderArr.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  for (let i = 0; i < inorderArr.length; i++) {
    if (i > 0) {
      if (inorderArr[i] <= inorderArr[i - 1]) return false;
    }
  }
  return true;
}
