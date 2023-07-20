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
  let aLength = 0,
    bLength = 0,
    node = headA;
  while (node) {
    aLength++;
    node = node.next;
  }
  node = headB;
  while (node) {
    bLength++;
    node = node.next;
  }
  let [long, short] = aLength > bLength ? [headA, headB] : [headB, headA];
  let n = Math.abs(aLength - bLength);
  while (n--) {
    long = long.next;
  }
  let res = null;
  while (long) {
    if (long === short && res === null) {
      res = long;
    }
    if (long !== short) res = null;
    long = long.next;
    short = short.next;
  }
  return res;
};
