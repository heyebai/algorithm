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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;
  let lastNode = head,
    currNode = head;
  while (currNode) {
    if (currNode.val === val) {
      if (lastNode) {
        lastNode.next = currNode.next;
      }
    } else {
      lastNode = currNode;
    }
    currNode = currNode.next;
  }
  return head.val === val ? head.next : head;
}

function removeElements1(head: ListNode | null, val: number): ListNode | null {
  const temp = new ListNode(0, head);
  let prevNode = temp;
  while (prevNode.next) {
    if (prevNode.next.val === val) {
      prevNode.next = prevNode.next.next;
    } else {
      prevNode = prevNode.next;
    }
  }
  return temp.next;
}
