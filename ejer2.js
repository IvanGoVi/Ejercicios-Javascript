//2.-Crear una función que recibe un string con varias palabras y cambia a mayúscula la primer letra de cada palabra

const changeToUpper=(string)=>{
    let splitString=string.split(" ");
    //console.log(splitString);
    let upperString=[];
    for (let i=0; i<splitString.length; i++){
        let capitalLetter=splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1);
        upperString.push(capitalLetter);
        //console.log(upperString);
    }
    
    return upperString.join(" ");
}

let example=changeToUpper("Anita lava la tina");
console.log(example);