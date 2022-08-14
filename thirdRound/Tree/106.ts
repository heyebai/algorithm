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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) return null;
  const mid = postorder.pop();
  const node = new TreeNode(mid);
  const inorderMidIndex = inorder.indexOf(mid);
  const inorderLeft = inorder.slice(0, inorderMidIndex);
  const inorderRight = inorder.slice(inorderMidIndex + 1);
  const postorderLeft = postorder.slice(0, inorderMidIndex);
  const postorderRight = postorder.slice(inorderMidIndex);
  node.left = buildTree(inorderLeft, postorderLeft);
  node.right = buildTree(inorderRight, postorderRight);
  return node;
}
