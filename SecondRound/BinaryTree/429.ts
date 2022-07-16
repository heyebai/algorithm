/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  if (!root) return [];
  let queue = [];
  const res = [];
  queue.push(root);
  while (queue.length) {
    const len = queue.length;
    const temp = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      temp.push(node.val);
      if (node.children.length) {
        queue = queue.concat(node.children);
      }
    }
    res.push(temp);
  }
  return res;
}
