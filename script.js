/* ============================================
   PORTFOLIO — Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Theme Toggle --- */
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) html.setAttribute('data-theme', savedTheme);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  /* --- Year (Footer) --- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* --- Mobile Nav --- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* --- Active Nav Link on Scroll --- */
  const sections = document.querySelectorAll('.section, .hero');
  const navLinkEls = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) current = section.id;
    });
    navLinkEls.forEach(link => {
      link.classList.toggle('active-nav', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('load', updateActiveNav);

  /* --- Navbar Background on Scroll --- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* --- IntersectionObserver: Reveal Animations --- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --- Skill items: re-trigger popIn on scroll into view --- */
  const skillItems = document.querySelectorAll('.skill-item');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillItems.forEach(item => {
    item.style.animationPlayState = 'paused';
    skillObserver.observe(item);
  });

  /* --- Contact Form (EmailJS) --- */
  const form = document.getElementById('contactForm');
  const btnText = document.getElementById('formBtnText');
  const btnIcon = document.getElementById('formBtnIcon');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('formSubmit');

  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Please fill in all required fields.';
      feedback.className = 'form-feedback error';
      return;
    }

    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    submitBtn.disabled = true;

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          subject: subject || 'New Portfolio Message',
          message: message,
          to_email: 'lianasandramahery@gmail.com'
        }
      );
      feedback.textContent = 'Message sent successfully! I will get back to you soon.';
      feedback.className = 'form-feedback';
      form.reset();
    } catch (err) {
      feedback.textContent = 'Something went wrong. Please email me directly at lianasandramahery@gmail.com';
      feedback.className = 'form-feedback error';
    }

    btnText.textContent = 'Send Message';
    btnIcon.className = 'fas fa-paper-plane';
    submitBtn.disabled = false;
  });
});