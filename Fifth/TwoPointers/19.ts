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
  if (!head) return null;
  const dummyHead = new ListNode(0, head);
  let index = 1,
    length = 0;
  let current = head;
  let node = dummyHead;
  while (current) {
    if (index > n) {
      node = node.next;
    }
    length++;
    index++;
    current = current.next;
  }
  if (n > length) return head;
  node.next = node.next.next;
  return dummyHead.next;
}
