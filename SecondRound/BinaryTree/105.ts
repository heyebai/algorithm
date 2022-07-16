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
const helper = (preorder: number[], inorder: number[]) => {
  if (preorder.length === 0) return null;
  const mid = preorder.shift();
  const inorderMidIndex = inorder.indexOf(mid);
  const inorderLeft = inorder.slice(0, inorderMidIndex);
  const inorderRight = inorder.slice(inorderMidIndex + 1);
  const preorderLeft = preorder.slice(0, inorderLeft.length);
  const preorderRight = preorder.slice(inorderLeft.length);
  const node = new TreeNode(mid);
  node.left = helper(preorderLeft, inorderLeft);
  node.right = helper(preorderRight, inorderRight);
  return node;
};
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;
  return helper(preorder, inorder);
}
