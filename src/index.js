function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val && left < right) {
    if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
 if (arr[middle] {
   return middle;
 } else {
   return -1;
}
