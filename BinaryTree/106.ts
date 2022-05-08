import TreeNode from "./treeNode";
const helper = (inorder: number[], postorder: number[]): TreeNode => {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  const mid: number = postorder.pop();
  let midIndex = -1;
  // get index of min in inorder
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === mid) {
      midIndex = i;
      break;
    }
  }
  const root: TreeNode = new TreeNode(mid);
  // inorder
  const leftInorder = inorder.slice(0, midIndex);
  const rightInorder = inorder.slice(midIndex + 1);
  // postorder
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftInorder.length);
  root.left = helper(leftInorder, leftPostorder);
  root.right = helper(rightInorder, rightPostorder);
  return root;
};
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  return helper(inorder, postorder);
}
