// This script adds text-to-speech functionality

function speakText(text) {
    if (!text) {
        console.log("No text provided for speech synthesis.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function getTextToSpeak() {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        speakText(selectedText);
    } else {
        // Speak the entire body text if no specific text is selected
        speakText(document.body.innerText);
    }
}

// Add event listener to trigger text-to-speech on user action (e.g., button click)
// This is a placeholder - replace with actual event listener as needed
document.addEventListener('dblclick', getTextToSpeak);
