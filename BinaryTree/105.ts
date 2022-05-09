import TreeNode from "./treeNode";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  const rootVal: number = preorder.shift();
  const root: TreeNode = new TreeNode(rootVal);
  const rootIndex = inorder.indexOf(rootVal);
  // inorder
  const inorderLeft: number[] = inorder.slice(0, rootIndex);
  const inorderRight: number[] = inorder.slice(rootIndex + 1);
  // preorder
  const preorderLeft: number[] = preorder.slice(0, inorderLeft.length);
  const preorderRight: number[] = preorder.slice(inorderLeft.length);
  root.left = buildTree(preorderLeft, inorderLeft);
  root.right = buildTree(preorderRight, inorderRight);
  return root;
}
