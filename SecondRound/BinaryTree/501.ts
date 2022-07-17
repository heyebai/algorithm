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

function findMode(root: TreeNode | null): number[] {
  const arr = [];
  const inorder = (node: TreeNode | null) => {
    if (!node) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  const map: Map<number, number> = new Map();
  for (const n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  const res = [];
  let max = sorted[0][1];
  for (const t of sorted) {
    if (t[1] === max) {
      res.push(t[0]);
    }
  }
  return res;
}
