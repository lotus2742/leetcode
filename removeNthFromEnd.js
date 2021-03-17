/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val
    this.next = null
}

var removeNthFromEnd = function (head, n) {
    let current = head
    let count = 0
    while (current) {
        count++
        current = current.next
    }
    count = count - n
    head = {next: head}
    current = head
    while (count != 0) {
        current = current.next
        count--
    }
    current.next = current.next.next
    return head.next
}


var a = [1, 2, 3, 4, 5]
console.log(removeNthFromEnd(a, 5))
