function newInstr(form,p,OSCdiv,index) {

  inst[index] = "sample"

    counter2 = (counter2 + 1)
    console.log(inst)

    selettore = "sample"

    form.remove()
    p.remove()

    ampSamples.push(ampInit)
    envSamples.push([1,1])

    amps.push(ampInit)
    freqs.push(freqInit)
    envs.push([1,1])

    bufContainer(OSCdiv,counter2,index)
    seqContainer(index,counter2)

};

function bufContainer(OSCdiv,counterSample,index) {

  let AMPdiv = document.createElement("div")
  AMPdiv.className = "amp_div"

  let FREQdiv = document.createElement("div")
  FREQdiv.className = "freq_div"


  let PANdiv = document.createElement("div")
  PANdiv.className = "pan_div"

  let BUTTONdiv = document.createElement("div")
  BUTTONdiv.className = "button_div"

  let INSTname = document.createElement("h3")
  INSTname.innerHTML = `Instrument ${index+1}`

  OSCdiv.append(INSTname,AMPdiv,PANdiv,FREQdiv,BUTTONdiv)


  bufButton(counterSample,BUTTONdiv)
  ampSample(counterSample,AMPdiv,amps[index])
  pitchShift(counterSample,FREQdiv)
  panBufSlider(counterSample,PANdiv)

}

function bufButton(index,BUTTONdiv) {

  let table = document.createElement("table")
  let tr = document.createElement("tr")
  let td = document.createElement("td")
  let td2 = document.createElement("td")

  const inputAudio = document.createElement("input")
  inputAudio.type = "file"
  inputAudio.id = `fileInput${index}`
  // inputAudi
}