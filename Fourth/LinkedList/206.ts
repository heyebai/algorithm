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
// 0->1->2->3
// 0->2->1->3
// 0->3->2->1
function reverseList(head: ListNode | null): ListNode | null {
  let curr = head,
    next = curr?.next;
  if (!curr || !next) return head;
  const dummyHead = new ListNode(0, head);
  while (next) {
    const tempHead = dummyHead.next;
    const tempNext = next.next;
    dummyHead.next = next; //0->2->3 1
    next.next = tempHead; //0->2->1 3
    curr.next = tempNext;
    next = tempNext;
  }
  return dummyHead.next;
}
