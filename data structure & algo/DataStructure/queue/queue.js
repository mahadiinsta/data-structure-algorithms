class Queue {
  constructor() {
    this.items = []
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
  isEmpty() {
    return this.items.length === 0
  }
  peek() {
    if (this.items.length > 0) {
      return this.items[0]
    }
    return null
  }
  size() {
    return this.items.length
  }
  print() {
    console.log(this.items.toString())
  }
}
