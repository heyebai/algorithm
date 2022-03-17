// Given the head of a linked list, remove the nth node from the end of the list and return its head.

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return head;
  }
  let index: number = 1;
  let virtual: ListNode = new ListNode(0, head);
  let prev: ListNode | null = virtual;
  let next: ListNode | null = null;
  let node: ListNode | null = head;
  while (node) {
    if (index === n) {
      next = head.next;
    } else if (index > n) {
      next = next.next;
      prev = prev.next;
    }
    node = node.next;
    index++;
  }
  prev.next = next;
  return virtual.next;
}
