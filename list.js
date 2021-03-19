var reverseList = function (head) {
    if (!head || !head.next) return head

    let next = head.next
    let resultHead = reverseList(next)

    next.next = head
    head.next = null

    return resultHead

};
let arr = [1,2,3]
console.log(reverseList());

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
