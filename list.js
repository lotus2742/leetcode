// var reverseList = function (head) {
//     console.log(head, 'head')
//     if (!head || !head.next) return head
//
//     let next = head.next
//     let resultHead = reverseList(next)
//
//     next.next = head
//     head.next = null
//
//     return resultHead
//
// };
// let arr = [1, 2, 3]
// console.log(reverseList());
//
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
//
// function f() {
//     let arr = [3, 7, 8, 5, 6, 4, 2]
//     let obj = []
//     for (let i = 0; i < arr.length; i++) {
//         let item = new ListNode(arr[i], arr[i + 1])
//         // console.log(JSon)
//         obj.push(item)
//         // console.log(obj)
//     }
//
//     for (let j = 0;j < obj.length;j++) {
//         console.log(obj[j])
//         reverseList(obj[j])
//     }
//
//
// }
//
// console.log(f())


// 链表反转

function reverseList(head) {
    if (!head || !head.next ) return head

    let next = head.next

    let reverseHead = reverseList(next)

    next.next = head

    head.next = null

    return reverseHead
}

// 链表排序

function listSort() {

}

function mergeList(left, right) {

}
