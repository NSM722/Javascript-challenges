/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string.

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(sentence){
    // option 1
    // return sentence.split("").reverse().join("");
    
    // option 2
    // Looping backwards from the last index
    let newSentence = ""
    for(let i = sentence.length - 1; i >= 0; i--) {
        newSentence += sentence[i]
    }
    return newSentence
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(messages){
    return messages.map(message => {
        return reverseString(message)
    }).join(' ')
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
