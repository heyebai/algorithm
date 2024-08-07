/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */

function levelOrder(root: _Node | null): number[][] {
  const result = [];
  if (!root) return result;
  const nodes = [];
  nodes.push(root);
  while (nodes.length) {
    const length = nodes.length;
    const temp = [];
    for (let i = 0; i < length; i++) {
      const curr = nodes.shift();
      temp.push(curr.val);
      for (let j = 0; j < curr.children.length; j++) {
        nodes.push(curr.children[j]);
      }
    }
    result.push(temp);
  }
  return result;
}
