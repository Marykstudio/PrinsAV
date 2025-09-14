const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const links = navLinks.querySelectorAll("a");

// --- navbar height ---
function getNavbarHeight() {
  return parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
  );}

// --- Toggle menu on mobile ---
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  document.body.classList.toggle('no-scroll'); // 🔹 lock/unlock background scroll
});

// --- Close menu on link click (and unlock scroll) ---
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    document.body.classList.remove('no-scroll'); // 🔹 make sure scroll is restored
  });
});

// --- Highlight active link on scroll ---
window.addEventListener('scroll', () => {
  let current = "";

  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - getNavbarHeight();
    if (window.scrollY >= sectionTop) { // 🔹 use scrollY instead of pageYOffset
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});