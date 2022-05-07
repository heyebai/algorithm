import TreeNode from "./treeNode";

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue: TreeNode[] = [root];
  let minDepth: number = 0;
  while (queue.length) {
    const len: number = queue.length;
    minDepth++;
    for (let i = 0; i < len; i++) {
      let flag = 0;
      const node: TreeNode = queue.shift();
      if (node.left) {
        queue.push(node.left);
      } else {
        flag++;
      }
      if (node.right) {
        queue.push(node.right);
      } else {
        flag++;
      }
      if (flag === 2) {
        return minDepth;
      }
    }
  }
}
