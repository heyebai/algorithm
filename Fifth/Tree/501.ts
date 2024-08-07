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
  const map = new Map();
  const recur = (node: TreeNode | null) => {
    if (!node) return;
    recur(node.left);
    if (map.get(node.val)) {
      map.set(node.val, map.get(node.val) + 1);
    } else {
      map.set(node.val, 1);
    }
    recur(node.right);
  };
  recur(root);

  const arr = Array.from(map).sort((a, b) => {
    return b[1] - a[1];
  });
  const result = [arr[0][0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[0][1] === arr[i][1]) {
      result.push(arr[i][0]);
    }
  }
  return result;
}
