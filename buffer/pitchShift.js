let shift = 0

function pitchShift(index,FREQdiv) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")


    let labelFreq = document.createElement("label")
    labelFreq.textContent = "Frequency"
    labelFreq.htmlFor = "freq" + index

    let spanFreq = document.createElement("span")
    spanFreq.id = "freq_number" + index
    spanFreq.innerHTML = 0

    let inputFreq = document.createElement("input")
    inputFreq.type = "range"
    inputFreq.id = "freq" + index
    inputFreq.min = "0.1"
    inputFreq.max = "2"
    inputFreq.step = "any"
    inputFreq.class = "number"
    inputFreq.value = freqInit

    let buttonShiftUp = document.createElement("button")
    buttonShiftUp.id = "shift" + index
    buttonShiftUp.class = "buttonSample"
    buttonShiftUp.innerHTML = "+"

    let buttonShiftDown = document.createElement("button")
    buttonShiftDown.id = "shift" + index
    buttonShiftDown.class = "buttonSample"
    buttonShiftDown.innerHTML = "-"

    td.appendChild(labelFreq)
    td1.appendChild(buttonShiftUp)
    td2.appendChild(buttonShiftDown)
    td3.appendChild(spanFreq)

    tr.append(td,td1,td2,td3)
    table.appendChild(tr)
    FREQdiv.append(table)

    shifter.push(shift)


    // inputFreq.oninput = ()=>{updatePitchShift(index,spanFreq,inputFreq)}
    buttonShiftUp.onclick = ()=>{updatePitchShiftUp(index,spanFreq,buttonShiftUp)}
    buttonShiftDown.onclick = ()=>{updatePitchShiftDown(index,spanFreq,buttonShiftDown)}

}



function updatePitchShiftUp(sliderNum,spanFreq,buttonShiftUp) {

    shifter[sliderNum] = shifter[sliderNum] + 1

    spanFreq.innerHTML = shifter[sliderNum]
    freqs[sliderNum] = sample[sliderNum].playbackRate.value + 0.0833333333333333


    
    if(sample[sliderNum]!== undefined) {
        console.log(`SAMPLE n°${sliderNum} TROVATO`)
        sample[sliderNum].playbackRate.value = sample[sliderNum].playbackRate.value + 0.0833333333333333
    }

    
    console.log("PLAYBACK: "+ sample[sliderNum].playbackRate.value)
    console.log("SAMPLE: "+ sample)
    console.log("SLIDER_NUM: "+ sliderNum)
}

function updatePitchShiftDown(sliderNum,spanFreq,buttonShiftDown) {

    shifter[sliderNum] = shifter[sliderNum] - 1

    spanFreq.innerHTML = shifter[sliderNum]
    freqs[sliderNum] = sample[sliderNum].playbackRate.value - 0.0833333333333333


    if(sample[sliderNum]!== undefined) {
        console.log(`SAMPLE n°${sliderNum} TROVATO`)
        sample[sliderNum].playbackRate.value = sample[sliderNum].playbackRate.value - 0.0833333333333333
    }

    console.log("PLAYBACK: "+ sample[sliderNum].playbackRate.value)
    console.log("SAMPLE: "+ sample)
    console.log("SLIDER_NUM: "+ sliderNum)

}

// function updatePitchShift(sliderNum,spanFreq,inputFreq) {

//     spanFreq.innerHTML = Math.round(inputFreq.value * 100) / 100
//     freqs[sliderNum] = inputFreq.value

//     console.log("SAMPLE: "+sample)
//     console.log("SLIDER_NUM: "+sliderNum)

    
//     if(sample[sliderNum]!== undefined) {
//         console.log(`SAMPLE n°${sliderNum} TROVATO`)
//         sample[sliderNum].playbackRate.value = inputFreq.value
//     }
// }