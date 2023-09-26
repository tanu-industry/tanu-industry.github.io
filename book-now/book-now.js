let textArea = document.getElementById("message_input");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 150;

let counter = 0;

const countCharacters = () => {
    //No. of chars entered into text area
    let numOfEnteredChars = textArea.value.length;
    // No. of chars left
    counter = maxNumOfChars - numOfEnteredChars;
    // Display counter
    characterCounter.textContent = counter;
};

// Listen everytime a character is entered in textarea
textArea.addEventListener("input", countCharacters);



