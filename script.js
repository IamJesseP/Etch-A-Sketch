
function initializeSketch(gridSize){
    let container = document.querySelector(".container");
    for (let i=0; i < gridSize; i++){
        const row = document.createElement("div");
        row.id = "row" + i;
        row.classList.add("row")
        container.appendChild(row);
        
        for (let j=0; j < gridSize; j++){
            const column = document.createElement("div");
            column.id= "column" + j;
            column.classList.add("column");
            row.appendChild(column);
        }
    }
    boxListen = document.querySelectorAll('.column');
}
function deleteSketch(){
    let sketchPixels = container.querySelectorAll('.row');
    sketchPixels.forEach(sketchPixel => sketchPixel.remove());
}

function removeShake(){
    red.classList.remove('animation');
    
}


function clearSketch(){
    for (let i=0; i < boxListen.length; i++){
        boxListen[i].style.backgroundColor='#689091';
        boxListen[i].style.opacity = '1';
        boxListen[i].count = 0;
    }
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

// Initialization and DOM capture
let container = document.querySelector(".container");

var gridSize = 16;

var boxListen = document.querySelectorAll('.column');

const red = document.querySelector(".red")

let mode  = document.querySelector('.mode');

let selectMode = 'Classic'

mode.textContent = `Style: ${selectMode}`

const shake = document.querySelector(".shakebttn");

let gridAmount = document.querySelector(".gridamount");

initializeSketch(gridSize);

//Event Listeners
gridAmount.addEventListener('click', ()=>{
    if (gridAmount.textContent == "Grid Size: 16"){
        deleteSketch(gridSize);
        gridAmount.textContent = "Grid Size: 32";
        gridSize = 32;
        initializeSketch(gridSize);
    }
    else if (gridAmount.textContent == "Grid Size: 32"){
        deleteSketch(gridSize);
        gridAmount.textContent = "Grid Size: 48";
        gridSize = 48;
        initializeSketch(gridSize);
    }
    else {
        deleteSketch(gridSize);
        gridAmount.textContent = "Grid Size: 16";
        gridSize = 16;
        initializeSketch(gridSize);
    }

        var boxListen = document.querySelectorAll('.column');
        boxListen.forEach((box) => {
            const eachBox = box;
            eachBox.count = 0;
        
            eachBox.addEventListener('mouseenter', (e) =>{
                paintMode(e);
            }) 
            shake.addEventListener("click", (e)=>{
                red.classList.add('animation');
                setTimeout(clearSketch, 1)
                setTimeout(removeShake, 800)
            })
        })
        
    }
)

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
        setTimeout(clearSketch, 1)
        setTimeout(removeShake, 800)
    })
})


