const textElement = document.querySelector(".skillschangetext");
const texts = ["Front-end Developer", "Back-end Developer", "React Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 300); // Small delay before typing new word
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed control
    }
}

typeEffect();