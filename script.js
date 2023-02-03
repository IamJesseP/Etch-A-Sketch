function initializeSketch(){
    for (let i=1; i < 30; i++){
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

//clears shake animation
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

const container = document.querySelector(".container");

initializeSketch();

const red = document.querySelector(".red")
const boxListen = document.querySelectorAll('.column');
const shake = document.querySelector(".shakebttn");


boxListen.forEach((box) => {
    const eachBox = box;
    eachBox.count = 0;
    eachBox.addEventListener('mouseenter', (e) =>{
        e.target.style.backgroundColor = '#1d1d1d';
        e.target.count += 1;
        e.target.style.opacity = 0.33 * e.target.count;

    })
    shake.addEventListener("click", (e)=>{
        red.classList.add('animation');
        setTimeout(clearSketch, 700)
        setTimeout(removeShake, 800)
    })
})