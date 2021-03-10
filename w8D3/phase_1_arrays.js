/*
Array.prototype.includes = uniq(array) {
  let uniqValuesArray = [];
  array.for (let i = 0; i < array.length; i++) {
    if (!uniqValuesArray.includes(array[i])) {
     uniqValuesArray.push(array[i]); }; 
    };
    uniqValuesArray;
}
*/
([1,2,2,3,3,3].uniq() => [1,2,3])

Array.prototype.includes = uniq() {
  const uniqValuesArray = [];
  for (let i = 0; i < this.length; i++) {
    if (!uniqValuesArray.includes(this[i])) {
     uniqValuesArray.push(this[i]); }; 
    };
    uniqValuesArray;
  }

