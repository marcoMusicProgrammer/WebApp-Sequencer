function ampSample(index,AMPdiv,ampSample) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")


    let labelAmp = document.createElement("label")
    labelAmp.textContent = "Amplitude"
    labelAmp.htmlFor = "amp" + index

    let spanAmp = document.createElement("span")
    spanAmp.id = "amp_number" + index
    spanAmp.innerHTML = parseFloat(ampSample).toFixed(2)

    // let br = document.createElement("br")

    let inputAmp = document.createElement("input")
    inputAmp.type = "range"
    inputAmp.id = "amp" + index
    inputAmp.min = "0"
    inputAmp.max = "1"
    inputAmp.step = "any"
    inputAmp.class = "number"
    inputAmp.value = ampSample

    td.appendChild(labelAmp)
    td1.appendChild(inputAmp)
    td2.appendChild(spanAmp)

    tr.append(td,td1,td2)
    table.appendChild(tr)
    AMPdiv.append(table)

    inputAmp.oninput = ()=>{updateSampleAmp(index,spanAmp,inputAmp)}

}

function updateSampleAmp(sliderNum,spanNum,inputAmp) {

    spanNum.textContent = parseFloat(amp2db(inputAmp.value))
    amps[sliderNum] = inputAmp.value

    if(gainSamples[sliderNum]!== undefined) {
        // gains[sliderNum].gain.setValueAtTime(amps[sliderNum],audioContext.currentTime)
        gainSamples[sliderNum].gain.linearRampToValueAtTime(inputAmp.value,audioContext.currentTime+0.2)
    }
}
