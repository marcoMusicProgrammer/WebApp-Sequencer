function amp2db(ampiezza){

    let db = 20 * Math.log(ampiezza)
    return Math.round(db)

}

function createButton(button_num,BUTTONdiv) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")

    let oscButton = document.createElement("button")
    oscButton.id = "osc_button"
    oscButton.className = "oscButton"
    oscButton.innerHTML = "Stop"


    td.appendChild(oscButton)
    tr.appendChild(td)
    table.appendChild(tr)
    BUTTONdiv.appendChild(table)

    createNewOscillator(button_num,freqs[button_num])
    oscButton.onclick = ()=>{createNewOsc(button_num,oscButton,amps[button_num],freqs[button_num],envs[button_num],finalMaster)}

}

function createNewOscillator(index,initFreq) {

    let oscillator = audioContext.createOscillator()
    let gain = audioContext.createGain()
    let FMOscillator = audioContext.createOscillator() 
    let FMGain = audioContext.createGain()
    let panContext = audioContext.createStereoPanner()

    
    oscillator.type = "sine"
    oscillator.frequency.value = initFreq

    FMOscillator.type = "sine"
    FMOscillator.frequency.value = 100

    gain.gain.setValueAtTime(0,audioContext.currentTime)
    FMGain.gain.value = 100

    FMOscillator.connect(FMGain)
    FMGain.connect(oscillator.frequency)

    oscillator.connect(gain)
    gain.connect(panContext)
    panContext.connect(finalMaster)
    oscillator.start()
    FMOscillator.start()

    oscs[index] = oscillator
    gains[index] = gain
    pans[index] = panContext

    FMOscs[index] = FMOscillator
    FMGains[index] = FMGain
}

function createNewOsc(index,oscButton,initAmp,initFreq,initEnv) {

    const atk = initEnv[0]
    const rls = initEnv[1]

    if(gains[index] == undefined && oscs[index] == undefined){

        let oscillator = audioContext.createOscillator()
        let gain = audioContext.createGain()
        let FMOscillator = audioContext.createOscillator() 
        let FMGain = audioContext.createGain()
        let panContext = audioContext.createStereoPanner()

        oscillator.type = oscType[index]
        oscillator.frequency.value = initFreq

        FMOscillator.type = "sine"
        FMOscillator.frequency.value = 100

        gain.gain.setValueAtTime(0,audioContext.currentTime)
        gain.gain.linearRampToValueAtTime(amps[index][0],audioContext.currentTime+bpf[index][0])
        gain.gain.linearRampToValueAtTime(amps[index][1],audioContext.currentTime+bpf[index][1])
        gain.gain.linearRampToValueAtTime(amps[index][2],audioContext.currentTime+bpf[index][2])
        gain.gain.linearRampToValueAtTime(0,audioContext.currentTime+bpf[index][3])

        FMGain.gain.value = 100

        FMOscillator.connect(FMGain)
        FMGain.connect(oscillator.frequency)

        oscillator.connect(gain)
        gain.connect(panContext)
        panContext.connect(finalMaster)
        oscillator.start()
        FMOscillator.start()

        oscs[index] = oscillator
        gains[index] = gain
        pans[index] = panContext

        FMOscs[index] = FMOscillator
        FMGains[index] = FMGain

        console.log(oscs)

        oscButton.innerHTML = "Stop"

    } else {
        console.log(amps)
        gains[index].gain.setValueAtTime(amps[index][2],audioContext.currentTime)
        gains[index].gain.linearRampToValueAtTime(0,audioContext.currentTime+rls)

        // oscs[index].stop(audioContext.currentTime+rls)

        oscs[index] = undefined
        gains[index] = undefined
        FMOscs[index] = undefined
        FMGains[index] = undefined

        oscButton.innerHTML = "Play"

    }
}


function deleteOsc(oscNum) {

    rls = envs[oscNum][1]

    if(oscs[oscNum]!== undefined) {
        gains[oscNum].gain.setValueAtTime(amps[oscNum][2],audioContext.currentTime)
        gains[oscNum].gain.linearRampToValueAtTime(0,audioContext.currentTime+1)
        oscs[oscNum].stop(audioContext.currentTime+rls)
    }

    oscs.pop()
    gains.pop()
    envs.pop()
    freqs.pop()
    amps.pop()
    inst.pop()
    bpf.pop()
    oscType.pop()
    FMOscs.pop()
    FMGains.pop()
    FMfreq.pop()
    FMamp.pop()
    pans.pop()
}
