window.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');

    // Function to toggle play/pause when clicking on the video
    videoPlayer.addEventListener('click', () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });
});
