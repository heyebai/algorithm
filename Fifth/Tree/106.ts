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
  const recurs = (inorder: number[], postorder: number[]) => {
    if (!inorder.length) return null;
    const val = postorder[postorder.length - 1];
    const node = new TreeNode(val);
    const rootIndex = inorder.indexOf(val);
    const leftIn = inorder.slice(0, rootIndex);
    const leftPost = postorder.slice(0, leftIn.length);
    const rightIn = inorder.slice(rootIndex + 1);
    const rightPost = postorder.slice(leftIn.length, postorder.length - 1);
    node.left = recurs(leftIn, leftPost);
    node.right = recurs(rightIn, rightPost);
    return node;
  };
  // if(!inorder.length) return null
  return recurs(inorder, postorder);
}
