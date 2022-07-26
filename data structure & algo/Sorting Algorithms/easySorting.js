//this may be some sort of sorting algo , i dont know which
for (let i = 0; i < array.length - 1; i++) {
  let smallest = array[i]
  let smallestIndex = i
  for (let j = i; j < array.length; j++) {
    if (array[j] < smallest) {
      smallest = array[j]
      smallestIndex = j
    }
  }
  let temp = array[i]
  array[i] = smallest
  array[smallestIndex] = temp
}
