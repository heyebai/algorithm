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

const getLength = (node) => {
  let length = 0;
  let curr = node;
  while (curr) {
    length++;
    curr = curr.next;
  }
  return length;
};
var getIntersectionNode = function (headA, headB) {
  const aLength = getLength(headA);
  const bLength = getLength(headB);
  let [short, long] = aLength > bLength ? [headB, headA] : [headA, headB];
  const diff = Math.abs(aLength - bLength);
  for (let i = 0; i < diff; i++) {
    long = long.next;
  }
  let node = null;
  while (long) {
    if (long === short && node === null) {
      node = long;
    } else if (long !== short) {
      node = null;
    }
    long = long.next;
    short = short.next;
  }
  return node;
};
