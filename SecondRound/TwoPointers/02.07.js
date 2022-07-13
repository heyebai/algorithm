/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let node = headA,
    lengthA = 0,
    lengthB = 0;
  while (node) {
    node = node.next;
    lengthA++;
  }
  node = headB;
  while (node) {
    node = node.next;
    lengthB++;
  }
  let [long, short] = [Math.max(lengthB, lengthA), Math.min(lengthB, lengthA)];
  let diff = long - short;
  let [longNode, shortNode] = [null, null];
  if (long === lengthB) {
    [longNode, shortNode] = [headB, headA];
  } else {
    [longNode, shortNode] = [headA, headB];
  }
  let res = null;
  for (let i = 0; i < long; i++) {
    if (i > diff - 1) {
      if (longNode === shortNode && res === null) {
        res = longNode;
      } else if (longNode !== shortNode) {
        res = null;
      }
      shortNode = shortNode.next;
    }
    longNode = longNode.next;
  }
  return res;
};
