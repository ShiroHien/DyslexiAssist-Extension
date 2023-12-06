// This script changes the font of the webpage to OpenDyslexic

function changeFontToOpenDyslexic() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @font-face {
            font-family: 'OpenDyslexic';
            src: url('fonts/OpenDyslexic/OpenDyslexic.ttf') format('opentype');
        }
        body, p, h1, h2, h3, h4, h5, h6, span, a, div {
            font-family: 'OpenDyslexic', sans-serif !important;
        }
    `;
    document.head.appendChild(styleElement);
}

// Run the function to change the font
changeFontToOpenDyslexic();

// Listen for messages from the settings script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "changeFont") {
        const newFont = message.font;
        applyFontChange(newFont);
    }
    if (message.action === "changeColors") {
        // Code to change colors
        document.body.style.backgroundColor = message.bgColor;
        document.body.style.color = message.textColor;
        // You may need to apply this to other elements as well
    }
});

function applyFontChange(fontName) {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule(`
        body, p, h1, h2, h3, h4, h5, h6, span, a, div {
            font-family: 'Arial' !important;
        }
    `, 0);
}