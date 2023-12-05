// This script enables a minimalist reading mode by hiding distracting elements

function enableMinimalistReadingMode() {
    // List of selectors for elements that are often considered distracting
    const distractingElementsSelectors = [
        'img',          // Images
        'video',        // Videos
        '.ad',          // Class-based ads
        '[id^="ad"]',   // ID-based ads
        'iframe',       // Embedded content
        // Add more selectors as needed
    ];

    distractingElementsSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.display = 'none'; // Hide the elements
        });
    });
}

// Run the function to enable minimalist reading mode
enableMinimalistReadingMode();
