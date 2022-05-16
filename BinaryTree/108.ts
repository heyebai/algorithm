import TreeNode from "./treeNode";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }
  const midIndex = ~~(nums.length / 2);
  const node = new TreeNode(nums[midIndex]);
  node.left = sortedArrayToBST(nums.slice(0, midIndex));
  node.right = sortedArrayToBST(nums.slice(midIndex + 1));
  return node;
}
