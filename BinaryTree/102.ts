import TreeNode from "./treeNode";

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const queue: TreeNode[] = [root];
  const result: number[][] = [];
  while (queue.length) {
    const len = queue.length;
    const layer: number[] = [];
    for (let i = 0; i < len; i++) {
      const node: TreeNode = queue.shift();
      layer.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(layer);
  }
  return result;
}
