import TreeNode from "./treeNode";
function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) {
    return root;
  }
  if (root.val < low) {
    return trimBST(root.right, low, high);
  } else if (root.val > high) {
    return trimBST(root.left, low, high);
  } else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  }
  return root;
}
