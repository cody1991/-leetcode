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
var postorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [];

  stack.push({
    visited: false,
    node: root,
  });

  while (stack.length > 0) {
    const rootNode = stack.pop();
    const { visited, node } = rootNode;

    if (visited) {
      result.push(node.val);
    } else {
      stack.push({
        node,
        visited: true,
      });
      node.right &&
        stack.push({
          visited: false,
          node: node.right,
        });
      node.left &&
        stack.push({
          visited: false,
          node: node.left,
        });
    }
  }
  return result;
};
