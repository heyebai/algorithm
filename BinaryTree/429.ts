import NodeT from "./node";

function levelOrder(root: NodeT | null): number[][] {
  if (!root) {
    return [];
  }
  let queue: NodeT[] = [root];
  const result: number[][] = [];
  while (queue.length) {
    const len = queue.length;
    const layer: number[] = [];
    for (let i = 0; i < len; i++) {
      const node: NodeT = queue.shift();
      layer.push(node.val);
      queue = [...queue, ...node.children];
    }
    result.push(layer);
  }
  return result;
}
