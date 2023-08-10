// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the reference to the div with the ID 'avHeaderLogo'
  var logoDiv = document.getElementById("avHeaderLogo");

  // Create an <object> element
  var svgObject = document.createElement("object");

  // Set the data attribute to the path of your SVG file
  svgObject.setAttribute("data", "/resources/svg-files/av-logo.svg");

  // Set the type attribute to 'image/svg+xml'
  svgObject.setAttribute("type", "image/svg+xml");

  // Append the <object> element to the logoDiv
  logoDiv.appendChild(svgObject);
});
