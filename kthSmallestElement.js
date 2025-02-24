const kthSmallest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k - 1);
};
const quickSelect = (nums, low, high, k) => {
  if (low < high) {
    let pivotIndex = partition(nums, low, high);
    if (pivotIndex === k) {
      return nums[pivotIndex];
    } else if (pivotIndex > k) {
      return quickSelect(nums, low, pivotIndex - 1, k);
    } else {
      return quickSelect(nums, pivotIndex + 1, high, k);
    }
  }
  return nums[low];
};
const partition = (nums, low, high) => {
  let pivot = nums[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (nums[j] < pivot) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
  return i + 1;
};

let nums = [2, 3, 1, 20, 15];
let k = 4;
console.log(kthSmallest(nums, k));