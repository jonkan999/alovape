// Get all elements with the class "buy-button"
const buyButtons = document.querySelectorAll(".buy-button");

// Add a click event listener to each button
buyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Create and display the popup
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent =
      "Tack för visat intresse! Alo Vape är fortfarande under konstruktion och vi har ännu inte byggt in en betalningsfunktion. \n Välkommen tillbaka inom kort så ska vi se till att ha allt på plats, så du kan åtnjuta smidigheten i att beställa hem dina engångs vapes online!";

    document.body.appendChild(popup);

    // Remove the popup after a few seconds (optional)
    setTimeout(function () {
      document.body.removeChild(popup);
    }, 6000); // Remove after 5 seconds (adjust as needed)
  });
});
