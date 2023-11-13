document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('settingsForm').addEventListener('submit', saveOptions);

function saveOptions(e) {
    e.preventDefault();
    chrome.storage.sync.set({
        font: document.getElementById('fontSelect').value,
        backgroundColor: document.getElementById('bgColor').value,
        textColor: document.getElementById('textColor').value
    }, function() {
        console.log('Settings saved');
    });
}

function loadOptions() {
    chrome.storage.sync.get(['font', 'backgroundColor', 'textColor'], function(items) {
        document.getElementById('fontSelect').value = items.font || 'OpenDyslexic';
        document.getElementById('bgColor').value = items.backgroundColor || '#FFFFFF';
        document.getElementById('textColor').value = items.textColor || '#000000';
    });
}
