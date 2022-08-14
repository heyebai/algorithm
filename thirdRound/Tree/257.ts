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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return [];
  const res: string[] = [];
  const backTracking = (node: TreeNode | null, path: number[]) => {
    if (!node.left && !node.right) {
      res.push(path.join("->"));
      return;
    }
    if (node.left) {
      path.push(node.left.val);
      backTracking(node.left, path);
      path.pop();
    }
    if (node.right) {
      path.push(node.right.val);
      backTracking(node.right, path);
      path.pop();
    }
  };
  backTracking(root, [root.val]);
  return res;
}

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

function binaryTreePaths(root: TreeNode | null): string[] {
  const resArr: string[] = [];
  if (root === null) return resArr;
  const helper = (node: TreeNode | null, path: number[]) => {
    path.push(node.val);
    if (!node.left && !node.right) {
      resArr.push(path.join("->"));
      return;
    }
    node.left && helper(node.left, path.slice());
    node.right && helper(node.right, path.slice());
  };
  helper(root, []);
  return resArr;
}
