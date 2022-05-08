import TreeNode from "./treeNode";

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue: TreeNode[] = [root];
  let leftNode: number = 0;
  while (queue.length) {
    const len: number = queue.length;
    for (let i = 0; i < len; i++) {
      const node: TreeNode = queue.shift();
      if (i === 0) {
        leftNode = node.val;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return leftNode;
}
