import confetti from "canvas-confetti"; // Importing the confetti library from "canvas-confetti"

// Setting the total count of confetti particles
const count = 200;
// Default configuration for confetti
const defaults = {
  origin: { y: 0.7 },
  zIndex: 1500
};

// Function to generate confetti with custom options
function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

// Exporting function to trigger confetti explosion
export const fireConfetti = () => {
  // Fire confetti with different particle ratios and options
  fire(0.25, {
    spread: 26,
    startVelocity: 55
  });
  fire(0.2, {
    spread: 60
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45
  });
};
