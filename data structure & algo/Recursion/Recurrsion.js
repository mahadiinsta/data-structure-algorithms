//Recursive Fibonacci

function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(6))

//Recursive Factorial

function recursiveFibonacci(n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFibonacci(n - 1)
}

//Recursive Binary Search

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length)
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (arr[middleIndex] === target) {
    return middleIndex
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1)
  } else {
    return search(arr, target, middleIndex + 1, rightIndex)
  }
}
