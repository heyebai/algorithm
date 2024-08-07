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
//              10
//          6       12
//    4        8         14
//   2 5      7  9

const recur = (node) => {
  if (!node.left) {
    return node;
  }
  return recur(node.left);
};

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;
  if (root.val === key) {
    if (!root.right) {
      return root.left;
    }
    if (!root.left) {
      return root.right;
    }

    const node = recur(root.right);

    node.left = root.left;
    return root.right;
  }

  root.right = deleteNode(root.right, key);
  root.left = deleteNode(root.left, key);
  return root;
}
