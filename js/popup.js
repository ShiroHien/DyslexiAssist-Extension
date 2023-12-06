document.addEventListener('DOMContentLoaded', function() {
    // READER MODE
    var readerModeToggle = document.getElementById('readerModeToggle');
    // Load the saved state and set the toggle
    chrome.storage.local.get(['readerMode'], function(result) {
        if (result.readerMode !== undefined) {
            readerModeToggle.checked = result.readerMode;
        }
    });
    readerModeToggle.addEventListener('change', function(event) {
        let isReaderModeOn = event.target.checked;
        // Save the state to chrome.storage.local
        chrome.storage.local.set({readerMode: isReaderModeOn}, function() {
            console.log('Reader Mode state is saved:', isReaderModeOn);
        });
        // Send a message to the active tab to toggle Reader Mode
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {readerMode: isReaderModeOn});
        });
    });



});

// Helper function to send a message to the content script
function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}


document.getElementById('readerModeToggle').addEventListener('change', function(event) {
    let isReaderModeOn = event.target.checked;

    // Save the state to chrome.storage.local
    chrome.storage.local.set({readerMode: isReaderModeOn}, function() {
        console.log('Reader Mode state is saved:', isReaderModeOn);
    });

    // Send a message to the active tab to toggle Reader Mode
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {readerMode: isReaderModeOn});
    });
});


document.getElementById('focusLineToggle').addEventListener('change', function(event) {
    let isFocusLineOn = event.target.checked;

    // Save the state to chrome.storage.local
    chrome.storage.local.set({focusLine: isFocusLineOn}, function() {
        console.log('Focus Line state is saved:', isFocusLineOn);
    });

    // Send a message to the active tab to toggle Focus Line
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {focusLine: isFocusLineOn});
    });
});


// Save the TTS state when toggled
document.getElementById('textToSpeechToggle').addEventListener('change', function(event) {
    chrome.storage.local.set({textToSpeechEnabled: event.target.checked});
});

// Set the toggle state when the popup is loaded
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['textToSpeechEnabled'], function(result) {
        if (result.textToSpeechEnabled !== undefined) {
            document.getElementById('textToSpeechToggle').checked = result.textToSpeechEnabled;
        }
    });
});



// FOOTER
document.getElementById('settingsIcon').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
});
