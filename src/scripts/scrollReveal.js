export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });
  const customAnimation = { delay: 40, duration: 600 };

  targetElements.forEach(({ element, animation }) => {
    const mergedAnimation = Object.assign({}, defaultProps, customAnimation, animation);
    ScrollReveal().reveal(element, mergedAnimation);
  });
}
