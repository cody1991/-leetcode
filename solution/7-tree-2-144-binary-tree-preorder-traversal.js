/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const stack = [];
  const result = [];

  // 推入头部
  stack.push(root);
  while (stack.length > 0) {
    const rootNode = stack.pop();
    result.push(rootNode.val);
    // 堆栈的原因，需要先放入右边的节点，后放入左边的节点，那么会先处理左边的节点，再处理右边的节点
    rootNode.right && stack.push(rootNode.right);
    rootNode.left && stack.push(rootNode.left);
  }

  return result;
};
