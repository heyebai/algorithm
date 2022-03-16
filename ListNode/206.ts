// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 *
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let node: ListNode | null = head;
  let lastNode: ListNode | null = null;
  let nextNode: ListNode | null = null;
  while (node.next) {
    nextNode = node.next;
    node.next = lastNode;
    lastNode = node;
    node = nextNode;
  }
  node.next = lastNode;
  return node;
}
