
const arrayNumeros = [1, 2, 3, 4, 5];
const arrayNumeros2 = [6, 7, 8, 9, 10];
arrayNumeros.push(6)
arrayNumeros2.push(11, 12)
console.log(arrayNumeros,arrayNumeros2)

arrayNumeros2.pop();
console.log(arrayNumeros2)

const arrayConcatenado = arrayNumeros.concat(arrayNumeros2);
console.log(arrayConcatenado)

arrayBusqueda = arrayConcatenado.find(x => x < 3)
console.log(arrayBusqueda)

const respuesta = arrayConcatenado.every(x => x <= 15)
console.log(respuesta)


