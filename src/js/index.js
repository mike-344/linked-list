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
    let pop = () =>{
       let current = getHead()
       while(current.next !== tail){
        current = current.next
       }
       current.next = null
       tail = current
    }


    return {append, prepend, size, getHead, getTail, at, toString, pop}

}

function Node(value = null, next = null){
 

return {value, next}
}

let theList = linkedList();



theList.pop()


console.log(theList.toString())