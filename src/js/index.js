import '../css/style.css'

function linkedList(){
    let head = null;
    let tail = null;
    let length = 0;
    let append = (value) =>{
        let newNode = Node(value)
        if (head === null){
        head = newNode;
        tail = newNode;
        } else{
            tail.nextNode = newNode
            tail = newNode
        }
        length++
    }
    let prepend = (value) => {
        let newNode = Node(value)
        if (head === null){
            head = newNode
            tail = newNode
        } else{
        newNode.nextNode = head;
        head = newNode
        }
        length++;
    }
    let size = () =>{
        return length;
    }
    let getHead = () =>{
        return head;
    }
    let getTail = () =>{
        return tail;
    }
    let at = (index) =>{
        let current = head
        let count = 0
        while(count < index){
            current = current.nextNode
            count++
        }
        return current
    }


    return {append, prepend, size, getHead, getTail, at}

}

function Node(value = null, nextNode = null){
 

return {value, nextNode}
}

let theList = linkedList();
theList.append("the")
theList.append("buh")
theList.append("aha")
theList.prepend("first")
console.log(theList)