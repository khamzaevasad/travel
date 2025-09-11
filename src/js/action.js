function typeText(element, text, speed = 80) {
  let i = 0;
  element.style.opacity = "1";

  function type() {
    if (i < text.length) {
      element.innerHTML =
        text.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(type, speed);
    } else {
      // Remove cursor when done
      setTimeout(() => {
        element.innerHTML = text;
      }, 500);
    }
  }
  type();

  return new Promise((resolve) => {
    setTimeout(resolve, text.length * speed + 1000);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  // Type title first
  //   await typeText(title, " Popular Destinations!", 100);

  // Type description after title is done
  setTimeout(() => {
    typeText(
      description,
      "Discover the world's most beautiful places with our curated tour packages",
      40
    );
  }, 500);
});

// Hero Title Text Rotator
document.addEventListener("DOMContentLoaded", () => {
  const mainHeroTitle = document.getElementById("mainHeroTitle");

  if (!mainHeroTitle) {
    console.error('Element with ID "mainHeroTitle" not found');
    return;
  }

  const titleVariations = [
    "Travel in Comfort and Style",
    "Discover Luxury Adventures",
    "Experience Premium Journeys",
    "Explore the World in Elegance",
    "Create Unforgettable Memories",
    "Journey Beyond Ordinary",
    "Luxury Travel Redefined",
    "Where Dreams Meet Reality",
    "Premium Adventures Await",
    "Escape to Extraordinary Places",
  ];

  let currentIndex = 0;

  function changeTitle() {
    // Fade out animation
    mainHeroTitle.style.opacity = "0";
    mainHeroTitle.style.transform = "translateY(-20px)";

    setTimeout(() => {
      // Change text
      currentIndex = (currentIndex + 1) % titleVariations.length;
      mainHeroTitle.textContent = titleVariations[currentIndex];

      // Fade in animation
      mainHeroTitle.style.opacity = "1";
      mainHeroTitle.style.transform = "translateY(0)";
    }, 300); // Wait for fade out to complete
  }

  // Add transition CSS
  mainHeroTitle.style.transition = "all 0.3s ease-in-out";

  // Change title every 4 seconds
  setInterval(changeTitle, 4000);
});

// Alternative version with typing effect
class TypingTextRotator {
  constructor(
    elementId,
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
  ) {
    this.element = document.getElementById(elementId);
    this.texts = texts;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
    this.pauseDuration = pauseDuration;
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;

    if (this.element) {
      this.type();
    }
  }

  type() {
    const currentText = this.texts[this.currentTextIndex];

    if (this.isDeleting) {
      // Deleting characters
      this.element.textContent = currentText.substring(
        0,
        this.currentCharIndex - 1
      );
      this.currentCharIndex--;

      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        setTimeout(() => this.type(), 200);
        return;
      }

      setTimeout(() => this.type(), this.deletingSpeed);
    } else {
      // Typing characters
      this.element.textContent = currentText.substring(
        0,
        this.currentCharIndex + 1
      );
      this.currentCharIndex++;

      if (this.currentCharIndex === currentText.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.pauseDuration);
        return;
      }

      setTimeout(() => this.type(), this.typingSpeed);
    }
  }
}

// Usage examples:

// Simple fade transition (recommended)
// Just include the first part of the code above

// OR use typing effect:
/*
const heroTitles = [
  "Travel in Comfort and Style",
  "Discover Luxury Adventures",
  "Experience Premium Journeys",
  "Explore the World in Elegance",
  "Create Unforgettable Memories",
  "Journey Beyond Ordinary"
];

new TypingTextRotator('mainHeroTitle', heroTitles, 80, 40, 3000);
*/
