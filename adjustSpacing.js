// This script allows for adjustment of letter and line spacing

function applySpacing(letterSpacing, lineHeight) {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        body, p, h1, h2, h3, h4, h5, h6, span, a, div {
            letter-spacing: ${letterSpacing} !important;
            line-height: ${lineHeight} !important;
        }
    `;
    document.head.appendChild(styleElement);
}

// Example spacing values - these can be dynamically set based on user preferences
const userPreferredLetterSpacing = '0.05em'; // Slightly increased letter spacing
const userPreferredLineHeight = '1.6';       // Increased line height

// Apply the custom spacing
applySpacing(userPreferredLetterSpacing, userPreferredLineHeight);
