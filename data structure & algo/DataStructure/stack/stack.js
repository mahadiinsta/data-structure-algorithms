class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        return this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}



const stack = new Stack();