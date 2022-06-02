// This is to select the element in the dom used in the loop to make the buttons
const buttonContainer = document.querySelector("#buttoncontainer");

//This is used to make the buttons and then add the symbol for each button.
for (var i = 0; i < 16; i++) {
    const buttonitemnode = document.createElement('button');
    buttonitemnode.id = "buttonitems";
    buttonContainer.appendChild(buttonitemnode);
    if (i === 0) {
        buttonitemnode.innerText = "7";
        console.log(buttonitemnode);
        continue;
    }
    else if (i === 1){
        buttonitemnode.textContent = "8";
        continue;
    }
    else if (i === 2) {
        buttonitemnode.innerText = "9";
        continue;
    }
    else if (i === 3) {
        buttonitemnode.innerText = "➗";
        continue;
    }
    else if (i === 4) {
        buttonitemnode.innerText = "4";
        continue;
    }
    else if (i === 5) {
        buttonitemnode.innerText = "5";
        continue;
    }
    else if (i === 6) {
        buttonitemnode.innerText = "6";
        continue;
    }
    else if (i === 7) {
        buttonitemnode.innerText = "x";
        continue;
    }
    else if (i === 8) {
        buttonitemnode.innerText = "1";
        continue;
    }
    else if (i === 9) {
        buttonitemnode.innerText = "2";
        continue;
    }
    else if (i === 10) {
        buttonitemnode.innerText = "3";
        continue;
    }
    else if (i === 11) {
        buttonitemnode.innerText = "-";
        continue;
    }
    else if (i === 12) {
        buttonitemnode.innerText = "0";
        continue;
    }
    else if (i === 13) {
        buttonitemnode.innerText = "•";
        continue;
    }
    else if (i === 14) {
        buttonitemnode.innerText = "+";
        continue;
    }
    else {
        buttonitemnode.innerText = "=";
        continue;
    }
}
