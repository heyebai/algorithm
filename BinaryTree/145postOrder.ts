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

// loop
function postorderTraversal1(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const stack: TreeNode[] = [root];
  const result: number[] = [];
  while (stack.length) {
    const node: TreeNode = stack.pop();
    result.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result.reverse();
}
