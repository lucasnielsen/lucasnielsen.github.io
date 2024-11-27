const descriptions = ["student", "software developer", "really cool fella"];
let currentIndex = 0;
let typingSpeed = 100; // (ms per char)
let deletingSpeed = 50; // (ms per char)
let pauseTime = 1000; // (ms)

const descriptionElement = document.getElementById("description");
const cursorElement = document.getElementById("cursor");
let isDeleting = false;
let charIndex = 0;

function updateDescription() {
  let currentText = descriptions[currentIndex];
  let displayText;

  if (isDeleting) {
    // Deleting
    charIndex--;
    displayText = `"${currentText.substring(0, charIndex)}"`;
  } else {
    // Typing
    charIndex++;
    displayText = `"${currentText.substring(0, charIndex)}"`;
  }

  descriptionElement.textContent = displayText;

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
      cursorElement.classList.add("blinking"); // Enable blinking during pause
      updateDescription();
    }, pauseTime);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % descriptions.length;
  }

  cursorElement.classList.remove("blinking");

  setTimeout(updateDescription, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  updateDescription();
});
