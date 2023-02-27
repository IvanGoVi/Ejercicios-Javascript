//1.-Crear una función que recibe un string y retorna true si la palabra dada es un palíndromo y false si no lo es

const isPalindrome=(string)=>{
    let cleanString=string.toLowerCase().replace(/\s/g,"");
   // console.log(cleanString);
    let reversedString=cleanString.split("").reverse().join("");
   // console.log(reversedString);
    return cleanString===reversedString?true:false; 
}

let phrase=isPalindrome("Anita lava la tina");
console.log(phrase);

let phrase2=isPalindrome("No es palindromo");
console.log(phrase2);