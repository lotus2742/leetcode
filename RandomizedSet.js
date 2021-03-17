/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.setList = []
    this.length = 0

};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const temp = this.setList.findIndex(it => it === val)
    if (temp === -1) {
        this.setList.push(val)
        this.length++
        return true
    } else {
        return false
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const temp = this.setList.findIndex(it => it === val)
    if (temp === -1) {
        return false
    } else {
        this.setList.splice(temp,1)
        this.length--
        return true

    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const random = parseInt(Math.random()*this.length);
    return this.setList[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

 re = new RandomizedSet()
obj = re.remove(0)
console.log(obj)
obj = re.remove(0)
console.log(obj)
obj = re.insert(0)
console.log(obj)
// obj = re.remove(6)
obj = re.getRandom()
obj = re.remove(0)
console.log(obj)
obj = re.insert(0)
console.log(obj)
// obj = re.getRandom()
// console.log(obj)
