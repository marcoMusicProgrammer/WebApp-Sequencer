function createPanSlider(counterOsc,PANdiv) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")


    let labelPan = document.createElement("label")
    labelPan.textContent = "Pan"
    labelPan.htmlFor = "pan" + counter

    let spanPan = document.createElement("span")
    spanPan.id = "pan_number" + counter
    spanPan.innerHTML = 0

    // let br = document.createElement("br")

    let inputPan = document.createElement("input")
    inputPan.type = "range"
    inputPan.id = "pan" + counter
    inputPan.min = "-1"
    inputPan.max = "1"
    inputPan.step = "any"
    inputPan.class = "number"
    inputPan.value = 0


    td.appendChild(labelPan)
    td1.appendChild(inputPan)
    td2.appendChild(spanPan)

    tr.append(td,td1,td2)
    table.appendChild(tr)
    PANdiv.append(table)

    inputPan.oninput = ()=>{updatePan(counterOsc,spanPan,inputPan)}

}

function updatePan(counterOsc,spanPan,inputPan) {

    spanPan.textContent = parseFloat(inputPan.value).toFixed(2)
    pans[counterOsc].pan.value = inputPan.value
    
}