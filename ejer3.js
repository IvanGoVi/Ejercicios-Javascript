//3.- Crear una función que recibe un string con multiples palabras y regresa únicamente la palabra mas larga en la oración

/*
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
*/


//Resulto por Isra

let text="este es un texto con muchas palabras de mucha longitud"

const getLongestWords=(textToEvaluate)=>{
    let textToArray=textToEvaluate.split(" ");
    let longestWord="";
    let longestWordsArray=[];
    for (let i=0; i<textToArray.length; i++){
        if(textToArray[i].length>longestWord.length){
            longestWord=textToArray[i];
        }
    }
    console.log(longestWord.length);
    let largestLength=longestWord.length;

    for (let i=0; i<textToArray.length; i++){
        textToArray[i].length===largestLength
        ? longestWordsArray.push(textToArray[i])
        :null;
    }

    return longestWordsArray.length>1
    ? `Las palabras mas largas de este texto son: ${longestWordsArray.join()}`
    : `La palabra mas larga de este texto es: ${longestWordsArray[0]}`;

};

let result=getLongestWords(text);
console.log(result);
