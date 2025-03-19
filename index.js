const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOneEl = document.getElementById("password-result1")
let passwordTwoEl = document.getElementById("password-result2")
let messageEl = document.getElementById("message-error")
let passwordLengthEl = document.getElementById("password-length")
let numbersEl = document.getElementById("numbers")
let symbolsEl = document.getElementById("symbols")
let randomPassword1 = ""
let randomPassword2 = ""
let isGenerated = false

document.addEventListener("DOMContentLoaded", function() {
    passwordOneEl.addEventListener ("click", function() {
    copyPassword1()
    })

    passwordTwoEl.addEventListener ("click", function() {
    copyPassword2()
    })
})

function getRandomCharacter() {
    let possibleCharacters = letters
    if (numbersEl.checked && !symbolsEl.checked) {
        possibleCharacters = possibleCharacters.concat(numbers)
    } else if (symbolsEl.checked && !numbersEl.checked){
        possibleCharacters = possibleCharacters.concat(symbols)
    } else if (symbolsEl.checked && numbersEl.checked) {
       possibleCharacters = possibleCharacters.concat(numbers, symbols) 
    } 
    let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    return possibleCharacters[randomIndex]
}

function generatePassword() {
    let randomPassword1 = ""
    let randomPassword2 = ""
    let passwordLength = passwordLengthEl.value
    
    if (passwordLength < 6 || passwordLength > 20) {
        messageEl.textContent = "Passwords must have 6 to 20 characters"
    } else if (passwordLength.value = "") {
        messageEl.textContent = "Password length must be chosen, and should be 6 and 20 characters"
    } else {  
    
    isGenerated = true;
    messageEl.textContent = ""
    passwordLength = passwordLengthEl.value
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter()
        randomPassword2 += getRandomCharacter()
    }
    passwordOneEl.textContent = randomPassword1
    passwordTwoEl.textContent = randomPassword2
    
    }
}


function clearPasswords() {
    randomPassword1 = ""
    randomPassword2 = ""
    passwordOneEl.textContent = randomPassword1
    passwordTwoEl.textContent = randomPassword2
    isGenerated = false

}

function copyPassword1() {
    let text1 = passwordOneEl.textContent;
    textarea = document.createElement("textarea");
    textarea.value = text1;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    let successful = document.execCommand("copy");
    if (successful) {
        alert("Copied to clipboard!");
    } else {
        alert("Failed to copy text.");
    }
    document.body.removeChild(textarea);
    
}

function copyPassword2() {
    let text2 = passwordTwoEl.textContent;
    textarea = document.createElement("textarea");
    textarea.value = text2;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    let successful = document.execCommand("copy");
    if (successful) {
        alert("Copied to clipboard!");
    } else {
        alert("Failed to copy text.");
    }
    document.body.removeChild(textarea);
    
}


    
    

