// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const convertListToArray = function (list) {
    let numArray = [];
    while (list) {
        numArray.push(list.val);
        list = list.next
    }
    return numArray;
}

const convertArrayToList = function (numArray) {
    let linkedList = new ListNode();
    let current = linkedList

    numArray.forEach((num, i) => {
        current.next = new ListNode(num);
        current = current.next
    })

    return linkedList.next;
}

var addTwoNumbers = function (l1, l2) {
    if (l1 !== null || l2 !== null) {
        const num1 = BigInt(convertListToArray(l1).reverse().join(''));
        const num2 = BigInt(convertListToArray(l2).reverse().join(''));

        const result = (num1 + num2).toString().split('').reverse().map(num => parseInt(num));

        return convertArrayToList(result)
    }
}


