import TreeNode from "./treeNode";

const helper = (node: TreeNode | null, subRoot: TreeNode | null): boolean => {
  if (!node && subRoot) {
    return false;
  } else if (node && !subRoot) {
    return false;
  } else if (!node && !subRoot) {
    return true;
  } else if (node.val !== subRoot.val) {
    return false;
  }
  return helper(node.left, subRoot.left) && helper(node.right, subRoot.right);
};
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.val === subRoot.val && helper(node, subRoot)) {
        return true;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return false;
}
