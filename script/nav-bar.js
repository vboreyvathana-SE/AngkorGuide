document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("navbar");

    if (placeholder) {
        fetch("/Tourism/nav-bar.html") 
            .then(response => {
                if (!response.ok) throw new Error("Failed to load navbar");
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;

                initSidebar(); 
            })
            .catch(error => console.error("Error loading the navbar:", error));
    }
});

function initSidebar() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navBar = document.querySelector(".nav-bar");

    if (menuToggle && navBar) {
        menuToggle.addEventListener("click", function () {
            navBar.classList.toggle("active"); 
        });
    }
}