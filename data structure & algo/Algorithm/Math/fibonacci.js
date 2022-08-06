//My solution
function fibonacci(n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    i < 2 ? arr.push(i) : arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr
}

//solution code evolution

function fibonacci2(n) {
  const arr = [0, 1]
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr
}
