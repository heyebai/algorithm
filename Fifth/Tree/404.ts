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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let result = 0;
  const recur = (node: TreeNode | null, isLeft: boolean) => {
    if (!node) return;
    if (!node.left && !node.right && isLeft) {
      result += node.val;
      return;
    }
    recur(node.right, false);
    recur(node.left, true);
  };
  recur(root, false);
  return result;
}
