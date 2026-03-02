// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in Animation
const sections = document.querySelectorAll('.section');

function revealSections() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('show');
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Theme Toggle
const toggle = document.getElementById('theme-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggle.textContent =
      document.body.classList.contains('light-mode') ? "🌙" : "☀️";
  });
}
