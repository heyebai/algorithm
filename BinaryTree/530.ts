import TreeNode from "./treeNode";
function getMinimumDifference(root: TreeNode | null): number {
  let diff = Number.MAX_SAFE_INTEGER;
  const helper = (node: TreeNode | null, nums: number[]): null => {
    if (!node) {
      return null;
    }
    helper(node.left, nums);

    nums.push(node.val);
    helper(node.right, nums);
  };
  const nums: number[] = [];
  helper(root, nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] < diff) {
      diff = nums[i] - nums[i - 1];
    }
  }
  return diff;
}
