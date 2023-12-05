document.addEventListener('DOMContentLoaded', function() {
    var fontSelector = document.getElementById('fontSelection');
    var bgColorSelector = document.getElementById('bgColorSelection');
    var textColorSelector = document.getElementById('textColorSelection');
    var saveButton = document.getElementById('saveSettings');

    saveButton.addEventListener('click', function() {
        var selectedFont = fontSelector.value;
        var selectedBgColor = bgColorSelector.value;
        var selectedTextColor = textColorSelector.value;

        document.body.style.fontFamily = selectedFont;
        document.body.style.backgroundColor = selectedBgColor;
        document.body.style.color = selectedTextColor;

        // Save the preferences
        localStorage.setItem('preferredFont', selectedFont);
        localStorage.setItem('preferredBgColor', selectedBgColor);
        localStorage.setItem('preferredTextColor', selectedTextColor);

        // Notify the user that settings have been saved
        alert("Settings saved!");
    });

    // Load any saved preferences
    var savedFont = localStorage.getItem('preferredFont');
    var savedBgColor = localStorage.getItem('preferredBgColor');
    var savedTextColor = localStorage.getItem('preferredTextColor');

    if (savedFont) {
        document.body.style.fontFamily = savedFont;
        fontSelector.value = savedFont;
    }
    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor;
        bgColorSelector.value = savedBgColor;
    }
    if (savedTextColor) {
        document.body.style.color = savedTextColor;
        textColorSelector.value = savedTextColor;
    }
});
