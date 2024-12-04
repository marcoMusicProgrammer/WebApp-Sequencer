
let recorder;
let chunks = [];


const startRecording = () => {
    // Crea un oggetto MediaStream
    const dest = audioContext.createMediaStreamDestination();
    finalMaster.connect(dest);

    console.log(dest)

    // registratoire che prendere il media stream di dest
    recorder = new MediaRecorder(dest.stream);

    // quando la registrazione si ferma inserisce nel chucnk i data sotto forma di blob
    recorder.ondataavailable = (event) => {
        chunks.push(event.data);
        console.log(event)
    };

    recorder.start();
};

const stopRecording = () => {
    recorder.stop();

    // funzione asincrona che ci permette di usare awaits
    recorder.onstop = async () => {
        //inserisce il contenuto di chunk dentro un blob di tipo audio
        // il blob è un contenitore di dati
        const blob = new Blob(chunks, { type: 'audio/webm' });
        // arrayBuuffer è una promessa che restituisce un buffer con i dati binari als uo itnerno
        const arrayBuffer = await blob.arrayBuffer();
        // decode audio data decodifica il contenuto di arrayBuffer, ricampionando nella samplerate di audiocontext
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        console.log(audioBuffer)
        const wavBlob = audioBufferToWav(audioBuffer);
        const wavFile = new File([wavBlob], "recording.wav", { type: 'audio/wav' });

        const audioUrl = URL.createObjectURL(wavFile);

        const a = document.createElement('a');
        a.href = audioUrl;
        a.download = wavFile.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        chunks = []; // pulisce il chunk per la prossima registrazione
    };
};

// document.getElementById("start-rec-id").addEventListener('click', startRecording);
// document.getElementById("stop-rec-id").addEventListener('click', stopRecording);

function audioBufferToWav(buffer) {
    let numOfChan = buffer.numberOfChannels,
    length = buffer.length * numOfChan * 2 + 44,
    bufferArray = new ArrayBuffer(length),
    view = new DataView(bufferArray),
    channels = [],
    i, sample,
    offset = 0,
    pos = 0;

    // creazione header
    // 32 bit per valori a 4 byte
    // 16 bit per valori a 2 byte

    setUint32(0x46464952); // "RIFF"
    setUint32(length - 8); // file length - 8 (4byte per riff e 4 byte per la lunghezza del file)
    setUint32(0x45564157); // "WAVE" RIFF in ascii

    setUint32(0x20746d66); // "fmt " chunk in ASCII
    setUint32(16); // length = 16 byte per PCM
    setUint16(1); // PCM (uncompressed- Pulse Code Modulation)
    setUint16(numOfChan);
    setUint32(buffer.sampleRate); 
    setUint32(buffer.sampleRate * 2 * numOfChan); // Dimensione file
    setUint16(numOfChan * 2); // block-align
    setUint16(16); // 16-bit 

    setUint32(0x61746164); // "data" - chunk
    setUint32(length - pos - 4); // chunk length

    // Normalizza i livelli audio
    let maxVal = 0;
    for (i = 0; i < buffer.length; i++) {
        for (let channel = 0; channel < numOfChan; channel++) {
            let val = Math.abs(buffer.getChannelData(channel)[i]);
            console.log(val)
            if (val > maxVal) {
                maxVal = val;
            }
        }
    }

    // scrive i nuovi valori convertiti a 16 but in view
    for (i = 0; i < buffer.length; i++) {
        for (let channel = 0; channel < numOfChan; channel++) {
            sample = buffer.getChannelData(channel)[i] / maxVal;
            sample = Math.max(-1, Math.min(1, sample));
            sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF; // convert to 16-bit
            view.setInt16(pos, sample, true);
            pos += 2;
        }
    }

    return new Blob([bufferArray], { type: 'audio/wav' });

    function setUint16(data) {
        view.setUint16(pos, data, true);
        pos += 2;
    }

    function setUint32(data) {
        view.setUint32(pos, data, true);
        pos += 4;
    }
}

document.getElementById("start-rec-id").addEventListener('click', startRecording);
document.getElementById("stop-rec-id").addEventListener('click', stopRecording);
