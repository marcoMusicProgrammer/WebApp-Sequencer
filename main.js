const audioContext = new AudioContext()

const newSine = document.getElementById("new_sine")
const delSine = document.getElementById("del_sine")

const finalMaster = audioContext.createGain()
finalMaster.connect(audioContext.destination)

let selettore = undefined

var inst = []
var sample = []
var gainSamples = []
var ampSamples = []
var envSamples = []
var shifter = []
var amps = []
var bpf = []
var freqs = []
var pans = []
var envs = []
var oscs = []
var gains = []
var oscType = []
var env = true
var FMOscs = []
var FMGains = []
var FMfreq = []
var FMamp = []
var fm = true
var panSamples = []


var bpm = 0

// SEQUENCER

let arrayCollectionOsc = {}
let arrayCollectionSample = {}
let arraySeqSample = {}
let arraySeqOsc = {}
let arraySeqOnOffSample = {}
let arraySeqOnOffOsc = {}

var ampInit = [0.9,0.5,0.1]
var bpfInit = [1,0.5,2,1]
var freqInit = 200
var counter = -1
var counter2 = -1
var counter3 = -1


function newInst() {
    counter3 = (counter3 + 1)

    console.log("primo contatore"+counter3)
    selector(counter3)
}

function delInst() {

    console.log("INDICE counter3: "+ counter3)


    deleteInst(counter3)

    if(counter3 > -1){
        counter3 = counter3 - 1
    }
    if(counter > -1){
        counter = counter - 1
    }
    if(counter2 > -1){
        counter2 = counter2 - 1
    }


}


newSine.addEventListener("click",newInst)
delSine.addEventListener("click",delInst)
