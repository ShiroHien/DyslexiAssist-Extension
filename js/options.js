document.getElementById('optionsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from form
    var font = document.getElementById('fontSelect').value;
    var size = document.getElementById('sizeSelect').value;
    var spacing = document.getElementById('spacingSlider').value;
    var interline = document.getElementById('interlineSlider').value;
    var textColor = document.getElementById('textColorPicker').value;
    var bgColor = document.getElementById('bgColorPicker').value;

    // Save settings in chrome.storage
    chrome.storage.local.set({
        font: font,
        size: size,
        spacing: spacing,
        interline: interline,
        textColor: textColor,
        bgColor: bgColor
    }, function() {
        console.log('Settings saved');
        // Implement any notification for successful save
    });
});

// Load saved settings when the options page is opened
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['font', 'size', 'spacing', 'interline', 'textColor', 'bgColor'], function(result) {
        document.getElementById('fontSelect').value = result.font || 'OpenDyslexic';
        document.getElementById('sizeSelect').value = result.size || '16px';
        document.getElementById('spacingSlider').value = result.spacing || '0';
        document.getElementById('interlineSlider').value = result.interline || '1.5';
        document.getElementById('textColorPicker').value = result.textColor || '#000000';
        document.getElementById('bgColorPicker').value = result.bgColor || '#F9ECCB';
    });
});
