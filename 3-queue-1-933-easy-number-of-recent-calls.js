var RecentCounter = function () {
  this.count = 0;
  this.array = [];
  this.i = 0;
  this.j = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.array.push(t);
  this.j++;
  while (t - this.array[this.i] > 3000) {
    this.array.unshift();
    this.i++;
  }
  return this.j - this.i;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
