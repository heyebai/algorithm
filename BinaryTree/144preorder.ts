import TreeNode from "./TreeNode";

const helper = (node: TreeNode | null, result: number[]): number[] => {
  result.push(node.val);
  if (node.left === null && node.right === null) {
    return result;
  }
  if (node.left) {
    helper(node.left, result);
  }
  if (node.right) {
    helper(node.right, result);
  }
};
function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (root !== null) {
    helper(root, result);
  }
  return result;
}

// loop
function preorderTraversal1(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const stack: TreeNode[] = [root];
  const result: number[] = [];
  while (stack.length) {
    const node: TreeNode = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}
