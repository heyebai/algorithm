import TreeNode from "./treeNode";
const helper = (node: Node | null, res: number[]) => {
  if (!node) {
    return;
  }
  res.push(node.val);
  for (let n of node.children) {
    helper(n, res);
  }
};
function preorder(root: Node | null): number[] {
  const result: number[] = [];
  helper(root, result);
  return result;
}
