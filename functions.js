
function drawTable() {
  //draw spreadsheet and give each cell an id based on xy coordinates

  //draw table 10x10
  let table = document.getElementById("spreadsheet")
  for(y=0; y<11; y++) {
    let row = table.insertRow(-1);
    for(x=0; x<11; x++) {
      //For each <td> add form input and assign with an id relative to xy position
      letter = String.fromCharCode(65+(x-1))
      let cell = row.insertCell(-1).innerHTML = "<input class='cell' id='" + letter + y + "'/>";
    }
  }
    //create empty array for data inputs to be stored

    //store cell ids in array
    const allCells = document.querySelectorAll(".cell")
    let cells = []
    let data = []
    cellData = {id:'', value:0}
      for(i=0; i<allCells.length; i++) {
        cells.push(allCells[i].id)
      }

      for(i=0; i<cells.length; i++) {
        this.cellData.id = cells[i]
        data.push(this.cellData)
        // console.log(cells[i])
        console.log(cellData)
      }
      console.log("this is data: " + data[0])



 
}

function refreshTable() {
  let input = document.getElementsByTagName("input");
  input.innerHTML = "hello"
}

function saveData() {
  let data = {}
}