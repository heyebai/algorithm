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
  const fakeHead = new ListNode(0, head);
  let node = head;
  let prev = fakeHead;
  while (node && node.next) {
    const temp = node.next.next;
    node.next.next = node;
    prev.next = node.next;
    node.next = temp;
    prev = node;
    node = temp;
  }
  return fakeHead.next;
}
