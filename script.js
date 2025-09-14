// --- Get elements ---
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const links = navLinks.querySelectorAll("a");

// --- Get navbar height ---
function getNavbarHeight() {
  return parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
  );
}

// --- Toggle menu on mobile ---
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  document.body.classList.toggle('no-scroll'); // lock/unlock background scroll
});

// --- Close menu on link click ---
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });
});

// --- Highlight active nav link on scroll ---
function highlightNav() {
  let current = "";
  const scrollPos = window.scrollY + getNavbarHeight() + 1; // +1 to avoid rounding issues

  // Loop through all sections
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollPos >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // Update active class
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// --- Events ---
window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);
