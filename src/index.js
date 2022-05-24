function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let middle = Math.floor(arr[left] + arr[right]) / 2 - 1;
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
