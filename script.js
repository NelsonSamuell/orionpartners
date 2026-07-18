// Orion Partners — site behaviour
(() => {
  // hamburger
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // subtle fade-in on scroll
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade').forEach((el) => io.observe(el));

  // booking form validation + inline success
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      for (const input of form.querySelectorAll('[required]')) {
        const field = input.closest('.field');
        const valid = input.checkValidity();
        field.classList.toggle('invalid', !valid);
        if (!valid) ok = false;
      }
      if (!ok) { form.querySelector('.field.invalid .input')?.focus(); return; }
      form.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    });
    form.addEventListener('input', (e) => {
      const field = e.target.closest('.field');
      if (field?.classList.contains('invalid') && e.target.checkValidity()) field.classList.remove('invalid');
    });
  }
})();
