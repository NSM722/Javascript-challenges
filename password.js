/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
const password2 = "aabbccb1212"

function removeDuplicateChars(chars) {
    // option 1
    // initialize an empty string of unique characters
    /** 
     * 
    let uniqueChars = ''

    // loop through the characters of the password

    for (let i = 0; i < chars.length; i++) {
        // checking if each character is included in the
        if (!uniqueChars.includes(chars[i])) {
            // string of characters and if not concatenate the
            // current character with the new string 
            uniqueChars += chars[i]
        }
    }
    return uniqueChars */

    let charsArr = chars.split('')
    let uniqueChars = new Set(charsArr)
    return [...uniqueChars.keys()].join('')
}

console.log(removeDuplicateChars(password));
console.log(removeDuplicateChars(password2))
