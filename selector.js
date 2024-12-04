function selector(index) {

    inst.push(`inst${index}`)

    const oscs = document.getElementById("oscs")

    let OSCdiv = document.createElement("div")
    OSCdiv.className = "osc"
    OSCdiv.id = "osc" + index

    const form = document.createElement("form")
    form.id = `form${index}`

    const divP = document.createElement("div")

    const p = document.createElement("p")
    p.id = `p${index}`
    p.innerHTML = "What kind of instrument do you want?"

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let tr1 = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")

    const instrument1 = document.createElement("input")
    instrument1.type = "radio"
    instrument1.id = "instrument"
    instrument1.value = 1
    instrument1.name = "selectInstrument"

    const labelInstrument1 = document.createElement("label")
    labelInstrument1.innerHTML = "Oscillator"
    labelInstrument1.htmlFor = "instrument"

    const instrument2 = document.createElement("input")
    instrument2.type = "radio"
    instrument2.id = "intrument"
    instrument2.value = 2
    instrument2.name = "selectInstrument"
    
    const labelInstrument2 = document.createElement("label")
    labelInstrument2.innerHTML = "Sample"
    labelInstrument2.htmlFor = "instrument"

    td.append(instrument1,labelInstrument1)
    td1.append(instrument2,labelInstrument2)
    tr.append(td,td1)
    tr1.appendChild(divP)

    table.append(tr)
    form.appendChild(table)
    OSCdiv.append(p,form)
    oscs.appendChild(OSCdiv)


    instrument1.onclick = ()=>{newOsc(form,p,OSCdiv,index)}
    instrument2.onclick = ()=>{newInstr(form,p,OSCdiv,index)}

}

function newOsc(form,p,OSCdiv,index) {

    counter = (counter + 1)
    selettore = "oscillator"
    inst[index] = "osc"
    oscType[counter] = "sine"

    console.log(inst)

    form.remove()
    p.remove()

    amps.push([0.9,0.5,0.1])
    bpf.push([0.1,0.2,0.1,0.1])
    freqs.push(freqInit)
    // pan.push([0])
    envs.push([1,1])
    FMfreq.push([100])
    FMamp.push([300])

    containers(OSCdiv,counter,index)
    seqContainer(index,counter)
}

function deleteInst(index) {

    console.log("INDICE: "+index)
    console.log("SAMPLE: "+sample[index])
    console.log("OSCS: "+oscs[index])
    console.log("INST: "+inst[index])

    if(inst[index] == "osc") {
        console.log("osc")
        delContainer(index)
        delSequencer(index)
    } else if (inst[index] == "sample") {
        console.log("inst")
        delContainerSample(index)
        delSequencer(index)
    } else {
        delInstruments(index)
    }

}

function delInstruments(index) {

    if(index > -1){
        document.getElementById(`osc${index}`).remove()
    }

}