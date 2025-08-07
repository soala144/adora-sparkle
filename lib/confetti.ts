// lib/confetti.ts
import confetti from "canvas-confetti";

export const fireConfetti = (): void => {
  confetti({
    particleCount: 1000,
    spread: 160,
    startVelocity: 30,
    origin: { y: 0.5, x: 0.5 },
  });
};
