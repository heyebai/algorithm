import TreeNode from "./treeNode";

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const queue: TreeNode[] = [root];
  const result: number[] = [];
  while (queue.length) {
    const len: number = queue.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
      const node: TreeNode = queue.shift();
      if (node.val > max) {
        max = node.val;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(max);
  }
  return result;
}
