//Usning normal for loop
const getMinMax2 = (arr) => {
  let maxElement = -Infinity;
  let minElement = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
    if (minElement > arr[i]) {
      minElement = arr[i];
    }
  }
  return [minElement, maxElement];
};

//Using javascipt Math method and spread operator
class Solution {
  getMinMax(arr) {
    let minElement = Infinity;
    let maxElement = -Infinity;
    minElement = Math.min(...arr);
    maxElement = Math.max(...arr);
    return [minElement, maxElement];
  }
}
let arr = [3, 2, 1, 56, 10000, 167];
console.log(getMinMax(arr));