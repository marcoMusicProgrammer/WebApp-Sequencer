function createEnv(counterOsc,ENVdiv,amps,bpf) {

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")

    const buttonENV = document.createElement("button")
    buttonENV.innerHTML = "Open Env Controllers"

    td.appendChild(buttonENV)
    tr.appendChild(td)
    table.appendChild(tr)
    ENVdiv.appendChild(table)

    buttonENV.onclick = ()=>{envSlides(counterOsc,ENVdiv,amps,bpf)}
}

function envSlides(counterOsc,ENVdiv,oscAmps,oscBpf) {

    if(env == true){

        let envDiv = document.createElement("div")
        envDiv.id = "env-div" + counterOsc
        envDiv.classList = "envDiv"

        let divAttack = document.createElement("div")
        divAttack.id = "subEnvDiv-id" + counterOsc
        divAttack.classList = "subEnvDiv"

        let divInputAttack = document.createElement("div")
        divInputAttack.id = "input-id" + counterOsc
        divInputAttack.classList = "inputDiv"

        let divSpanAttack = document.createElement("div")
        divSpanAttack.id = "label-id" + counterOsc
        divSpanAttack.classList = "labelDiv"

        //////
        
        let divDecay = document.createElement("div")
        divDecay.id = "subEnvDiv-id" + counterOsc
        divDecay.classList = "subEnvDiv"

        let divInputDecay = document.createElement("div")
        divInputDecay.id = "input-id" + counterOsc
        divInputDecay.classList = "inputDiv"

        let divSpanDecay = document.createElement("div")
        divSpanDecay.id = "label-id" + counterOsc
        divSpanDecay.classList = "labelDiv"

        //////

        let divSustain = document.createElement("div")
        divSustain.id = "subEnvDiv-id" + counterOsc
        divSustain.classList = "subEnvDiv"

        let divInputSustain = document.createElement("div")
        divInputSustain.id = "input-id" + counterOsc
        divInputSustain.classList = "inputDiv"

        let divSpanSustain = document.createElement("div")
        divSpanSustain.id = "label-id" + counterOsc
        divSpanSustain.classList = "labelDiv"

        /////

        let divRelease = document.createElement("div")
        divRelease.id = "subEnvDiv-id" + counterOsc
        divRelease.classList = "subEnvDiv"


        ////////////////////////////////////////////////////
        // ATTACK

        let labelAttack = document.createElement("label")
        labelAttack.textContent = "Attack"
        labelAttack.style.color = "white"
        labelAttack.htmlFor = "atk" + counterOsc

        let spanAttack = document.createElement("span")
        spanAttack.id = "spanAttack"
        spanAttack.style.color = "white"
        spanAttack.innerHTML = parseFloat(oscAmps[0]).toFixed(2)

        let envAttack = document.createElement("input")
        envAttack.type = "range"
        envAttack.id = "atk" + counterOsc
        envAttack.min = "0"
        envAttack.max = "1"
        envAttack.step = "any"
        envAttack.value = oscAmps[0]
        envAttack.classList = "env"

        let spanAttackDur = document.createElement("span")
        spanAttackDur.id = "spanAttack"
        spanAttackDur.style.color = "white"
        spanAttackDur.innerHTML = parseFloat(oscBpf[0]).toFixed(2)

        let attackDur = document.createElement("input")
        attackDur.type = "range"
        attackDur.id = "atk_dur" + counterOsc
        attackDur.min = "0"
        attackDur.max = "2"
        attackDur.step = "any"
        attackDur.value = oscBpf[0]
        attackDur.classList = "env"

        ///////////////////////////////////////////////////////
        // DECAY

        let labelDecay = document.createElement("label")
        labelDecay.textContent = "Decay"
        labelDecay.style.color = "white"
        labelDecay.htmlFor = "dec" + counterOsc

        let spanDecay = document.createElement("span")
        spanDecay.id = "spanDecay"
        spanDecay.style.color = "white"
        spanDecay.innerHTML = parseFloat(oscAmps[1]).toFixed(2)

        let envDecay = document.createElement("input")
        envDecay.type = "range"
        envDecay.id = "dec" + counterOsc
        envDecay.min = "0"
        envDecay.max = "1"
        envDecay.step = "any"
        envDecay.value = oscAmps[1]
        envDecay.classList = "env"


        let spanDecayDur = document.createElement("span")
        spanDecayDur.id = "spanDecay"
        spanDecayDur.style.color = "white"
        spanDecayDur.innerHTML = parseFloat(oscBpf[1]).toFixed(2)

        let decayDur = document.createElement("input")
        decayDur.type = "range"
        decayDur.id = "dec" + counterOsc
        decayDur.min = "0"
        decayDur.max = "2"
        decayDur.step = "any"
        decayDur.value = oscBpf[1]
        decayDur.classList = "env"

        ///////////////////////////////////////////////////
        /// SUSTAIN


        let labelSustain = document.createElement("label")
        labelSustain.textContent = "Sustain"
        labelSustain.style.color = "white"
        labelSustain.htmlFor = "sus" + counterOsc

        let spanSustain = document.createElement("span")
        spanSustain.id = "spanSustain"
        spanSustain.style.color = "white"
        spanSustain.innerHTML = parseFloat(oscAmps[2]).toFixed(2)

        let envSustain = document.createElement("input")
        envSustain.type = "range"
        envSustain.id = "sus" + counterOsc
        envSustain.min = "0"
        envSustain.max = "1"
        envSustain.step = "any"
        envSustain.value = oscAmps[2]
        envSustain.classList = "env"

        let spanSustainDur = document.createElement("span")
        spanSustainDur.id = "spanSustain"
        spanSustainDur.style.color = "white"
        spanSustainDur.innerHTML = parseFloat(oscBpf[2]).toFixed(2)

        let envSustainDur = document.createElement("input")
        envSustainDur.type = "range"
        envSustainDur.id = "sus" + counterOsc
        envSustainDur.min = "0"
        envSustainDur.max = "2"
        envSustainDur.step = "any"
        envSustainDur.value = oscBpf[2]
        envSustainDur.classList = "env"

        ///////////////////////////////////////////////////
        /// SUSTAIN


        let labelRelease = document.createElement("label")
        labelRelease.textContent = "Release"
        labelRelease.style.color = "white"
        labelRelease.htmlFor = "rel" + counterOsc

        let spanRelease = document.createElement("span")
        spanRelease.id = "spanRelease"
        spanRelease.style.color = "white"
        spanRelease.innerHTML = parseFloat(oscBpf[3]).toFixed(2)

        let envRelease = document.createElement("input")
        envRelease.type = "range"
        envRelease.id = "sus" + counterOsc
        envRelease.min = "0"
        envRelease.max = "1"
        envRelease.step = "any"
        envRelease.value = oscBpf[3]
        envRelease.classList = "env"
        


        //////////////////////////////////////////////////////



        divInputAttack.append(envAttack,attackDur)
        divSpanAttack.append(spanAttack,spanAttackDur)
        divAttack.append(labelAttack,divInputAttack,divSpanAttack)

        divInputDecay.append(envDecay,decayDur)
        divSpanDecay.append(spanDecay,spanDecayDur)
        divDecay.append(labelDecay,divInputDecay,divSpanDecay)

        divInputSustain.append(envSustain,envSustainDur)
        divSpanSustain.append(spanSustain,spanSustainDur)
        divSustain.append(labelSustain,divInputSustain,divSpanSustain)

        divRelease.append(labelRelease,envRelease,spanRelease)

        envDiv.append(divAttack,divDecay,divSustain,divRelease)
        ENVdiv.appendChild(envDiv)

        envAttack.oninput = ()=>{envAtk(envAttack,spanAttack,oscAmps,oscBpf,attackDur,spanAttackDur)}
        attackDur.oninput = ()=>{envAtk(envAttack,spanAttack,oscAmps,oscBpf,attackDur,spanAttackDur)}

        envDecay.oninput =()=>{envDec(envDecay,spanDecay,oscAmps,oscBpf,decayDur,spanDecayDur)}
        decayDur.oninput =()=>{envDec(envDecay,spanDecay,oscAmps,oscBpf,decayDur,spanDecayDur)}

        envSustain.oninput =()=>{envSus(envSustain,spanSustain,oscAmps,oscBpf,envSustainDur,spanSustainDur)}
        envSustainDur.oninput =()=>{envSus(envSustain,spanSustain,oscAmps,oscBpf,envSustainDur,spanSustainDur)}

        envRelease.oninput = ()=>{envRel(envRelease,spanRelease,oscBpf)}

        // envSustain.oninput = ()=>{envSus(envSustain,spanSustain,oscAmps)}

        env = false

    } else {

        if(document.getElementById("env-div" + counterOsc)){

            document.getElementById("env-div" + counterOsc).remove()
            env = true
        } else {
            alert("You can modify one Envelopes at time")
        }


    }
}

function envAtk(envInput,spanAttack,oscAmps,oscBpf,attackDur,spanAttackDur) {

    spanAttack.innerHTML = parseFloat(envInput.value).toFixed(2)
    oscAmps[0] = parseFloat(envInput.value)
    ampInit[0] = parseFloat(envInput.value)

    spanAttackDur.innerHTML = parseFloat(attackDur.value).toFixed(2)
    oscBpf[0] = parseFloat(attackDur.value)

    console.log("AMPS: "+oscAmps)
    console.log("BPF: "+oscBpf)
}

function envDec(envInput,spanDecay,oscAmps,oscBpf,decayDur,spanDecayDur) {

    spanDecay.innerHTML = parseFloat(envInput.value).toFixed(2)
    oscAmps[1] = parseFloat(envInput.value)
    ampInit[1] = parseFloat(envInput.value)

    spanDecayDur.innerHTML = parseFloat(decayDur.value).toFixed(2)
    oscBpf[1] = parseFloat(decayDur.value)

    console.log("AMPS: "+oscAmps)
    console.log("BPF: "+oscBpf)
}

function envSus(envInput,spanSustain,oscAmps,oscBpf,envSustainDur,spanSustainDur) {

    spanSustain.innerHTML = parseFloat(envInput.value).toFixed(2)
    oscAmps[2] = parseFloat(envInput.value)
    ampInit[2] = parseFloat(envInput.value)

    spanSustainDur.innerHTML = parseFloat(envSustainDur.value).toFixed(2)
    oscBpf[2] = parseFloat(envSustainDur.value)

    console.log("AMPS: "+oscAmps)
    console.log("BPF: "+oscBpf)
}

function envRel(envRelease,spanRelease,oscBpf) {

    spanRelease.innerHTML = parseFloat(envRelease.value).toFixed(2)
    oscBpf[3] = parseFloat(envRelease.value)

}



