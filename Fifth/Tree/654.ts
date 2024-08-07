/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const recur = (nums) => {
    if (nums.length === 0) return null;
    let max = nums[0],
      maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
        maxIndex = i;
      }
    }
    const node = new TreeNode(max);
    node.left = recur(nums.slice(0, maxIndex));
    node.right = recur(nums.slice(maxIndex + 1));
    return node;
  };
  return recur(nums);
}
