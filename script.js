const descriptions = ["student", "software developer", "really cool fella"];
let currentIndex = 0;
let typingSpeed = 100; // Typing (ms)
let deletingSpeed = 50; // Deleting (ms)
let pauseTime = 1000; // Pause (ms)

const descriptionElement = document.getElementById("description");
let isDeleting = false;
let charIndex = 0;

function updateDescription() {
  let currentText = descriptions[currentIndex];
  let displayText;

  if (isDeleting) {
    // Handle deleting
    charIndex--;
    displayText = `"${currentText.substring(0, charIndex)}"`;
  } else {
    // Handle typing
    charIndex++;
    displayText = `"${currentText.substring(0, charIndex)}"`;
  }

  descriptionElement.textContent = displayText;

  // Blinking
  if (!isDeleting && charIndex === currentText.length) {
    descriptionElement.textContent += "|";
    setTimeout(() => {
      isDeleting = true;
      updateDescription();
    }, pauseTime);
    return;
  }

  // Next description
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % descriptions.length;
  }


  setTimeout(updateDescription, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  descriptionElement.textContent = "|"; 
  updateDescription();
});
