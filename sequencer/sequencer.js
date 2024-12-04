function createSequencer(stepDiv,index) {

    newArray(`array${index}`,null)

    let ul = document.createElement("div")
    ul.className = "ul"



    if(selettore == "sample"){

        for (let i = 0; i < 16; i++) {

            let li = document.createElement("li")
    
            li.innerHTML = i
            li.id = i
            // arrayCollectionOsc[`array${index}`].splice(i,0,0)
            arrayCollectionSample[`array${index}`].splice(i,0,0)
            arraySeqSample[`array${index}`].splice(i,0,li)
            arraySeqOnOffSample[`array${index}`].splice(i,0,0)

            ul.appendChild(li)
            stepDiv.appendChild(ul)
            li.onclick = ()=>{selettore = "sample",stepOnAndOff(li,i,index)}

        }


        arrayCollectionSample[`array${index}`].pop()
        arraySeqSample[`array${index}`].pop()
        arraySeqOnOffSample[`array${index}`].pop()

    } else {

        for (let i = 0; i < 16; i++) {

            let li = document.createElement("li")
    
            li.innerHTML = i
            li.id = i
            arrayCollectionOsc[`array${index}`].splice(i,0,0)
            // arrayCollectionSample[`array${index}`].splice(i,0,0)
            arraySeqOsc[`array${index}`].splice(i,0,li)
            arraySeqOnOffOsc[`array${index}`].splice(i,0,0)

            ul.appendChild(li)
            stepDiv.appendChild(ul)

            // console.log(arraySeqOnOff)
            li.onclick = ()=>{selettore = "oscillatore",stepOnAndOff(li,i,index)}


        }

        arrayCollectionOsc[`array${index}`].pop()
        arraySeqOsc[`array${index}`].pop()
        arraySeqOnOffOsc[`array${index}`].pop()

    }

}


function stepOnAndOff(li,i,arrayNum) {


    if(selettore == "sample"){

        if(arrayCollectionSample[`array${arrayNum}`][i] == 0) {
            arrayCollectionSample[`array${arrayNum}`][i] = 1
            li.style.backgroundColor = "black"
    
        } else {
            arrayCollectionSample[`array${arrayNum}`][i] = 0
            li.style.backgroundColor = "white"
    
        }

    } else {

        if(arrayCollectionOsc[`array${arrayNum}`][i] == 0) {
            arrayCollectionOsc[`array${arrayNum}`][i] = 1
            li.style.backgroundColor = "black"
    
        } else {
            arrayCollectionOsc[`array${arrayNum}`][i] = 0
            li.style.backgroundColor = "white"
    
        }
    }
}


function deleteSequencer(i) {

    if(arrayCollectionOsc[`array${i}`]){
        arrayCollectionOsc[`array${i}`].pop()
        arraySeqOsc[`array${i}`].pop()
        arraySeqOnOffOsc[`array${i}`].pop()
    }

    if(arrayCollectionSample[`array${i}`]){
        arrayCollectionSample[`array${i}`].pop()
        arraySeqSample[`array${i}`].pop()
        arraySeqOnOffSample[`array${i}`].pop()
    }

}