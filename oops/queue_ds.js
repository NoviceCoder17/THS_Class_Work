/*
QUEUE: FIFO and LILO
Queue: enqueue, dequeue, front, rear(end), isempty, length
*/

class queue{
    constructor(){
        this.queue = []   
    }
    enqueue(ele){            // Queue method
        this.queue.unshift(ele)   
    }
    dequeue(){
        this.queue.pop()    // First element will be removed 
    }
    front(){
        if(this.isEmpty()){
            console.log(`stack is empty, cannot remove`)
        }
        else{
            console.log(this.queue[this.queue.length-1])
        }  
    }
    rear(){
        if(this.isEmpty()){
            console.log(`stack is empty, cannot remove`)
        }
        else{       
        console.log(this.queue[0])
        }
    }
    isEmpty(){
        return this.queue.length ==0
    }
    length(){
        return this.queue.length 
    }
}
const Queue = new queue
Queue.enqueue(1)
Queue.enqueue(2)
Queue.enqueue(3)
Queue.enqueue(8)
Queue.enqueue(12)
console.log(Queue)
Queue.dequeue()
console.log(Queue)
Queue.front()
Queue.rear()
console.log(Queue.isEmpty())
console.log(Queue.length())
