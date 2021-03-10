/*
Array.prototype.uniq = function(array) {
  let uniqValuesArray = [];
  array.for (let i = 0; i < array.length; i++) {
    if (!uniqValuesArray.includes(array[i])) {
     uniqValuesArray.push(array[i]); }; 
    };
    uniqValuesArray;
}
*/
// function Array(arr) {
//   this.arr = [1, 2, 2, 3, 3, 3]
// };

Array.prototype.uniq = function () {
  let uniqValuesArray = [];
  for (let i = 0; i < this.length; i++) {
    if (!uniqValuesArray.includes(this[i])) {
     uniqValuesArray.push(this[i]); }; 
    };
    return uniqValuesArray;
  console.log(this)
  };

console.log([1, 2, 2, 3, 3, 3].uniq())


