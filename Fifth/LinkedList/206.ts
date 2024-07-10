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

function reverseList(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0, head);
  const curr = head;
  while (curr && curr.next) {
    const tempNode = curr.next;
    curr.next = curr.next.next;
    tempNode.next = dummyHead.next;
    dummyHead.next = tempNode;
  }
  return dummyHead.next;
}
