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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  const node = new TreeNode(val);
  const recur = (root) => {
    if (!root) {
      return node;
    }
    if (root.val > val) {
      root.left = recur(root.left);
    } else {
      root.right = recur(root.right);
    }
    return root;
  };

  return recur(root);
}
