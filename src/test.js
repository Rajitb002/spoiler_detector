console.log("Tester:")
function trigger_check(trigger,expected){
var count = 0;
var page = document.body.innerText;
const lines = page.split("\n");
lines.forEach((line) => {
    if(line.toLocaleLowerCase().includes(trigger.toLocaleLowerCase())){
        count += 1;
        console.log("Trigger word found!");
    }
});
return count == expected;
}
var pass = 0;
//Test 1 //
// Check 
if(trigger_check("jjk",3)){
    pass += 1;
}

