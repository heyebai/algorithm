// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let len = 1;
    let startKNode = head,
        endKNode = head,
        node = head;
    while (node.next) {
        len += 1;
        node = node.next;
    }
    for (let i = 1; i < k; i++) {
        startKNode = startKNode.next;
    }
    const endIndex = len - k;
    for (let i = 0; i < endIndex; i++) {
        endKNode = endKNode.next;
    }
    const temp = endKNode.val;
    console.log(startKNode.val, endKNode.val);
    endKNode.val = startKNode.val;
    startKNode.val = temp;

    return head;
};

var swapNodes = function (head, k) {
    let node = head,
        start = head,
        end = head;
    let index = 1;
    while (node.next) {
        if (index < k) {
            start = start.next;
        } else {
            end = end.next;
        }
        node = node.next;
        index++;
    }
    const temp = end.val;
    end.val = start.val;
    start.val = temp;
    return head;
};
