/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;
  const result = new ListNode();
  result.next = head;
  pre = result;

  while (head) {
    if (head.val === val) {
      pre.next = head.next;
      head = head.next;
    } else {
      pre = pre.next;
      head = head.next;
    }
  }

  return result.next;
};
