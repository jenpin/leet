/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
         this.val = val;
        this.next = null;
    }

function (val,next) {
        this.val = val;
       this.next = next;
}

var addTwoNumbers = function(l1, l2) {
    var first="";
    var two="";
    console.log(l1.next,l2.next)
    while(l1.next && l2.next){
        first= first+String(l1.val)
        two=two+String(l2.val)
        l1=l1.next
        l2=l2.next
    }
    first= parseInt(first)
    two=parseInt(two)
    var result = first+two
    result = String(result).reverse()
    var resultList=[...result]
    var a =resultList.map(i =>
        ListNode(i)
    )
        return a;
};

addTwoNumbers(ListNode(1),ListNode(2))
