import TreeNode from "./treeNode";
const helper = (node: TreeNode | null, arr: number[]): boolean => {
  if (!node) {
    return true;
  }
  const left = helper(node.left, arr);
  if (node.val <= arr[arr.length - 1]) {
    return false;
  }
  arr.push(node.val);
  const right = helper(node.right, arr);
  return left && right;
};
function isValidBST(root: TreeNode | null): boolean {
  const arr: number[] = [Number.MIN_SAFE_INTEGER];
  if (!helper(root, arr)) {
    return false;
  }
  return true;
}
