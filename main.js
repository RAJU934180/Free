// List of shortened links
const links = [
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD",
    "https://linkpays.in/w8JvUD"
];

// Function to redirect to a random link
function redirectToRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    window.location.href = links[randomIndex];
}

// Function to toggle navigation menu (slide-in effect)
function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}
