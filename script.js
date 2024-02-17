// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.image-gallery');
    const overlay = document.getElementById('image-overlay');
    const overlayImage = overlay.querySelector('img');

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            overlayImage.onload = () => {
                // Rotate the image
                overlayImage.style.transform = 'rotate(90deg)';
                // Dynamically adjust the image size to fit within the viewport after rotation
                if (window.innerWidth > window.innerHeight) {
                    // Landscape viewport: limit height to prevent overflow
                    overlayImage.style.maxHeight = "100vh";
                    overlayImage.style.maxWidth = "none";
                } else {
                    // Portrait viewport: limit width to prevent overflow
                    overlayImage.style.maxWidth = "100vh"; // Use vh to maintain aspect ratio
                    overlayImage.style.maxHeight = "none";
                }
            };
            overlayImage.src = e.target.dataset.full;
            overlay.style.display = 'flex';
            overlay.style.animation = 'fadeIn 0.5s';
        }
    });

    overlay.addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.5s';
        setTimeout(() => {
            overlay.style.display = 'none';
            overlayImage.style.transform = '';
            // Reset styles to defaults
            overlayImage.style.maxWidth = "100%";
            overlayImage.style.maxHeight = "100%";
        }, 500); // Match timeout to fadeOut animation
    });
});
