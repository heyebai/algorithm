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

// loop
function inorderTraversal1(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const result: number[] = [];
  let node: TreeNode | null = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      result.push(node.val);
      node = node.right;
    }
  }
  return result;
}
