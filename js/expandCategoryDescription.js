document.addEventListener("DOMContentLoaded", function () {
  const categoryDescription = document.getElementById("categoryDescription");
  const expandButton = document.getElementById("expandButton");

  const maxHeight = "5rem"; // Initial height when collapsed
  const expandedHeight = categoryDescription.scrollHeight + 13 + "px"; // Height when fully expanded

  // Function to toggle the expansion
  function toggleExpand() {
    if (!categoryDescription.classList.contains("expanded")) {
      categoryDescription.style.maxHeight = expandedHeight;
      expandButton.innerHTML = `        <ion-icon
      class="ion-icon menu-icon"
      name="chevron-up-outline"
    ></ion-icon>`;
      categoryDescription.classList.add("expanded"); // Add the 'expanded' class
    } else {
      categoryDescription.style.maxHeight = maxHeight;
      expandButton.innerHTML = `        <ion-icon
      class="ion-icon menu-icon"
      name="chevron-down-outline"
    ></ion-icon>`;
      categoryDescription.classList.remove("expanded"); // Add the 'expanded' class
    }
  }

  // Event listener for the button click
  expandButton.addEventListener("click", toggleExpand);
});
