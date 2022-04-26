console.log("Ciao Mondo");

const main = document.querySelector("main");
document.getElementById("play").addEventListener("click", play);

function play() {
  reset();
  const level = document.getElementById("level").value;
  const gridLevels = [100,81,49];
  const cellNumbers = gridLevels[level];
  // const bombs = generateBombs(cellNumbers)
  console.log("cellNumbers", cellNumbers);


  generatePlayground (cellNumbers);

  
}

function generatePlayground(cellNumbers){
  const grid = document.createElement("div");
  grid.className="grid";

for(let i =1; i <= cellNumbers; i++){

  const cell = generateCell(i, cellNumbers);

  grid.append(cell)
}

main.append(grid);

}


function generateCell(cellId, cellNumbers) {
 
  const cell = document.createElement("div")
  cell.className = "cell";
  
  cell.classList.add("square"+cellNumbers)
  cell.innerHTML = '<span>13</span>';

  cell.cellId = cellId;

  
  cell.addEventListener("click", handleClickCell);


  return cell;
}

function handleClickCell(){
  this.classList.add("clicked");
}



function reset(){
  main.innerHTML="";
}


function generateRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min );
}












