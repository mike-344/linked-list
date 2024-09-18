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
            tail.next = newNode
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
        newNode.next = head;
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
            current = current.next
            count++
        }
        return current
    }
    let toString = () =>{
        let str = ''
        let current = getHead()
        while (current){
            str += `( ${current.value} ) ->`
            current = current.next
        }
        str += ` null`
        return str;
    }


    return {append, prepend, size, getHead, getTail, at, toString}

}

function Node(value = null, next = null){
 

return {value, next}
}

let theList = linkedList();
theList.append("the")


console.log(theList.at(0))