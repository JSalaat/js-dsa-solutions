/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let myList = new ListNode();
    let ref = myList;

    while(list1 && list2){
        if(list1.val > list2.val){
            myList.next = list2;
            list2 = list2.next;
        }
        else{
            myList.next = list1;
            list1 = list1.next;
        }
        myList = myList.next
    }

    myList.next = list1 || list2;

    return ref.next;
    // return [...list1, ...list2].sort((a,b)=>a-b)

};
