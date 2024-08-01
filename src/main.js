

console.log("Spoiler detector:");
var trigger = prompt("Enter the word to censor");
var page = document.body.innerText;

const lines = page.split("\n");
lines.forEach((line) => {
    if(line.toLocaleLowerCase().includes(trigger.toLocaleLowerCase())){
        console.log("Trigger word found!");
    }
});



