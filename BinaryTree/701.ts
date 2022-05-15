import TreeNode from "./treeNode";

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    const node: TreeNode = new TreeNode(val);
    return node;
  }
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
}
