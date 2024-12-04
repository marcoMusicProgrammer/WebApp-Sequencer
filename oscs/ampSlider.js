function createAmpSlider(x,ampDiv,initAmp) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")


    let labelAmp = document.createElement("label")
    labelAmp.textContent = "Amplitude"
    labelAmp.htmlFor = "amp" + counter

    let spanAmp = document.createElement("span")
    spanAmp.id = "amp_number" + counter
    spanAmp.innerHTML = parseFloat(initAmp).toFixed(2)

    // let br = document.createElement("br")

    let inputAmp = document.createElement("input")
    inputAmp.type = "range"
    inputAmp.id = "amp" + counter
    inputAmp.min = "0"
    inputAmp.max = "1"
    inputAmp.step = "any"
    inputAmp.class = "number"
    inputAmp.value = initAmp


    td.appendChild(labelAmp)
    td1.appendChild(inputAmp)
    td2.appendChild(spanAmp)

    tr.append(td,td1,td2)
    table.appendChild(tr)
    ampDiv.append(table)

    inputAmp.oninput = ()=>{updateAmp(x,spanAmp,inputAmp)}

}


function updateAmp(sliderNum,spanNum,inputAmp) {


    var percentuale = (inputAmp.value * 100) / 1
    spanNum.textContent = parseFloat(amp2db(inputAmp.value))

    for (let index = 0; index < amps[sliderNum].length; index++) {
       
        var firstValue = (ampInit[index] / 100 * percentuale) 
        amps[sliderNum][index] = firstValue

    }


    // if(gains[sliderNum]!== undefined) {
    //     // gains[sliderNum].gain.setValueAtTime(amps[sliderNum],audioContext.currentTime)
    //     gains[sliderNum].gain.linearRampToValueAtTime(inputAmp.value,audioContext.currentTime+0.2)
    // }

    console.log(amps)

}
