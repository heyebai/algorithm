import TreeNode from "./treeNode";
const helper = (nums: number[]): TreeNode | null => {
  if (!nums.length) {
    return null;
  }
  let max = 0,
    maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  const root: TreeNode = new TreeNode(max);
  const left: number[] = nums.slice(0, maxIndex);
  const right: number[] = nums.slice(maxIndex + 1);
  root.left = helper(left);
  root.right = helper(right);
  return root;
};
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  return helper(nums);
}
