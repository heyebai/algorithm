import TreeNode from "./treeNode";
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  }
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node: TreeNode = queue.shift();
      if (node.val === val) {
        return node;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return null;
}

// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (!root) {
//     return root;
//   }
//   let node: TreeNode | null = null;
//   if (root.val === val) {
//     return root;
//   }
//   node = searchBST(root.left, val);
//   if (node) {
//     return node;
//   }
//   node = searchBST(root.right, val);
//   return node;
// }
