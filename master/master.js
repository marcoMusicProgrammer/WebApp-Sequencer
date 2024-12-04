
const master = document.getElementById("slider-bottom-nav-id")
master.oninput = ()=>{changeMaster(master)}


function changeMaster(master) {

    master.textContent = parseFloat(amp2db(master.value))
    // gainMaster.gain.value = master.value

    if(finalMaster) {
        console.log("esiste il master")
        // gains[sliderNum].gain.setValueAtTime(amps[sliderNum],audioContext.currentTime)
        finalMaster.gain.linearRampToValueAtTime(master.value,audioContext.currentTime+0.2)
    }
}