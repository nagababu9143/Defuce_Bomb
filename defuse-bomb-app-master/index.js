let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");


let coutdown = 10;
let interValId = setInterval(function() {
    coutdown -= 1;
    timerEl.textContent = coutdown;
    if (coutdown === 0) {
        timerEl.textContent = "Boom!!";
        clearInterval(interValId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let defuseText = defuserEl.value;
    if (defuseText === "defuse" && event.key === "Enter" && coutdown !== 0) {
        timerEl.textContent = "You Did It!!!";
        clearInterval(interValId);
    }
});