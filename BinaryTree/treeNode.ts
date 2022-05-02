class TreeNode {
  public val: number;
  public leftNode: TreeNode | null;
  public rightNode: TreeNode | null;
  constructor(
    val?: number,
    leftNode?: TreeNode | null,
    rightNode?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.leftNode = leftNode === undefined ? null : leftNode;
    this.rightNode = rightNode === undefined ? null : rightNode;
  }
}
