import TreeNode from "./treeNode";
function findMode(root: TreeNode | null): number[] {
  const res: Record<number, number> = {};
  const helper = (node: TreeNode) => {
    if (!node) {
      return;
    }
    helper(node.left);
    if (res.hasOwnProperty(node.val)) {
      res[node.val] = res[node.val] + 1;
    } else {
      res[node.val] = 1;
    }
    helper(node.right);
  };
  helper(root);
  const arr = Object.entries(res).sort((a, b) => b[1] - a[1]);
  let len = arr[0][1];
  const ans = [];
  for (let a of arr) {
    if (a[1] === len) {
      ans.push(parseInt(a[0]));
    }
  }
  return ans;
}
