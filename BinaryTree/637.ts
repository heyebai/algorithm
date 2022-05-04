import TreeNode from "./treeNode";

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const result: number[] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      const node: TreeNode = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(parseFloat((sum / len).toFixed(5)));
  }
  return result;
}
