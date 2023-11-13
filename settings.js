document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('settingsForm').addEventListener('submit', saveOptions);

function saveOptions(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the values from your form inputs
    var font = document.getElementById('fontSelect').value;
    var bgColor = document.getElementById('bgColor').value;
    var textColor = document.getElementById('textColor').value;

    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({
        'font': font,
        'bgColor': bgColor,
        'textColor': textColor
    }, function() {
        // Check for errors
        if (chrome.runtime.lastError) {
            console.error(`Error saving settings: ${chrome.runtime.lastError}`);
        } else {
            console.log('Settings saved successfully.');
            // Apply settings immediately
            applySettings(font, bgColor, textColor);
        }
    });
}

// Function to apply settings immediately
function applySettings(font, bgColor, textColor) {
    // Code to apply the font
    if (font) {
        // Send a message to the content script to change the font
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "changeFont", font: font});
        });
    }
    
    // Code to apply background and text color
    if (bgColor && textColor) {
        // Send a message to the content script to change colors
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "changeColors",
                bgColor: bgColor,
                textColor: textColor
            });
        });
    }
}

// Bind the saveOptions function to the form submission
document.getElementById('settingsForm').addEventListener('submit', saveOptions);


function loadOptions() {
    chrome.storage.sync.get(['font', 'backgroundColor', 'textColor'], function(items) {
        document.getElementById('fontSelect').value = items.font || 'OpenDyslexic';
        document.getElementById('bgColor').value = items.backgroundColor || '#FFFFFF';
        document.getElementById('textColor').value = items.textColor || '#000000';
    });
}
