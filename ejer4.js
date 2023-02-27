//4.-Crear una función que recibe 2 argumentos una cadena de texto y un carácter, la función regresa un número que representa el número de veces que se repite el carácter en la cadena dada

const charCounter=(string,character)=>{
    let counter=0;

    for (let i=0; i<string.length; i++){
        if (string[i]===character){
            counter++
        }
    //console.log(counter);
    }

    return counter
 
}

let example=charCounter("Anita lava la tina"," ");
console.log(example);

let example2=charCounter("Anita lava la tina","A");
console.log(example2);

let example3=charCounter("Anita lava la tina","a");
console.log(example3);