import TreeNode from "./treeNode";
const helper = (node: TreeNode | null, result: number[]) => {
  if (!node) {
    return;
  }
  helper(node.left, result);
  result.push(node.val);
  helper(node.right, result);
};
function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  helper(root, result);
  return result;
}
