import TreeNode from "./treeNode";

const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
  if (left && !right) {
    return false;
  }
  if (!left && right) {
    return false;
  }
  if (!left && !right) {
    return true;
  }
  if (left.val !== right.val) {
    return false;
  }
  return helper(left.left, right.right) && helper(left.right, right.left);
};
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return helper(root.left, root.right);
}
