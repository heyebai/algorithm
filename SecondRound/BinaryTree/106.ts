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
const helper = (inorder: number[], postorder: number[]) => {
  if (postorder.length === 0) return null;
  const mid = postorder.pop();
  const inorderMidIndex = inorder.indexOf(mid);
  const inorderLeft = inorder.slice(0, inorderMidIndex);
  const inorderRight = inorder.slice(inorderMidIndex + 1);
  const postorderLeft = postorder.slice(0, inorderLeft.length);
  const postorderRight = postorder.slice(inorderLeft.length);

  const node = new TreeNode(mid);
  node.left = helper(inorderLeft, postorderLeft);
  node.right = helper(inorderRight, postorderRight);
  return node;
};
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) return null;
  return helper(inorder, postorder);
}
