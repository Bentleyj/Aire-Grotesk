function connectAudioDevice() {
    // patch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext

    // grab an audio context
    audioContext = new AudioContext()

    // create an AnalyzerNode object.
    analyser = audioContext.createAnalyser()

    // Attempt to get audio input
    try {
        // monkeypatch getUserMedia
        navigator.getUserMedia = 
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia

        // ask for an audio input
        navigator.getUserMedia(
        {
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            },
        }, onMicrophoneGranted, onMicrophoneDenied)
    } catch (e) {
        alert('getUserMedia threw exception :' + e)
    }
}

function processDataBuffer(buffer, length) {
    for(var i = 0; i < length; i++) {
        dataBuffer[i] = lerp(dataBuffer[i], buffer[i], 0.3);
    }
}

function updateAudio() {
    var bufferLength = analyser.frequencyBinCount

    var dataArray = new Uint8Array(bufferLength)

    analyser.getByteFrequencyData(dataArray)
}