const descriptions = ["student", "software developer", "really cool fella"];
let currentIndex = 0;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 10000;

const descriptionElement = document.getElementById("description");
const cursorElement = document.getElementById("cursor");
let isDeleting = false;
let charIndex = 0;

function updateDescription() {
  const currentText = descriptions[currentIndex];
  const displayText = `"${currentText.substring(0, charIndex)}"`;
  descriptionElement.textContent = displayText;

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    cursorElement.classList.add("blinking");
    setTimeout(() => {
      isDeleting = true;
      cursorElement.classList.remove("blinking");
      updateDescription();
    }, pauseTime);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % descriptions.length;
  }

  setTimeout(updateDescription, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  updateDescription();
});
