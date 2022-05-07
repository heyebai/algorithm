import TreeNode from "./treeNode";
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue: TreeNode[] = [root];
  let depth: number = 0,
    len: number = 0;

  while (queue.length) {
    len = queue.length;

    depth += 1;
    for (let i = 0; i < len; i++) {
      const node: TreeNode = queue.shift();
      if (node.right) {
        queue.push(node.right);
      }
      if (node.left) {
        queue.push(node.left);
      }
    }
  }
  return depth;
}
