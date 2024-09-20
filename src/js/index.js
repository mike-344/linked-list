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
        let current = getHead();
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
       length--
       
    }
    let contains = (value) =>{
        let current = getHead()
        while (current){
           if (current.value === value){
            return true
           }
           current = current.next
           
        }
        return false
    }


    return {append, prepend, size, getHead, getTail, at, toString, pop, contains}

}

function Node(value = null, next = null){
 

return {value, next}
}

let theList = linkedList();

theList.append("the")
theList.append("ab")
theList.append("haha")




console.log(theList.contains("haha"))