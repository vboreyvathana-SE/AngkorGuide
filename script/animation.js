const cards = document.querySelectorAll('.province-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // only trigger once
    }
  });
}, {
  threshold: 0.2 // fires when 20% of the card is visible
});

cards.forEach(card => observer.observe(card));