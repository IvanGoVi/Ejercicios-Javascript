//3.- Crear una función que recibe un string con multiples palabras y regresa únicamente la palabra mas larga en la oración

const longestWord=(string)=>{
    let splitString=string.split(" ");
    let longestWord="";
    for (let i=0; i<splitString.length; i++){
        if (longestWord.length<splitString[i].length){
            longestWord=splitString[i];
        }
        //console.log(longestWord);
    }   
    return longestWord;
}

let example=longestWord("Anita lava la tina grandisima");
console.log(example);