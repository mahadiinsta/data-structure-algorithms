//Binary Search

/*  Divides the array in half. Checks if the middle element is bigger or smaller than the target elemenet.
 if bigger searches from the left side or if smaller then from the right side. Until the middle item is 
the target element it will divide and do the same procedure.
*/

function binarySearch(array, target) {
  let leftIndex = 0
  let rightIndex = array.length - 1
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === array[middleIndex]) {
      return middleIndex
    }
    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}
