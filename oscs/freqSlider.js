function createFreqSlider(x,FREQdiv,freqInit) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    let labelFreq = document.createElement("label")
    labelFreq.textContent = "Frequency"
    labelFreq.htmlFor = "freq" + counter

    let spanFreq = document.createElement("span")
    spanFreq.id = "freq_number" + counter
    spanFreq.innerHTML = freqInit

    let inputFreq = document.createElement("input")
    inputFreq.type = "range"
    inputFreq.id = "freq" + counter
    inputFreq.min = "60"
    inputFreq.max = "20000"
    inputFreq.step = 1
    inputFreq.class = "number"
    inputFreq.value = freqInit


    td.appendChild(labelFreq)
    td1.appendChild(inputFreq)
    td2.appendChild(spanFreq)

    tr.append(td,td1,td2)
    table.appendChild(tr)
    FREQdiv.append(table)

    inputFreq.oninput = ()=>{updateFreq(x,spanFreq,inputFreq)}
    
    
}

function updateFreq(sliderNum,spanFreq,inputFreq) {

    spanFreq.innerHTML = inputFreq.value
    freqs[sliderNum] = inputFreq.value
    
    if(oscs[sliderNum]!== undefined) {
        oscs[sliderNum].frequency.value = inputFreq.value
    }
}