// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */

var pathSum = function (root, target) {
  const ret = [];
  const path = [];
  const dfs = (node, target) => {
    if (!node) {
      return;
    }
    path.push(node.val);

    target -= node.val;
    if (!node.left && !node.right && target === 0) {
      console.log(path);
      ret.push([...path]);
    }
    dfs(node.left, target);
    dfs(node.right, target);
    path.pop();
  };
  dfs(root, target);
  return ret;
};
