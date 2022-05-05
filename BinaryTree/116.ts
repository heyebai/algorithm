function connect(root: Node | null): Node | null {
  if (!root) {
    return null;
  }
  const queue: Node[] = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (i < len - 1) {
        node.next = queue[0];
      }
      if (node.left) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
  return root;
}
