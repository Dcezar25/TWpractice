// document.addEventListener("DOMContentLoaded", () => {
//     const themeToggleButton = document.getElementById("theme-toggle");
//     const body = document.body;

//     themeToggleButton.addEventListener("click", () => {
//         // Toggle the 'night-theme' class on the body
//         body.classList.toggle("night-theme");

//         // Update button text
//         if (body.classList.contains("night-theme")) {
//             themeToggleButton.textContent = "Day Mode";
//         } else {
//             themeToggleButton.textContent = "Night Mode";
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;

    themeSwitch.addEventListener("change", () => {
        body.classList.toggle("night-theme");
    });
});
