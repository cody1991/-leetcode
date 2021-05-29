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
var inorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  stack.push({
    node: root,
    visited: false,
  });

  while (stack.length > 0) {
    const rootNode = stack.pop();
    const { visited, node } = rootNode;

    if (visited) {
      result.push(node.val);
    } else {
      node.right &&
        stack.push({
          node: node.right,
          visited: false,
        });
      stack.push({
        node,
        visited: true,
      });
      node.left &&
        stack.push({
          node: node.left,
          visited: false,
        });
    }
  }

  return result;
};
