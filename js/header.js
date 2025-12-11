
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".header");
  if (!container) return;

  try {
    const response = await fetch("/components/header.html", { cache: "no-cache" });
    container.innerHTML = await response.text();
    initNav(); // Inicializar después de inyectar
  } catch (e) {
    console.error("Error cargando header:", e);
  }
});

function initNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Cerrar menú al hacer click en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}



// Cargar footer
fetch('/components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

