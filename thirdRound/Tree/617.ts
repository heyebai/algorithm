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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  let node = null;
  if (!root1 && !root2) return null;
  if (root1 && !root2) {
    node = root1;
    node.left = mergeTrees(root1.left, root2);
    node.right = mergeTrees(root1.right, root2);
  } else if (!root1 && root2) {
    node = root2;
    node.left = mergeTrees(root1, root2.left);
    node.right = mergeTrees(root1, root2.right);
  } else {
    node = new TreeNode(root1.val + root2.val);
    node.left = mergeTrees(root1.left, root2.left);
    node.right = mergeTrees(root1.right, root2.right);
  }
  return node;
}
