

function selectWave(waveNum,waveDiv) {

    const form = document.createElement("form")

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    const waveInput1 = document.createElement("input")
    waveInput1.type = "radio"
    waveInput1.id = "wave"
    waveInput1.value = 1
    waveInput1.name = "selectWave"

    const labelWave1 = document.createElement("label")
    labelWave1.innerHTML = "Sinusoidal"
    labelWave1.htmlFor = "wave"

    const waveInput2 = document.createElement("input")
    waveInput2.type = "radio"
    waveInput2.id = "wave"
    waveInput2.value = 2
    waveInput2.name = "selectWave"

    
    const labelWave2 = document.createElement("label")
    labelWave2.innerHTML = "Saw"
    labelWave2.htmlFor = "wave"

    const waveInput3 = document.createElement("input")
    waveInput3.type = "radio"
    waveInput3.id = "wave"
    waveInput3.value = 3
    waveInput3.name = "selectWave"

    
    const labelWave3 = document.createElement("label")
    labelWave3.innerHTML = "Triangle"
    labelWave3.htmlFor = "wave"


    td.append(waveInput1,labelWave1)
    td1.append(waveInput2,labelWave2)
    td2.append(waveInput3,labelWave3)

    tr.append(td,td1,td2)
    table.appendChild(tr)

    form.append(table)
    waveDiv.append(form)

    waveInput1.onchange = ()=>{sineWave(waveInput1.value,waveNum)}
    waveInput2.addEventListener("change",()=>{sineWave(waveInput2.value,waveNum)})
    waveInput3.addEventListener("change",()=>{sineWave(waveInput3.value,waveNum)})


}
function sineWave(value, index) {

    switch (value) {
        case "1":
            oscs[index].type = "sine";
            break;

        case "2":
            oscs[index].type = "sawtooth";
            break;

        case "3":
            oscs[index].type = "triangle";
            break;

        default:
            console.log("Invalid value:", value);
            break;
    }
}

