// Array of video sources
const videoSources = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];

// Function to get a random video source
function getRandomVideoSource() {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
}

// Set the video source
document.getElementById('video-source').src = getRandomVideoSource();

// Menu toggle for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
