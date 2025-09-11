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

// Hero Subtitle Text Rotator
document.addEventListener("DOMContentLoaded", () => {
  const mainHeroSubtitle = document.getElementById("mainHeroSubtitle");

  if (!mainHeroSubtitle) {
    console.error('Element with ID "mainHeroSubtitle" not found');
    return;
  }

  const subtitleVariations = [
    "Exclusive tours, hand-picked accommodations, and personalized itineraries for travelers who seek the best.",
    "Discover breathtaking destinations with luxury accommodations and expertly crafted travel experiences.",
    "Premium travel experiences featuring world-class hotels, private guides, and unforgettable adventures.",
    "Curated journeys to extraordinary places with five-star service and attention to every detail.",
    "Luxury escapes designed for discerning travelers who demand excellence in every moment.",
    "Bespoke adventures combining cultural immersion, luxury comfort, and once-in-a-lifetime experiences.",
    "Elite travel packages featuring exclusive access, premium accommodations, and personalized service.",
    "Sophisticated journeys to the world's most desirable destinations with unmatched luxury and style.",
    "Handcrafted travel experiences offering authentic culture, luxury amenities, and expert local guidance.",
    "Premium destinations await with luxury resorts, private excursions, and memories that last forever.",
  ];

  let currentIndex = 0;

  function changeSubtitle() {
    // Add fade out classes
    mainHeroSubtitle.style.opacity = "0";
    mainHeroSubtitle.style.transform = "translateY(-15px)";

    setTimeout(() => {
      // Change text
      currentIndex = (currentIndex + 1) % subtitleVariations.length;
      mainHeroSubtitle.textContent = subtitleVariations[currentIndex];

      // Add fade in classes
      mainHeroSubtitle.style.opacity = "1";
      mainHeroSubtitle.style.transform = "translateY(0)";
    }, 300); // Wait for fade out animation
  }

  // Add smooth transition styles
  mainHeroSubtitle.style.transition = "all 0.3s ease-in-out";

  // Change subtitle every 4 seconds
  setInterval(changeSubtitle, 4000);
});

// Alternative version with more advanced animation
class SubtitleAnimator {
  constructor(elementId, texts, interval = 4000) {
    this.element = document.getElementById(elementId);
    this.texts = texts;
    this.interval = interval;
    this.currentIndex = 0;

    if (this.element) {
      this.init();
    } else {
      console.error(`Element with ID "${elementId}" not found`);
    }
  }

  init() {
    // Set initial styles
    this.element.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    this.startAnimation();
  }

  startAnimation() {
    setInterval(() => {
      this.animateTextChange();
    }, this.interval);
  }

  animateTextChange() {
    // Fade out with slide up
    this.element.style.opacity = "0";
    this.element.style.transform = "translateY(-20px) scale(0.98)";

    setTimeout(() => {
      // Change text
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.element.textContent = this.texts[this.currentIndex];

      // Fade in with slide down
      this.element.style.opacity = "1";
      this.element.style.transform = "translateY(0) scale(1)";
    }, 400);
  }
}

// Usage with advanced animator:
/*
const subtitles = [
  "Exclusive tours, hand-picked accommodations, and personalized itineraries for travelers who seek the best.",
  "Discover breathtaking destinations with luxury accommodations and expertly crafted travel experiences.",
  "Premium travel experiences featuring world-class hotels, private guides, and unforgettable adventures.",
  "Curated journeys to extraordinary places with five-star service and attention to every detail.",
  "Luxury escapes designed for discerning travelers who demand excellence in every moment.",
  "Bespoke adventures combining cultural immersion, luxury comfort, and once-in-a-lifetime experiences.",
  "Elite travel packages featuring exclusive access, premium accommodations, and personalized service.",
  "Sophisticated journeys to the world's most desirable destinations with unmatched luxury and style.",
  "Handcrafted travel experiences offering authentic culture, luxury amenities, and expert local guidance.",
  "Premium destinations await with luxury resorts, private excursions, and memories that last forever."
];

new SubtitleAnimator('mainHeroSubtitle', subtitles, 4000);
*/
