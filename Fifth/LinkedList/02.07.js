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

var getLength = function (node) {
  let len = 0;
  while (node) {
    len++;
    node = node.next;
  }
  return len;
};
var getIntersectionNode = function (headA, headB) {
  const lenA = getLength(headA);
  const lenB = getLength(headB);

  const diff = Math.abs(lenA - lenB);
  let long, short;
  if (lenA > lenB) {
    long = headA;
    short = headB;
  } else {
    long = headB;
    short = headA;
  }
  for (let i = 0; i < diff; i++) {
    long = long.next;
  }
  let result = undefined;
  while (long) {
    if (long === short && result === undefined) {
      result = long;
    } else if (long !== short) {
      result = undefined;
    }
    long = long.next;
    short = short.next;
  }

  return result;
};
