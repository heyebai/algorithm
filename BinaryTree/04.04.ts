import TreeNode from "./treeNode";

const helper = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }
  return Math.max(helper(root.right), helper(root.left)) + 1;
};
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  return (
    Math.abs(helper(root.left) - helper(root.right)) <= 1 &&
    isBalanced(root.right) &&
    isBalanced(root.left)
  );
}
