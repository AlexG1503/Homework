
//Para clase Personas
class Persona {
    constructor(nombre, tiempo_Llegada) {
        this.nombre = nombre;
        this.tiempo_Llegada = tiempo_Llegada;
    }
}
//La clase de la cola

class Cola {
    constructor() {
        this.Cola = [];
    }

    enqueue(element) {
        this.Cola.push(element);
        return this.Cola;
    }

    dequeue() {
        return this.Cola.shift();
    }

    peek() {
        return this.Cola[0];
    }

    size() {
        return this.Cola.length;
    }

    isEmpty() {
        return this.Cola.length === 0;
    }

    print() {
        return this.Cola;
    }
}

const queue = new Cola();
queue.enqueue(new Persona("Alex", new Date())); 
queue.enqueue(new Persona("Valde", new Date())); 
queue.enqueue(new Persona("Cristian", new Date())); 
queue.enqueue(new Persona("Alirio", new Date())); 
queue.enqueue(new Persona("Cristina", new Date())); 

console.log(queue.print());


const primeraP = queue.dequeue();
console.log("Primera persona:", primeraP);

const siguiente = queue.peek();
console.log("siguiente persona:", siguiente);

console.log("Tamanio de Queue:", queue.size());

console.log("esta el queue vacio?", queue.isEmpty());