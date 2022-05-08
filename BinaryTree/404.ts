import TreeNode from "./treeNode";

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue: TreeNode[] = [root];
  let sum = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
        if (!node.left.left && !node.left.right) {
          sum += node.left.val;
        }
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return sum;
}
