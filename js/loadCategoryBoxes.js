// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Sample PNG files for each category button
  const pngFiles = [
    "resources/png-files/category-1.webp",
    "resources/png-files/category-2.webp",
    "resources/png-files/category-3.webp",
    "resources/png-files/category-4.webp",
    "resources/png-files/category-5.webp",
    "resources/png-files/category-6.webp",
    "resources/png-files/category-7.webp",
    "resources/png-files/category-8.webp",
    "resources/png-files/category-9.webp",
    // Add the rest of the PNG files for each category button here
  ];

  // Function to load PNG into a category button
  function loadPNGIntoButton(buttonId, pngFile) {
    // Get the reference to the category button's image div
    var buttonImageDiv = document.getElementById(buttonId);

    // Create an <img> element
    var imgElement = document.createElement("img");

    // Set the src attribute to the path of the PNG file
    imgElement.setAttribute("src", pngFile);

    // Set the alt attribute for accessibility (optional but recommended)
    imgElement.setAttribute("alt", "Category Image");

    // Set the width and height to 100% to fill the button's image div
    imgElement.style.width = "100%";
    imgElement.style.height = "100%";

    // Append the <img> element to the category button's image div
    buttonImageDiv.appendChild(imgElement);
  }

  // Load PNGs into each category button one by one
  for (let i = 0; i < pngFiles.length; i++) {
    const buttonId = `category${i + 1}`;
    const pngFile = pngFiles[i];
    loadPNGIntoButton(buttonId, pngFile);
  }
});
