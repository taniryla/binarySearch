function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (arr[left] < arr[right]) {
    let middle = (arr[left] + arr[right]) / 2;
    if (middle === val) {
      return middle;
    } else if (middle > val) {
      left++;
    } else if (middle < val) {
      right++;
    }
  }
}
