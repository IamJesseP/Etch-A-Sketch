function initializeSketch(){
    for (let i=1; i < 40; i++){
        const row = document.createElement("div");
        row.id = "row" + i;
        row.classList.add("row")
        container.appendChild(row);
        
        for (let j=1; j < 40; j++){
            const column = document.createElement("div");
            column.id= "column" + j;
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}

function removeShake(){
    red.classList.remove('animation');
    
}

function clearSketch(){
 boxListen.forEach((box) =>{
    const eachBox = box;
    eachBox.style.backgroundColor = '#689091';
    eachBox.style.opacity = '1';
    eachBox.count = 0;
 })
}

function changeMode() {
    if (selectMode == 'Classic') {
        selectMode = 'Shader';
        mode.textContent = `Style: ${selectMode}`;
    }
    else {
        selectMode = 'Classic';
        mode.textContent = `Style: ${selectMode}`;
    }
}

function paintMode(e) {
    if (selectMode == 'Shader') {
        e.target.style.backgroundColor = '#1d1d1d';
        e.target.count += 1;
        e.target.style.opacity = 0.15 * e.target.count;
    }
    else {
        e.target.style.backgroundColor = '#1d1d1d';
        e.target.style.opacity = 1;
    }
}


const container = document.querySelector(".container");

initializeSketch();

const red = document.querySelector(".red")

const boxListen = document.querySelectorAll('.column');


let mode  = document.querySelector('.mode');
let selectMode = 'Classic'
mode.textContent = `Style: ${selectMode}`

const shake = document.querySelector(".shakebttn");

mode.addEventListener('click', ()=>{
    changeMode();
})


boxListen.forEach((box) => {
    const eachBox = box;
    eachBox.count = 0;

    eachBox.addEventListener('mouseenter', (e) =>{
        paintMode(e);
    }) 
    shake.addEventListener("click", (e)=>{
        red.classList.add('animation');
        setTimeout(clearSketch, 400)
        setTimeout(removeShake, 1000)
    })
})


