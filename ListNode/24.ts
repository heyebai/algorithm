// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let virtual = new ListNode(0, head);
  let curr = head,
    next = null,
    prev = virtual;
  while (curr.next) {
    // record next
    next = curr.next.next;
    // swap
    prev.next = curr.next;
    curr.next.next = curr;
    curr.next = next;
    prev = curr;
    curr = next;
    if (!curr) {
      break;
    }
  }
  return virtual.next;
}
