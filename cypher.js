//Ask user to input a word or a sentence.
let toEncrypt = prompt(`Please enter the word or sentence you would like to encrypt:

Note: Only letters will change, numbers and all other characters will stay the same.`);

//Function that encrypts user input by shifting the user input forward by 15 letters.
function encrypt (string){
    
    //Empty string used to add values below.
    let encrypted = "";
    
    //For loop that gets the ascii values of every letter from the user input.
    for(let i = 0; i < string.length; i++){
        let letterNum = string.charCodeAt(i);
        
        //The following if and else if statements work with upper case letter's ascii values.
        //If the ascii values are in the range of 65 - 75 then it will move the user input letters 15 letters forward (eg: "A" will becomes "P").
        if(letterNum >= 65 && letterNum <= 75){
            encrypted += String.fromCharCode(letterNum + 15);
        }
        
        //If the ascii values are in the range of 76 - 90 then it will move the user input letter 11 letters backward (eg: "P" will becomes "E").
        //Since the alphabet consist of  26 letters and the promgram has to stay in the same cycle (15 - 26 = -11) will insures that it stays in the alphabetical cycle. 
        else if (letterNum >= 76 && letterNum <= 90){
            encrypted += String.fromCharCode(letterNum - 11);
        }
        
        //The same logic from the if and else if statments above apply to the the following two else if statements, however these statements work with the ascii values of lower case letters.
        else if (letterNum >= 97 && letterNum <= 107){
            encrypted += String.fromCharCode(letterNum + 15);
        }
        
        else if (letterNum >= 108 && letterNum <= 122){
            encrypted += String.fromCharCode(letterNum - 11);
        }
        
        //If user input is not equal to any of the above ascii values then it will print out the user input AS IS. For example: spaces, numbers and punctuation will stay the same.
        else{
            encrypted += string[i];
        }
    }
    //Returns the encrypted word.
    return encrypted;
}

//Prints out the user input in it's encrypted format.
console.log(encrypt(toEncrypt));




/*      ***RESOURCES***

I used the following resource to learn how to change a letter into a number value:
Stack Overflow. 2020. How to convert letters to numbers with Javascript?. [online] Available at: <https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript> [Accessed 23 November 2021].


I used the following resources to help me get a better understanding of the task at hand and to help me understand how the program would work and how to structure it:
Youtube.com. 2017. Javascript Coding Challenge #16: Caesars Cipher (Freecodecamp). [online] Available at: <https://www.youtube.com/watch?v=4mp-6a3vARU&t=500s> [Accessed 23 November 2021].
Youtube.com. 2018. avascript Challenges - Caesars Cipher Algorithm Using Javascript. [online] Available at: <https://www.youtube.com/watch?v=a-IbUyGxewI> [Accessed 23 November 2021].
Codegrepper.com. 2021. javascript caesar cipher Code Example. [online] Available at: <https://www.codegrepper.com/code-examples/javascript/javascript+caesar+cipher> [Accessed 23 November 2021].

I used the following resource to help with the debugging process and to make sure I get the correct outputs:
Techonthenet.com. 2021. ASCII Table. [online] Available at: <https://www.techonthenet.com/ascii/chart.php> [Accessed 23 November 2021].

*/