import type { ISourceOptions } from "tsparticles-slim";

export const particlesConfig: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "transparent", // Make background transparent
    },
  },
  fullScreen: {
    enable: false, // Important: set to false to confine to parent container
    zIndex: -1,    // Ensure it's behind other content
  },
  fpsLimit: 60, // Optional: can be lowered to save resources
  interactivity: {
    events: {
      onClick: {
        enable: false, // Disable click events
        mode: "push",
      },
      onHover: {
        enable: true, // Enable hover events
        mode: "connect", // Connect particles on hover
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      connect: {
        distance: 80, // Distance to start connecting lines
        links: {
          opacity: 0.15, // Reduced opacity of the connecting lines for more subtlety
        },
        radius: 100, // Radius for hover detection
      },
      grab: { // Kept for mode: "grab" if "connect" is too much
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 0.3,
        },
      },
      push: {
        quantity: 4,
      },
      repulse: { // Example: for repulsing particles
        distance: 100,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
      },
    },
  },
  particles: {
    color: {
      value: "hsl(210, 50%, 50%)", // Use HSL value for primary color
      animation: {
        enable: false, // No color animation for subtlety
      },
    },
    links: {
      color: {
        value: "hsl(210, 50%, 50%)", // Line color, using HSL value for primary
      },
      distance: 150,
      enable: false, // Links enabled by interactivity (onHover: "connect") instead of always on
      opacity: 0.2,
      width: 1,
    },
    collisions: {
      enable: false, // Disable collisions for simplicity and performance
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out", // Particles disappear when they go out of bounds
      },
      random: true,
      speed: 0.2, // Slow movement
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1200, // Higher area = fewer particles
      },
      value: 60, // Target number of particles
    },
    opacity: {
      value: { min: 0.1, max: 0.4 }, // Subtle opacity
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 }, // Small particle size
      animation: {
        enable: false, // No size animation
      },
    },
  },
  detectRetina: true,
};
