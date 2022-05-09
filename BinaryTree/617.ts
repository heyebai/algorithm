import TreeNode from "./treeNode";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  let node: TreeNode | null;
  if (!root1 && !root2) {
    node = null;
  } else if (!root1 && root2) {
    node = root2;
    node.left = mergeTrees(null, root2.left);
    node.right = mergeTrees(null, root2.right);
  } else if (root1 && !root2) {
    node = root1;
    node.left = mergeTrees(root1.left, null);
    node.right = mergeTrees(root1.right, null);
  } else {
    node = new TreeNode(root1.val + root2.val);
    node.left = mergeTrees(root1.left, root2.left);
    node.right = mergeTrees(root1.right, root2.right);
  }
  return node;
}

// can merge to root1 directly
