var jspy = {
  count: 0,
  incrementCount: function () {
    this.count++;
    return this.count;
  },
  decrementCount: function () {
    this.count--;
  },
  getCount: function () {
    return this.count;
  },
};
console.log(jspy.incrementCount());
