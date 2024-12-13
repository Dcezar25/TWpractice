document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById("cookie-popup");
    const confirmationPopup = document.getElementById("confirmation-popup");

    const cookieYes = document.getElementById("cookie-yes");
    const cookieNo = document.getElementById("cookie-no");
    const confirmYes = document.getElementById("confirm-yes");
    const confirmNo = document.getElementById("confirm-no");

    const popupClose = document.getElementById("popup-close");
    const confirmationClose = document.getElementById("confirmation-close");

    // Dragging logic
    let isDragging = false;
    let offsetX, offsetY;

    cookiePopup.addEventListener("mousedown", (e) => {
        if (e.target.closest(".popup-header")) {
            isDragging = true;
            offsetX = e.clientX - cookiePopup.offsetLeft;
            offsetY = e.clientY - cookiePopup.offsetTop;
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            cookiePopup.style.left = `${e.clientX - offsetX}px`;
            cookiePopup.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // Cookie popup interactions
    cookieNo.addEventListener("click", () => {
        location.reload();
    });

    cookieYes.addEventListener("click", () => {
        cookiePopup.classList.add("hidden");
        confirmationPopup.classList.remove("hidden");
    });

    confirmNo.addEventListener("click", () => {
        location.reload();
    });

    confirmYes.addEventListener("click", () => {
        alert("Cookies accepted!");
        confirmationPopup.classList.add("hidden");
    });

    // Close buttons
    popupClose.addEventListener("click", () => {
        cookiePopup.classList.add("hidden");
    });

    confirmationClose.addEventListener("click", () => {
        confirmationPopup.classList.add("hidden");
    });
});
