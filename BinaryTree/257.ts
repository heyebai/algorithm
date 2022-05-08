import TreeNode from "./treeNode";

const helper = (node: TreeNode, arr: number[], res: string[]) => {
  arr.push(node.val);
  if (!node.left && !node.right) {
    res.push(arr.join("->"));
    return;
  }
  if (node.left) {
    helper(node.left, arr, res);
    arr.pop();
  }
  if (node.right) {
    helper(node.right, arr, res);
    arr.pop();
  }
};
function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];
  const arr: number[] = [];
  helper(root, arr, res);
  return res;
}
