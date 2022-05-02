import TreeNode from "./TreeNode";

const helper = (node: TreeNode | null, result: number[]) => {
  if (!node) {
    return;
  }
  helper(node.left, result);
  helper(node.right, result);
  result.push(node.val);
};
function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  helper(root, result);
  return result;
}
