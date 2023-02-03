
function removes(){
    red.classList.remove('animation');
    
}

function clearSketch(){
    for (let i = 0; i < boxListen.length; i++){
        boxListen[i].classList.remove('fill');
    }
}

function initializeSketch(){
    for (let i=1; i < 16; i++){
        const row = document.createElement("div");
        row.id = "row" + i;
        row.classList.add("row")
        container.appendChild(row);
        
        for (let j=1; j < 30; j++){
            const column = document.createElement("div");
            column.id= "column" + j;
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}
const container = document.querySelector(".container");
initializeSketch();

const red = document.querySelector(".red")
const boxListen = document.querySelectorAll('.column');


for (let i = 0; i < boxListen.length; i++){
    boxListen[i].addEventListener("mouseover", function(){
        boxListen[i].classList.add(`fill`);
    })
}

const shake = document.querySelector(".shake");

shake.addEventListener("click", ()=>{
    red.classList.add('animation');
    setTimeout(clearSketch, 700)
    setTimeout(removes, 1000)
})

