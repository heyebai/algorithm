// Given two (singly) linked lists, determine if the two lists intersect. Return the inter­ secting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

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
  // length of A
  let lengthA = 0,
    lengthB = 0;
  let tempA = headA,
    tempB = headB,
    tempLA,
    tempLB;
  while (tempA) {
    tempA = tempA.next;
    lengthA++;
  }
  while (tempB) {
    tempB = tempB.next;
    lengthB++;
  }

  if (lengthA < lengthB) {
    [tempA, tempLA] = [headB, lengthB];
    [tempB, tempLB] = [headA, lengthA];
  } else {
    [tempA, tempLA] = [headA, lengthA];
    [tempB, tempLB] = [headB, lengthB];
  }
  let i = tempLA - tempLB;
  while (i-- > 0) {
    tempA = tempA.next;
  }

  while (tempA && tempA !== tempB) {
    tempA = tempA.next;
    tempB = tempB.next;
  }
  return tempA;
};
