/**
 * @param {number[]} prices
 * @return {number}
 * 思路： ..
 */
var maxProfit = function(prices) {
    let number = 0;
    let index = 0
   for (let i = index+1;i < prices.length;i++) {
       let max = prices[index+1]
       if (prices[i] > max) {
           max = prices[i]
       }
       let profit = max - prices[index]
       if (profit > number) {
           number = profit
       }
       index++
   }
    return number



};

console.log(maxProfit([1,2,3]))
