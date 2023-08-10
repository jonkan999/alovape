// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Sample PNG files for each marketing box
  const pngFiles = [
    "resources/png-files/marketing-1.png",
    "resources/png-files/marketing-2.png",
    "resources/png-files/marketing-3.png",
    "resources/png-files/marketing-4.png",
  ];

  // Function to load PNG into a marketing box
  function loadPNGIntoBox(boxId, pngFile) {
    // Get the reference to the marketing box
    var boxDiv = document.getElementById(boxId);

    // Create an <img> element
    var imgElement = document.createElement("img");

    // Set the src attribute to the path of the PNG file
    imgElement.setAttribute("src", pngFile);

    // Set the alt attribute for accessibility (optional but recommended)
    imgElement.setAttribute("alt", "Marketing Image");

    // Set the width and height to 100% to fill the box
    imgElement.style.width = "100%";
    imgElement.style.height = "100%";

    // Append the <img> element to the marketing box
    boxDiv.appendChild(imgElement);
  }

  // Load PNGs into each marketing box one by one
  for (let i = 0; i < pngFiles.length; i++) {
    const boxId = `marketingBox${i + 1}`;
    const pngFile = pngFiles[i];
    loadPNGIntoBox(boxId, pngFile);
  }
});
