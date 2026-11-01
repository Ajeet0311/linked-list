class Node{
    constructor(){
        this.value = null;
        this.nextNode = null;
    }
}

export class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){

        const newNode = new Node();
        newNode.value = value;

        if (this.tail === null){
            this.head = newNode;
        }
        else{
            this.tail.nextNode = newNode;
        }

        this.tail = newNode;
    }

    prepend(value){

        const newNode = new Node();
        newNode.value = value;

        if (this.head === null){
            this.tail = newNode;
        }
        else{
            newNode.nextNode = this.head;
        }
        
        this.head = newNode;
    }

    toString(){

        let curNode = this.head;
        let str = "";

        while (curNode !== null){
            str += `(${curNode.value}) -> `;
            curNode = curNode.nextNode;
        }

        str += "null";
        return str;
    }
}