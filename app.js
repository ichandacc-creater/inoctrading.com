// Basic interactivity for nav and enrollment CTA

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Smooth scroll helper (optional, native behavior is fine)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Pre-fill enrollment form when clicking course "Enroll"
const enrollButtons = document.querySelectorAll('.enroll-btn');
const courseSelect = document.querySelector('#course');
enrollButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const courseName = btn.dataset.course;
    if (courseSelect) {
      courseSelect.value = courseName;
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Handle enrollment form submit
const form = document.getElementById('enroll-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      fullName: document.getElementById('fullName').value.trim(),
      email: document.getElementById('email').value.trim(),
      course: document.getElementById('course').value,
      notes: document.getElementById('notes').value.trim(),
      timestamp: new Date().toISOString()
    };

    // Example: post to email/Telegram service or backend. For now, just simulate.
    status.textContent = 'Submitting...';
    try {
      await new Promise(res => setTimeout(res, 800));
      status.textContent = 'Enrollment submitted. We will contact you via email.';
      form.reset();
    } catch (err) {
      status.textContent = 'Something went wrong. Please try again.';
    }
  });
}
