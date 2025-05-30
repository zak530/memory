

//funzione che genera numeri casuali a copie
function generaRandom(min,max){
    let random=Math.trunc(Math.random()*max+min)

    return random
}






function creaMatrice(NCarte) {
    let totaleCelle = NCarte * NCarte
    let numeroCoppie = totaleCelle / 2
  
    let carte = []
    for (let i = 1; i <= numeroCoppie; i++) {
      carte.push(i)
      carte.push(i)
    }
  
    for (let i = 0; i < carte.length; i++) {
      let j = Math.floor(Math.random() * carte.length)
      let temp = carte[i]
      carte[i] = carte[j]
      carte[j] = temp
    }
  
    let matrice = []
    let index = 0
    for (let i = 0; i < NCarte; i++) {
      matrice[i] = []
      for (let j = 0; j < NCarte; j++) {
        matrice[i][j] = carte[index]
        index++
      }
    }
  
    return matrice
  }






//funzione che mi controlla le celle
function confronta(matrice){
for(let i=0;i<matrice.length;i++){

}

}
//funzione nascondi

//funzione confronta


function main(){
    let min = 1
    let max = 10
    let x = generaRandom(min,max)
console.log(x)

    let NCarte = 6
    let y= creaMatrice(NCarte)
    console.log(y)

    let targetDiv = document.getElementById("target")
    let table = document.createElement("table")
    table.style.backgroundColor="black"
    for (let i = 0; i < y.length; i++) {
        let riga = document.createElement("tr")
        for (let j = 0; j <y.length; j++) {
            let cell = document.createElement("td")
            cell.textContent = y[i][j]
            cell.style.appearance="red" 
            riga.appendChild(cell)
        }
        table.appendChild(riga)
    }
    targetDiv.appendChild(table)
    table.setAttribute("border","1px")
}
