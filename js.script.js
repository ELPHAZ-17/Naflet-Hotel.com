// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Image Carousel for rooms section
let currentIndex = 0;
const roomImages = document.querySelectorAll(".room img");

function showNextImage() {
    roomImages[currentIndex].style.opacity = "0"; // Hide current image
    currentIndex = (currentIndex + 1) % roomImages.length; // Go to the next image
    roomImages[currentIndex].style.opacity = "1"; // Show next image
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Pop-up Booking Form Animation
const bookButton = document.querySelector('.btn');
const bookingForm = document.querySelector('.booking');

bookButton.addEventListener('click', () => {
    bookingForm.classList.toggle('show-form');
});