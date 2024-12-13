document.addEventListener("mousemove", (event) => {
    // Create a trail element
    const trail = document.createElement("div");
    trail.classList.add("mouse-trail");

    // Position the trail at the cursor location
    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;

    // Append the trail to the body
    document.body.appendChild(trail);

    // Remove the trail after the animation ends
    setTimeout(() => {
        trail.remove();
    }, 500); // Matches the animation duration in CSS
});
