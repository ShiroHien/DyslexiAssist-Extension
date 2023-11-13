// This script changes the font of the webpage to OpenDyslexic

function changeFontToOpenDyslexic() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @font-face {
            font-family: 'OpenDyslexic';
            src: url('https://cdn.jsdelivr.net/gh/antijingoist/open-dyslexic/fonts/OpenDyslexic-Regular.otf') format('opentype');
        }
        body, p, h1, h2, h3, h4, h5, h6, span, a, div {
            font-family: 'OpenDyslexic', sans-serif !important;
        }
    `;
    document.head.appendChild(styleElement);
}

// Run the function to change the font
changeFontToOpenDyslexic();

chrome.storage.sync.get('font', function(data) {
    if (data.font) {
        // Apply the font setting
        changeFontTo(data.font);
    }
});

function changeFontTo(fontName) {
    // Your code to change the font
}

