const DEFAULT_BACKGROUND_URL = 'https://github.com/dhruvsgit121/jitsitestassets/blob/561e0230f2f2b56c2a4f9c63e99a74161dc7d3e8/bg.png';

function setDefaultBackground() {
    // Find the video container element that holds video streams
    const videoContainer = document.querySelector('.videocontainer');
    if (videoContainer && !videoContainer.style.backgroundImage) {
        videoContainer.style.backgroundImage = `url(${DEFAULT_BACKGROUND_URL})`;
        videoContainer.style.backgroundSize = 'cover';  // Ensure the image covers the container
    }
}

// Run this function once the page is loaded
window.addEventListener('load', function() {
    setDefaultBackground();
});

// Optionally, keep checking to enforce the background every 500ms (for dynamic changes)
setInterval(setDefaultBackground, 500);
