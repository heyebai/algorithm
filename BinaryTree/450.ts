import TreeNode from "./treeNode";
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return root;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val === key) {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let curr = root.right;
      while (curr.left) {
        curr = curr.left;
      }
      const temp = root.left;
      root = root.right;
      curr.left = temp;
      return root;
    }
  }
  return root;
}
