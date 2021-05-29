# Introduction

无意中看到一个 B 站小姐姐的数据结构与算法系列视频：

[手把手带你刷 Leetcode 力扣｜各个击破数据结构和算法｜大厂面试必备技能【已完结】](https://www.bilibili.com/video/BV1sy4y1q79M)

感觉还是挺不错的，有下面几个原因：

1. 已经完结，不会有催更的烦恼；
2. 循序渐进得带你了解各种常用的数据结构，非常详细；
3. 提供常用的数据结构对应的 LeetCode 题目和解题思路（有时候会是多种思路）；
4. 提供了 Python 和 Java 两种语言讲解数据结构，不过 LeetCode 的视频讲解给的是伪代码，适合各种语言的程序员。

这个项目主要是记录自己是如何使用 JavaScript 语言来解决视频中提到的 LeetCode 题目。

需要注意的是，我的解题方法不一定能和视频的解题方法对应上：因为我都是先自己完成了题目，然后再去看视频讲解，只有觉得视频中的解题思路更好，才会去更新自己的代码。感觉这样是最高效的学习方法。

另外二叉树的三种遍历方式视频中也没有给出对应的代码实现，感兴趣的可以看看我的解题方法（均提供了迭代和递归的代码实现）。

感谢您的阅读。

# Solutions

| Module       | Question Link                                                                              | Question Solution                                                             | Question Level | Date       |
| ------------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | -------------- | ---------- |
| Array        | [485. 最大连续 1 的个数](https://leetcode-cn.com/problems/max-consecutive-ones/)           | [Solution](./solution/1-array-1-easy-485-max-consecutive-ones.js)             | Easy           | 2021-05-24 |
| Array        | [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)                               | [Solution](./solution/1-array-2-easy-283-move-zeroes.js)                      | Easy           | 2021-05-24 |
| Array        | [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)                           | [Solution](./solution/1-array-3-easy-27-remove-element.js)                    | Easy           | 2021-05-24 |
| Link         | [203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)         | [Solution](./solution/2-link-1-easy-203-remove-linked-list-elements.js)       | Easy           | 2021-05-24 |
| Link         | [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)                     | [Solution](./solution/2-link-2-easy-206-reverse-linked-list.js)               | Easy           | 2021-05-24 |
| Queue        | [933. 最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/)            | [Solution](./solution/3-queue-1-933-easy-number-of-recent-calls.js)           | Easy           | 2021-05-25 |
| Stack        | [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)                      | [Solution](./solution/4-stack-1-20-easy-valid-parentheses.js)                 | Easy           | 2021-05-25 |
| Stack        | [496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)          | [Solution](./solution/4-stack-2-496-easy-next-greater-element-i.js)           | Easy           | 2021-05-25 |
| Hash         | [217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)                  | [Solution](./solution/5-hash-1-217-contains-duplicate.js)                     | Easy           | 2021-05-29 |
| Hash         | [389. 找不同](https://leetcode-cn.com/problems/find-the-difference/)                       | [Solution](./solution/5-hash-2-389-find-the-difference.js)                    | Easy           | 2021-05-29 |
| Hash + Stack | [496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)          | [Solution](./solution/5-hash-3-496-easy-next-greater-element-i.js)            | Easy           | 2021-05-29 |
| Set          | [217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)                  | [Solution](./solution/6-set-1-217-contains-duplicate.js)                      | Easy           | 2021-05-29 |
| Set          | [705. 设计哈希集合](https://leetcode-cn.com/problems/design-hashset/)                      | [Solution](./solution/6-set-2-705-design-hashset.js)                          | Easy           | 2021-05-29 |
| Tree         | [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)  | [Solution - 递归](./solution/7-tree-1-144-binary-tree-preorder-traversal.js)  | Easy           | 2021-05-29 |
| Tree         | [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)  | [Solution - 迭代](./solution/7-tree-2-144-binary-tree-preorder-traversal.js)  | Easy           | 2021-05-29 |
| Tree         | [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)    | [Solution - 递归](./solution/7-tree-3-94-binary-tree-inorder-traversal.js)    | Easy           | 2021-05-29 |
| Tree         | [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)    | [Solution - 迭代](./solution/7-tree-4-94-binary-tree-inorder-traversal.js)    | Easy           | 2021-05-29 |
| Tree         | [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/) | [Solution - 递归](./solution/7-tree-5-145-binary-tree-postorder-traversal.js) | Easy           | 2021-05-29 |
| Tree         | [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/) | [Solution - 迭代](./solution/7-tree-6-145-binary-tree-postorder-traversal.js) | Easy           | 2021-05-29 |

# FileName Rules:

Rules

```
${ModuleId}-${ModuleName}-${QuestionIndex}-${QuestionLevel}-${QuestionLeetCodeId}-${QuestionLeetCodeName}
```

Example

```
1-array-1-easy-485-max-consecutive-ones.js
```
