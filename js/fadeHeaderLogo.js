document.addEventListener("DOMContentLoaded", function () {
  // Get the element by its ID
  const avHeaderLogo = document.getElementById("avHeaderLogo");
  if (!avHeaderLogo) {
    console.error("Element with ID 'avHeaderLogo' not found.");
    return;
  }

  const objectTag = avHeaderLogo.querySelector("object");
  let opacity = 1;

  // Function to handle the fade-out effect
  function fadeOut() {
    // Gradually decrease the opacity
    opacity -= 0.02; // Adjust the step size as needed
    objectTag.style.opacity = opacity;

    // Clear the interval when the opacity reaches 0
    if (opacity <= 0) {
      clearInterval(fadeInterval);
    }
  }

  // Function to handle scroll event
  function handleScroll() {
    // If the page is scrolled beyond the top (y > 0), start the fade-out effect
    if (window.pageYOffset > 0) {
      if (!fadeInterval) {
        fadeInterval = setInterval(fadeOut, 400 / 50); // 50 steps for 0.4 seconds
      }
    } else {
      // If the page is scrolled back to the top, reset the opacity and clear the interval
      opacity = 1;
      objectTag.style.opacity = opacity;
      clearInterval(fadeInterval);
      fadeInterval = null;
    }
  }

  let fadeInterval = null;
  // Attach the handleScroll function to the scroll event
  window.addEventListener("scroll", handleScroll);
});
