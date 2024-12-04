function seqContainer(index,counter) {

    const sequencer = document.getElementById("sequencer")

    const stepDiv = document.createElement("div")
    stepDiv.className = "steps"
    stepDiv.id = `steps${index}`

    sequencer.append(stepDiv)

    createSequencer(stepDiv,counter)
}

function newArray(name,values) {

    if(selettore == "sample"){

        arrayCollectionSample[name] = [values]
        arraySeqSample[name] = [values]
        arraySeqOnOffSample[name] = [values]

    } else {
        arrayCollectionOsc[name] = [values]
        arraySeqOsc[name] = [values]
        arraySeqOnOffOsc[name] = [values]
    }

}

function delSequencer(index) {

    deleteSequencer(index)

    if(index > -1){
        console.log(document.getElementById(`steps${index}`))

        document.getElementById(`steps${index}`).remove()
    }

}