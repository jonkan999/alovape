// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the reference to the message box element
  const messageBox = document.querySelector(".messageBox");

  // Sample message list
  const messageList = [
    "Fri frakt",
    "السجائر على الإنترنت",
    "Engångsvapes",
    "Kvalitet till bra pris",
    "Disposable vapes",
    "المتاح السجائر الإلكترونية",
    "النيكوتين السجائر الإلكترونية",
    "E-cigaretter",
    "Energipåsar",
    "Nikotinpåsar",
    "Alltid bra priser",
    "Tobaksfria alternativ",
    "Snabb leverans",
  ];

  // Generate HTML for all messages in leftMessageBox and rightMessageBox
  const messageHTML = messageList
    .map(
      (message) =>
        `<h2 class="leftMessageBox">${message}</h2> <h2 class="rightMessageBox">${message}</h2>`
    )
    .join("");

  // Set the HTML content of the message box
  messageBox.innerHTML = `<div id="avHeaderLogo"></div> ` + messageHTML;

  // Set initial message indices for left and right message boxes
  let leftIndex = 0;
  let rightIndex = 3;

  // Function to show the next message in the left message box
  function showNextLeftMessage() {
    // Get left message box
    const leftMessageBoxes = document.querySelectorAll(".leftMessageBox");
    // Hide the current message item
    leftMessageBoxes[leftIndex].style.display = "none";

    // Increment the index
    leftIndex = (leftIndex + 1) % leftMessageBoxes.length;

    // Show the next message item
    leftMessageBoxes[leftIndex].style.display = "block";
  }

  function showNextRightMessage() {
    // Get left message box
    const rightMessageBoxes = document.querySelectorAll(".rightMessageBox");
    // Hide the current message item
    rightMessageBoxes[rightIndex].style.display = "none";

    // Increment the index
    rightIndex = (rightIndex + 1) % rightMessageBoxes.length;

    // Show the next message item
    rightMessageBoxes[rightIndex].style.display = "block";
  }

  // Show the first messages
  showNextLeftMessage();
  showNextRightMessage();

  // Start the timer to show the next messages
  setInterval(showNextLeftMessage, 7000);
  setInterval(showNextRightMessage, 7000);
});
