/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if (!root) return root;
  const nodes = [];
  nodes.push(root);
  while (nodes.length) {
    const length = nodes.length;
    for (let i = 0; i < length; i++) {
      const curr = nodes.shift();
      if (i === length - 1) {
        curr.next = null;
      } else {
        curr.next = nodes[0];
      }
      if (curr.left) nodes.push(curr.left);
      if (curr.right) nodes.push(curr.right);
    }
  }
  return root;
}
