function textToSpeech() {

    const elemPlayButton = document.querySelector("#play-button");
    const elemVoice = document.querySelector("#voice");
    const elemText = document.querySelector("#aboutText");

    elemPlayButton.addEventListener("click", function textToSpeech() {

        let url = "https://ndzud7qq0k.execute-api.ap-southeast-1.amazonaws.com/default/poly-text-to-speech";
        url += "?voice=" + encodeURIComponent(elemVoice.value);
        url += "&text=" + encodeURIComponent(elemText.value);

        const elemAudio = document.createElement("AUDIO");
        document.body.appendChild(elemAudio);
        elemAudio.controls = true;
        elemAudio.src = url;
        elemAudio.play();

    })
}