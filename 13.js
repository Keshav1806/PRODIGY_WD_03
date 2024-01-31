let turn = "X";
let gamestatus= false;
let inbox= document.querySelector(".in-box.targetted");
function changeturn(event) {
    if (turn === "X") {
        event.currentTarget.style.color="white";
        return "0";
    }
    else {
        event.currentTarget.style.color="gray";
        return "X";
    }
}

// Game logic

let boxes = document.getElementsByClassName("in-box");
Array.from(boxes).forEach(e => {
    let boxtext = e.querySelector(".info");
    e.addEventListener("click", (event) => {
        if (boxtext.innerHTML === "") {
            boxtext.innerHTML = turn;
            turn = changeturn(event);
            document.getElementById("changeturn").innerHTML = "Turn for " + turn;
            if(gamestatus===true){
                alert("cant put any more elements because "+ turn+ " won")
            }
            checkwin();
        }
        else {
            alert("cant put another elelement in this box")
        }
    })
})

// reset button logic 

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    Array.from(boxes).forEach(e => {
        let boxtext = e.querySelector(".info");
        boxtext.innerHTML = "";
        turn= "X";
        document.getElementById("changeturn").innerHTML = "Turn for "+ turn;
    })
    gamestatus= false;
    let line= document.getElementById("line")
    line.style.display="none";
    line.classList.remove("line012", "line345", "line678", "line036", "line147", "line258", "line048", "line246")
})

//win logic

function checkwin(){
    let boxtext= document.getElementsByClassName("info");
    let line= document.getElementById("line");
    let win = [
        [0,1,2], 
        [3,4,5], 
        [6,7,8], 
        [0,3,6], 
        [1,4,7],  
        [2,5,8], 
        [0,4,8],  
        [2,4,6]   
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML===boxtext[e[2]].innerHTML) && boxtext[e[0]].innerHTML!=""){
            document.getElementById("changeturn").innerHTML = boxtext[e[1]].innerHTML+ " Won";  
            gamestatus= true;
            line.style.display="block";
            if(e[0]===0 && e[1]===1 && e[2]===2){
                line.classList.add("line012");
            }
            else if(e[0]===3 && e[1]===4 && e[2]===5){
                line.classList.add("line345");
            }
            else if(e[0]===6 && e[1]===7 && e[2]===8){
                line.classList.add("line678");
            }
            else if(e[0]===0 && e[1]===3 && e[2]===6){
                line.classList.add("line036");
            }
            else if(e[0]===1 && e[1]===4 && e[2]===7){
                line.classList.add("line147");
            }
            else if(e[0]===2 && e[1]===5 && e[2]===8){
                line.classList.add("line258");
            }
            else if(e[0]===0 && e[1]===4 && e[2]===8){
                line.classList.add("line048");
            }
            else if(e[0]===2 && e[1]===4 && e[2]===6){
                line.classList.add("line246");
            }
        }
    })
}