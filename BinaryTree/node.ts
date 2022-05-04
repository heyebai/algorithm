class NodeT {
  public val: number;
  public children: NodeT[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

export default NodeT;
