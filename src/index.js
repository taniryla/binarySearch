function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (arr[left] < arr[right]) {
    let middle = Math.floor(arr[left] + arr[right]) / 2;
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] > val) {
      left++;
    } else if (arr[middle] < val) {
      right++;
    } else {
      return -1;
    }
  }
}
