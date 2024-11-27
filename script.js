const descriptions = ["student", "software developer", "really cool fella"];
let currentIndex = 0;

function updateDescription() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = descriptions[currentIndex];
  currentIndex = (currentIndex + 1) % descriptions.length;

  setTimeout(() => {
    descriptionElement.textContent = "";
    setTimeout(updateDescription, 500);
  }, 2000);
}

document.addEventListener("DOMContentLoaded", updateDescription);
