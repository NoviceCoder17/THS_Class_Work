// In stacks we cannot remove any element we want unlike array(we use splice, slice)
// Removing ele in stack = peak(top most ele in the stack which can be possibly removed)
/* Common operation 
1. Adding element in the stack(push)
2. remove element in the stack.(pop)
3. display the peak in the stack(peak)
4. Stack isempty
5. length of the stack
*/
//// Make sure LIFO, FILO works

//STACK DATA STRUCTURE//
class Stack{
    constructor(){
        this.stack = []  // we do not have a stack 
    }
    push(ele){            // stack method
        this.stack.push(ele)   // we cannot use unshift with push
    }

    pop(){
        if(this.isEmpty()){
            console.log(`stack is empty, cannot pop`)
        }
        else{
            this.stack.pop()
        }
       
    }
    peak(){
        if(this.isEmpty()){
            console.log(`stack is empty`)
        }
        else{
        console.log(this.stack[this.stack.length-1])}
    }

    isEmpty(){
        return this.stack.length ==0
    }
}

// Make sure LIFO, FILO works

const stack = new Stack();
stack.push(100)
stack.push(101)
stack.push(102)
stack.push(103)
console.log(stack)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack)
//stack.peak()
console.log(stack.isEmpty())
