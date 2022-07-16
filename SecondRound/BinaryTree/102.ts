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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const arr = [];
  arr.push(root);
  const res = [];
  while (arr.length) {
    const len = arr.length;
    const temp = [];
    for (let i = 0; i < len; i++) {
      const node = arr.shift();
      temp.push(node.val);
      node.left && arr.push(node.left);
      node.right && arr.push(node.right);
    }
    res.push(temp);
  }
  return res;
}
