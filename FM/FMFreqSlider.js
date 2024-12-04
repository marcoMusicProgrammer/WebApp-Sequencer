function createFMsliders(counterOsc,FMdiv,FMFreq,FMAmp) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")

    const buttonFM = document.createElement("button")
    buttonFM.innerHTML = "Open FM Controllers"

    td.appendChild(buttonFM)
    tr.appendChild(td)
    table.appendChild(tr)
    FMdiv.appendChild(table)

    buttonFM.onclick = ()=>{fmSlides(counterOsc,FMdiv,FMFreq,FMAmp)}

}

function fmSlides (counterOsc,FMdiv,FMFreq,FMAmp) {

    if(fm == true) {

        let fmDiv = document.createElement("div")
        fmDiv.id = "fm-div" + counterOsc
        fmDiv.classList = "fmDiv"

        let divFreq = document.createElement("div")
        divFreq.id = "subFMDiv-id" + counterOsc
        divFreq.classList = "subFmDiv"

        let divAmp = document.createElement("div")
        divAmp.id = "subFMDiv-id" + counterOsc
        divAmp.classList = "subFmDiv"

        //////////////////////////////////////////////////////
        // FREQ

        let labelFmFreq = document.createElement("label")
        labelFmFreq.textContent = "FM Frequency"
        labelFmFreq.style.color = "white"
        labelFmFreq.htmlFor = "fm-freq" + counterOsc

        let spanFmFreq = document.createElement("span")
        spanFmFreq.id = "spanFmFreq"
        spanFmFreq.style.color = "white"
        spanFmFreq.innerHTML = parseFloat(FMFreq[0]).toFixed(2)

        let inputFreq = document.createElement("input")
        inputFreq.type = "range"
        inputFreq.id = "fm-freq" + counterOsc
        inputFreq.min = "30"
        inputFreq.max = "500"
        inputFreq.step = "any"
        inputFreq.value = FMFreq[0]
        inputFreq.classList = "fm"

        //////////////////////////////////////////////////////
        // AMP

        
        let labelFmAmp = document.createElement("label")
        labelFmAmp.textContent = "FM Amplitude"
        labelFmAmp.style.color = "white"
        labelFmAmp.htmlFor = "fm-amp" + counterOsc

        let spanFmAmp = document.createElement("span")
        spanFmAmp.id = "spanFmAmp"
        spanFmAmp.style.color = "white"
        spanFmAmp.innerHTML = parseFloat(FMAmp[0]).toFixed(2)

        let inputAmp = document.createElement("input")
        inputAmp.type = "range"
        inputAmp.id = "fm-amp" + counterOsc
        inputAmp.min = "30"
        inputAmp.max = "500"
        inputAmp.step = "any"
        inputAmp.value = FMAmp[0]
        inputAmp.classList = "fm"

        divFreq.append(labelFmFreq,inputFreq,spanFmFreq)
        divAmp.append(labelFmAmp,inputAmp,spanFmAmp)

        fmDiv.append(divFreq,divAmp)
        FMdiv.appendChild(fmDiv)

        inputFreq.oninput = ()=>{fmFreq(counterOsc,inputFreq,spanFmFreq,FMFreq)}
        inputAmp.oninput = ()=>{fmAmp(counterOsc,inputAmp,spanFmAmp,FMAmp)}


        fm = false

    } else {

        if(document.getElementById("fm-div" + counterOsc)){

            document.getElementById("fm-div" + counterOsc).remove()
            fm = true
        } else {
            alert("You can modify one Envelopes at time")
        }

        
    }

}

function fmFreq(counterOsc,inputFreq,spanFmFreq,FMFreq) {

    spanFmFreq.innerHTML = parseFloat(inputFreq.value).toFixed(2)
    FMFreq[0] = parseFloat(inputFreq.value)
    // ampInit[0] = parseFloat(inputFreq.value)

    
    if(FMOscs[counterOsc]!== undefined) {
        // gains[sliderNum].gain.setValueAtTime(amps[sliderNum],audioContext.currentTime)
        FMOscs[counterOsc].frequency.value = inputFreq.value
    }

    console.log("FREQ FM: "+FMFreq)
}

function fmAmp(counterOsc,inputAmp,spanFmAmp,FMAmp) {

    spanFmAmp.innerHTML = parseFloat(inputAmp.value).toFixed(2)
    FMAmp[0] = parseFloat(inputAmp.value)
    // ampInit[0] = parseFloat(inputFreq.value)

    if(FMGains[counterOsc]!== undefined) {
        // gains[sliderNum].gain.setValueAtTime(amps[sliderNum],audioContext.currentTime)
        FMGains[counterOsc].gain.linearRampToValueAtTime(inputAmp.value,audioContext.currentTime+0.2)
    }

    console.log("AMP FM: "+FMAmp)
}


