function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val) {
    } else if (arr[middle] > val) {
      middle - 1 = right;
    } else {
      middle = left + 1;
  }
  return -1;
}
