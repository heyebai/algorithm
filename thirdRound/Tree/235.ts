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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;
  if (p && !q) return p;
  if (!p && q) return q;
  if (!p && !q) return null;
  if (root === p || root === q) {
    return root;
  } else {
    let node = null;
    if (p.val < root.val && q.val < root.val) {
      node = lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
      node = lowestCommonAncestor(root.right, p, q);
    } else {
      return root;
    }
    return node;
  }
}
