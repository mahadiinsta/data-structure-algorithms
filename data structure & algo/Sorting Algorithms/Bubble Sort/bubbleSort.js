function bubbleSort(array) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

// BIG O -  - O(n^2)   Because its a nested loop
