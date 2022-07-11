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
A: 5;
B: 3;
var getIntersectionNode = function (headA, headB) {
  let lengthA = 0,
    lengthB = 0;
  let node = headA;
  while (node) {
    lengthA++;
    node = node.next;
  }
  node = headB;
  while (node) {
    lengthB++;
    node = node.next;
  }
  const loopTimes = lengthA > lengthB ? lengthA : lengthB;
  const secondStartIndex = loopTimes - Math.min(lengthB, lengthA);
  let [firstNode, secondNode] =
    lengthA > lengthB ? [headA, headB] : [headB, headA];
  let res = null;
  for (let i = 0; i < loopTimes; i++) {
    if (i >= secondStartIndex) {
      if (firstNode === secondNode && res === null) {
        res = firstNode;
      } else if (firstNode !== secondNode) {
        res = null;
      }
      secondNode = secondNode.next;
    }
    firstNode = firstNode.next;
  }
  return res;
};
