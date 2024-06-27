export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "50px",
  duration: 400,
  desktop: true,
  mobile: true,
  reset: false,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 500,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 700,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 600,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 300,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 300,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 300,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },

  {
    element: ".card-component",
    animation: {
      delay: 200,             // Shorter delay for quicker response
      duration: 800,          // Longer duration for smoother transition
      distance: "40px",       // Adjusted distance for a balanced effect
      easing: "ease-in-out",  // Smooth easing function
      origin: "bottom",
    },
  },
];
