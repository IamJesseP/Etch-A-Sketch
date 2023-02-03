const container = document.querySelector(".container");



for (let i=1; i < 17; i++){
    const row = document.createElement("div");
    row.id = "row" + i;
    row.classList.add("row")
    container.appendChild(row);

    for (let j=1; j < 17; j++){
        const column = document.createElement("div");
        column.id= "column" + j;
        column.textContent = `test`
        column.classList.add("column");
        row.appendChild(column);
    }
}

