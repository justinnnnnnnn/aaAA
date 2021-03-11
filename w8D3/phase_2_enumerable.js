function callback(el) {
  console.log(el + 1);
};

Array.prototype.myEach = function () {

  this.forEach(el => callback(el));
  return this
}

console.log([1, 2, 3,4].myEach());
