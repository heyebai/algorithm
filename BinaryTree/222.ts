import TreeNode from "./treeNode";

const helper = (node: TreeNode, res: TreeNode[]) => {
  if (!node) {
    return;
  }
  res.push(node);
  helper(node.left, res);
  helper(node.right, res);
};
function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const res: TreeNode[] = [];
  helper(root, res);
  return res.length;
}
