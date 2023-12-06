chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.readerMode !== undefined) {
        toggleReaderMode(request.readerMode);
    }
    if (request.focusLine !== undefined) {
        toggleFocusLine(request.focusLine);
    }
});


chrome.storage.local.get(['textColor', 'bgColor'], function(result) {
    if (result.textColor && result.bgColor) {
        // Apply the colors to the body of each webpage
        document.body.style.color = result.textColor;
        document.body.style.backgroundColor = result.bgColor;
    }
});


function toggleReaderMode(isOn) {
    if (isOn) {
        // Hide media elements
        Array.from(document.images).forEach(img => img.style.display = 'none');
        Array.from(document.querySelectorAll('video, audio, iframe')).forEach(el => el.style.display = 'none');
    } else {
        // Show media elements
        Array.from(document.images).forEach(img => img.style.display = '');
        Array.from(document.querySelectorAll('video, audio, iframe')).forEach(el => el.style.display = '');
    }
}


function toggleFocusLine(isOn) {
    let ruler = document.getElementById('ruler');
    if (isOn) {
        if (!ruler) {
            ruler = document.createElement('div');
            ruler.id = 'ruler';
            ruler.style.height = '1.4em';
            ruler.style.backgroundColor = 'rgba(0,0,0,0.1)';
            ruler.style.position = 'absolute';
            ruler.style.top = '-100px';
            ruler.style.zIndex = '10000';
            document.body.appendChild(ruler);
        }
        ruler.style.display = 'block';

        document.body.addEventListener('mousemove', function(event) {
            ruler.style.top = (event.pageY - 30) + 'px';
            ruler.style.width = window.innerWidth + 'px';
        });
    } else {
        if (ruler) {
            ruler.style.display = 'none';
        }
    }
}



// Check the saved state for both modes when the page loads
chrome.storage.local.get(['readerMode', 'focusLine'], function(result) {
    if (result.readerMode !== undefined) {
        toggleReaderMode(result.readerMode);
    }
    if (result.focusLine !== undefined) {
        toggleFocusLine(result.focusLine);
    }
});
