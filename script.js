// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', e => {
    if (e.target.matches('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form
const form = document.querySelector('.contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending…';
    const data = new FormData(form);
    if (data.get('_gotcha')) return;
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        form.reset();
        status.textContent = 'Thanks — we’ll be in touch shortly.';
      } else {
        status.textContent = 'Something went wrong. Please email info@sargaso.ca.';
      }
    } catch {
      status.textContent = 'Network error. Please email info@sargaso.ca.';
    }
  });
}
