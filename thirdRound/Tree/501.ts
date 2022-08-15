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
  const map: Map<number, number> = new Map();
  const helper = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    helper(node.left);
    if (map.has(node.val)) {
      map.set(node.val, map.get(node.val) + 1);
    } else {
      map.set(node.val, 1);
    }
    helper(node.right);
  };
  helper(root);
  const temp = Array.from(map).sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });
  if (temp.length === 0) return [];
  const max = temp[0][1];
  const res = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i][1] === max) {
      res.push(temp[i][0]);
    }
  }
  return res;
}
