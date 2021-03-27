//Homework-------------------------------------------------------------

//1
let n = 2   //turn into a function 
const sum = (n * (n+1)) / 2;
console.log(sum);

const sumFunction = (num) => {
    let answer = 0;
    for( let i = 1; i <= num; i++ ){
        answer +=i 
    }
    return answer;
} 
console.log(sumFunction(5));



//2
const numOfSyllables = (str) => {
    let count = 1;
    for (let syllables of str) {
        if (syllables = 'la') {   //how come "==" or  "===" doesnt work?
            count++
        }
    } 
    return count;
}
console.log(numOfSyllables("Lalalalalalala"));



const howManySyllables = (str) => {
    let count = 0;
    for(let wordlength of str) {
        if (wordlength.length <= 2 ){
        //increase a counter
            count++
        }
    }   
    return count;
}
// Uncomment to test: 
console.log(howManySyllables("lalala"));


const syllableCount = (str) => {
    str = str.toLowerCase(); 
    let firstLetter = str[0]; //captures the first letter
    let count = 0;             //this confirms that the first letter of the syllable matches
    for (let letter of str){
        if(letter == firstLetter) {
            count++;
    } 
}
    return count;
} 
console.log(syllableCount("Lalalalalalala"));
//3 
// let num =3;
// const addTo = (num) => {
//     return num + (num >= num);
// }
// console.log(typeof(num));

//4

let str1 = "computer";//set this outside 
for (let i=0; i < str1.length; i++){
    console.log(str1[i]);
}

// console.log


//5 
let str = "how are you?"
for (let i=0; i < str.length; i++){
if (letter[i] == letterr[i].toUpperCase()){
    upperCount++
}else if {

}

}
