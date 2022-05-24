function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left < right) {
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] > val) {
      middle = right;
      left++;
    } else if (arr[middle] < val) {
      middle = left;
      right++;
    } else {
      return -1;
    }
  }
}
