import TreeNode from "../BinaryTree/treeNode";
const record: Map<TreeNode, number> = new Map();
function rob(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  if (record.has(root)) return record.get(root);
  // rob root
  let val1 = root.val;
  root.left && (val1 += rob(root.left.left) + rob(root.left.right));
  root.right && (val1 += rob(root.right.left) + rob(root.right.right));
  // donot rob root
  let val2 = rob(root.right) + rob(root.left);
  record.set(root, Math.max(val1, val2));
  return Math.max(val1, val2);
}

//  0 rob 1 not rob
const helper = (root: TreeNode | null): number[] => {
  if (!root) return [0, 0];
  const left = helper(root.left);
  const right = helper(root.right);
  // rob
  const val1 = root.val + left[1] + right[1];
  // not rob
  const val2 = Math.max(...left) + Math.max(...right);
  return [val1, val2];
};
function rob1(root: TreeNode | null): number {
  const res = helper(root);
  return Math.max(...res);
}
