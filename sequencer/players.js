const bpmStart = document.getElementById("bpm-id")
let tempo = document.getElementById("tempo-id")

let step = -1
let colorStep = 1

function loop () {

    step = (step +1) % 16
    colorStep = (colorStep + 1) % 16



    console.log(arrayCollectionOsc)
    console.log(arrayCollectionSample)

    // arraySeq contiene tutti gli elementi li (16) mentre arraySeqOnOff è l'array
    // in cui il loop prosegue inserendo un 1.

    // Il primo loop conta quanti elementi Li ci sono, il secondo loop controlla quanti
    // Oscillatori ci sono.

    // Per ogni oscillatore controlla quanti array ci sono all'interno degli array, per ogni array
    // il primo loop viene utilizzato per prendere il primo valore di ognuno.

    // arrayCollection contiene tutte le suddivisione che il client ha deciso di selezionare

    // Tutte le volte che il loop va avanti controlla anche cosa l'utente ha selezionato,
    // se non ha selezionato nulla il loop controlla è lo colora di bianco se invece ha selezionato
    // colora di nero

    // Questo permette al loop tutte le volte di colorare di giallo quando è presente sul giusto tempo
    // e ripristinare il valore all'interno colorandolo di bianco o di nero
    


    if(arrayCollectionOsc[`array${0}`]) {
        for (let index = 0; index < oscs.length; index++) {

            arraySeqOnOffOsc[`array${index}`][step] = 1
        }
    
        for (let i = 0; i < arraySeqOsc.array0.length; i++) {
            for (let index = 0; index < oscs.length; index++) {
                if(arraySeqOnOffOsc[`array${index}`][i] == 1){

                    arraySeqOsc[`array${index}`][i].style.backgroundColor = "yellow"

                } else {

                    if(arrayCollectionOsc[`array${index}`][i] == 0){

                        arraySeqOsc[`array${index}`][i].style.backgroundColor = "white"

                    }else{
                        
                        arraySeqOsc[`array${index}`][i].style.backgroundColor = "black"

                    }
                }
            }
        }
    }   

    if(arrayCollectionSample[`array${0}`]) {
        for (let index = 0; index < sample.length; index++) {

            arraySeqOnOffSample[`array${index}`][step] = 1
    
        }

        for (let i = 0; i < arraySeqSample.array0.length; i++) {
            for (let index = 0; index < sample.length; index++) {

                if(arraySeqOnOffSample[`array${index}`][i] == 1){

                    arraySeqSample[`array${index}`][i].style.backgroundColor = "yellow"

                } else {

                    if(arrayCollectionSample[`array${index}`][i] == 0){

                        arraySeqSample[`array${index}`][i].style.backgroundColor = "white"

                    }else{
                        
                        arraySeqSample[`array${index}`][i].style.backgroundColor = "black"

                    }
                }
            }
        }
    }   

    playOsc(step)
    playSample(step)

    for (let index = 0; index <  inst.length; index++) {

        if(arraySeqOnOffOsc[`array${index}`]){
            arraySeqOnOffOsc[`array${index}`][step] = 0
        }

        if(arraySeqOnOffSample[`array${index}`]){
            arraySeqOnOffSample[`array${index}`][step] = 0
        }
    }
}

function playOsc(step) {


    for (let i = 0; i < oscs.length; i++) {
        if(arrayCollectionOsc[`array${i}`]){
            if (arrayCollectionOsc[`array${i}`][step] == 1)  { 
                if(oscs[i]) {

                    let env = [audioContext.currentTime,audioContext.currentTime+0.1,audioContext.currentTime+0.2,audioContext.currentTime+0.3]

                    gains[i].gain.setValueAtTime(0,audioContext.currentTime)
                    gains[i].gain.linearRampToValueAtTime(amps[i][0],audioContext.currentTime+bpf[i][0])
                    gains[i].gain.linearRampToValueAtTime(amps[i][1],audioContext.currentTime+bpf[i][1]+bpf[i][0])
                    gains[i].gain.linearRampToValueAtTime(amps[i][2],audioContext.currentTime+bpf[i][2]+bpf[i][1])
                    gains[i].gain.linearRampToValueAtTime(0,audioContext.currentTime+bpf[i][3]+bpf[i][0]+bpf[i][1]+bpf[i][2])


                    console.log(bpf)
                }

            } else if(arrayCollectionOsc[`array${i}`][step] == 0) {
                console.log("non suona")
            } else {
                console.log("Nessun oscillatore selezionato")
            }
        } else if (!arrayCollectionOsc[`array${i}`]) {
            console.log("Nessun Oscillatore")
        }
    } 


}

function playSample(step) {

    for (let i = 0; i < sample.length; i++) {

        console.log(i)
        console.log("Gain Sample: "+ gainSamples[i])
        if (arrayCollectionSample[`array${i}`][step] == 1)  { 

            // let env = [audioContext.currentTime,audioContext.currentTime+0.1,audioContext.currentTime+1,audioContext.currentTime+2]

            playBuffer(i)

            // gainSamples[i].gain.setValueAtTime(0,env[0])
            // gainSamples[i].gain.linearRampToValueAtTime(ampSamples[i],env[1])
            // gainSamples[i].gain.setValueAtTime(ampSamples[i],env[2])
            // gainSamples[i].gain.linearRampToValueAtTime(0,env[3])

        } else if(arrayCollectionSample[`array${i}`][step] == 0) {
            console.log("non suona")
        } else {
            console.log("Nessun sample selezionato")

        }
    }

}


function bpm(){

   bpm =  (60000 / tempo.value)

}

let click

function startSequencer() {

    if(bpmStart.innerHTML == "Start Sequencer"){
        if(bpm == 0) {
            alert("0 is not a valid BPM")
        } else if (bpm > 0) {
    
            click = setInterval(loop,bpm)
            bpmStart.innerHTML = "Stop Sequencer"

        }
    } else {

        clearInterval(click)
        step = -1
        bpmStart.innerHTML = "Start Sequencer"

    }
}

bpmStart.addEventListener("click",startSequencer)
tempo.addEventListener("change",bpm)