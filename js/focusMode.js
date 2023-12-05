// This script enables a Focus Mode to highlight a specific text section

function toggleFocusMode() {
    const selectedText = window.getSelection().toString();
    if (!selectedText) {
        alert('Please select a text section to focus on.');
        return;
    }

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '1000';
    overlay.style.pointerEvents = 'none';

    const focusedElement = document.createElement('div');
    focusedElement.textContent = selectedText;
    focusedElement.style.position = 'fixed';
    focusedElement.style.top = '50%';
    focusedElement.style.left = '50%';
    focusedElement.style.transform = 'translate(-50%, -50%)';
    focusedElement.style.color = 'white';
    focusedElement.style.zIndex = '1001';
    focusedElement.style.fontSize = '1.5em';
    focusedElement.style.padding = '20px';
    focusedElement.style.border = '1px solid white';
    focusedElement.style.backgroundColor = 'black';

    document.body.appendChild(overlay);
    document.body.appendChild(focusedElement);

    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(focusedElement);
    });
}

// Add event listener to toggle focus mode on user action (e.g., button click)
// This is a placeholder - replace with actual event listener as needed
document.addEventListener('dblclick', toggleFocusMode);
