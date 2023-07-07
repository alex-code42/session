const logBTN = document.querySelector('[data-js="console-log"]');
console.log(logBTN);
console.dir(logBTN)

logBTN.addEventListener("click", function(){
    console.log("Hey i was clicked");
});

function add{
    console.log("yes");
}

lightBtn.addEventListener("click", add )