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

function preorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const recurse = (node) => {
    if (!node) return;
    result.push(node.val);
    recurse(node.left);
    recurse(node.right);
  };
  recurse(root);
  return result;
}

// function preorderTraversal(root: TreeNode | null): number[] {
//     if(!root) return []
//     const result =[]
//     const queue=[]
//     queue.push(root)
//     while(queue.length){
//         const node = queue.shift()
//         result.push(node.val)
//         if(node.right){
//             queue.unshift(node.right)
//         }
//         if(node.left){
//             queue.unshift(node.left)
//         }
//     }
//     return result
// };
