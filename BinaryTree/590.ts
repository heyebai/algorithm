const helper = (node: Node | null, res: number[]) => {
  if (!node) {
    return;
  }
  res.push(node.val);
  for (let n of node.children.reverse()) {
    helper(n, res);
  }
};
function postorder(root: Node | null): number[] {
  const res: number[] = [];
  helper(root, res);
  return res.reverse();
}
