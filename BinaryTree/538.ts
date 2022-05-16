import TreeNode from "./treeNode";

function convertBST(root: TreeNode | null): TreeNode | null {
  let preVal: number = 0;
  const helper = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    helper(node.right);
    node.val = node.val + preVal;
    preVal = node.val;
    helper(node.left);
  };
  helper(root);
  return root;
}
