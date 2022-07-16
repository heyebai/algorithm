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
const helper = (node: TreeNode | null, path: number[], res: string[]) => {
  if (!node) return;
  path.push(node.val);
  if (!node.left && !node.right) {
    res.push(path.join("->"));
    return;
  }
  if (node.left) {
    helper(node.left, path, res);
    path.pop();
  }
  if (node.right) {
    helper(node.right, path, res);
    path.pop();
  }
};
function binaryTreePaths(root: TreeNode | null): string[] {
  const path = [],
    res = [];
  helper(root, path, res);
  return res;
}
