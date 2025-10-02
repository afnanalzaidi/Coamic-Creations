document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const toggle = document.querySelector('.nav-toggle');
  const navContent = document.querySelector('.nav-content');

  if (toggle && navContent) {
    toggle.addEventListener('click', () => {
      navContent.classList.toggle('active');
    });
  }
});

function goToPage(page) {
  window.location.href = page;
}
