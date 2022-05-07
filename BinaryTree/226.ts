import TreeNode from "./treeNode";

const helper = (node: TreeNode | null) => {
  if (!node) {
    return;
  }
  const temp: TreeNode = node.left;
  node.left = node.right;
  node.right = temp;
  helper(node.left);
  helper(node.right);
};
function invertTree(root: TreeNode | null): TreeNode | null {
  helper(root);
  return root;
}
