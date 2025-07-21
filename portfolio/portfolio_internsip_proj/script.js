document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out!");
});
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only once
      }
    });
  }, {
    threshold: 0.1
  });

  const hiddenElements = document.querySelectorAll('.project.hidden');
  hiddenElements.forEach(el => observer.observe(el));
});
