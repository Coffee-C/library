/**
 * 斐波那契数列，常见的题目为算出多少种结果
 * https://leetcode.cn/problems/fibonacci-number/solutions/545049/fei-bo-na-qi-shu-by-leetcode-solution-o4ze/
 */

/**
 * 公式递归法
 * fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
 * @param {number} n
 * @return {number}
 */
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */

// 首先定义一个缓存数组，用来存放求出来的Fib(k)的值 k = 2, ... , n
let cache = [];

const fib = function (n) {
  // 1. 如果缓存中已经有这个值了，就直接返回，不要再递归求值了
  if (cache[n] !== undefined) return cache[n];
  // 两个初始值
  if (n <= 1) return n;
  // 递归求得fib(n)
  const v = (fib(n - 1) + fib(n - 2)) % 1000000007;
  // 将fib(n)保存在cache[n]的位置
  cache[n] = v;
  // 返回fib(n)
  return v;
};

/**
 * 计算斐波那契数列的第 n 个数 （动态规则法）
 * @param {number} n - 要计算的斐波那契数列的索引
 * @returns {number} - 第 n 个斐波那契数
 */
const fibonacci2 = (n) => {
  if (n <= 1) return n;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
};

console.log(fibonacci2(10));
