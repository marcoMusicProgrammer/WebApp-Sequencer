function containers(OSCdiv,counterOsc,index){

    const oscs = document.getElementById("oscs")
    
    let AMPdiv = document.createElement("div")
    AMPdiv.className = "amp_div"

    let FREQdiv = document.createElement("div")
    FREQdiv.className = "freq_div"

    let PANdiv = document.createElement("div")
    FREQdiv.className = "freq_div"

    let ENVdiv = document.createElement("div")
    ENVdiv.className = "env_div"

    let FMDiv = document.createElement("div")
    FMDiv.className = "FM_div"

    let BUTTONdiv = document.createElement("div")
    BUTTONdiv.className = "button_div"

    let WAVEdiv = document.createElement("div")
    WAVEdiv.className = "wave_div"

    let INSTname = document.createElement("h3")
    INSTname.innerHTML = `Instrument ${index+1}`

    OSCdiv.append(INSTname,AMPdiv,FREQdiv,PANdiv,WAVEdiv,BUTTONdiv,ENVdiv,FMDiv)

    createAmpSlider(counterOsc,AMPdiv,amps[counterOsc])
    createFreqSlider(counterOsc,FREQdiv,freqs[counterOsc])
    createPanSlider(index,PANdiv)
    createEnv(counterOsc,ENVdiv,amps[counterOsc],bpf[counterOsc])
    createFMsliders(counterOsc,FMDiv,FMfreq[counterOsc],FMamp[counterOsc])
    createButton(counterOsc,BUTTONdiv)
    selectWave(counterOsc,WAVEdiv)

}

function delContainer(index) {

    deleteOsc(index)
    // console.log("ciao")

    if(index > -1){
        // console.log(document.getElementById(`osc${index}`))
        
        document.getElementById(`osc${index}`).remove()
    }
}

function delContainerSample(index) {

    deleteSample(index)

    if(index > -1){
        document.getElementById(`osc${index}`).remove()
    }

    console.log(index)
}


