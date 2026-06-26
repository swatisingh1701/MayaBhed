/* MayaBhed frontend interactions only */

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const textarea = document.getElementById('claimInput');
  const charCount = document.getElementById('charCount');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resultContainer = document.querySelector('.result-container');
  const featureCards = [...document.querySelectorAll('.feature-card')];

  const MAX_CHARS = 5000;
  let activeSectionId = '';

  /* Smooth scrolling for in-page anchors */
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', targetId);
    });
  });

  /* Character counter */
  const updateCharCount = () => {
    const current = textarea.value.length;
    charCount.textContent = `${current} / ${MAX_CHARS} characters`;
    textarea.maxLength = MAX_CHARS;
  };

  /* Textarea focus glow is handled by CSS, but JS keeps it tidy if needed */
  textarea.addEventListener('input', updateCharCount);
  updateCharCount();

  /* Click ripple effect for the Analyze button */
  analyzeBtn.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.className = 'btn-ripple';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  });

  analyzeBtn.addEventListener('click', analyzeClaim);

  /* Highlight active navigation link while scrolling */
  const setActiveLink = (id) => {
    if (!id || activeSectionId === id) return;
    activeSectionId = id;

    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) setActiveLink(visible.target.id);
  }, {
    root: null,
    threshold: [0.2, 0.35, 0.5, 0.65],
    rootMargin: '-15% 0px -55% 0px'
  });

  sections.forEach(section => navObserver.observe(section));

  /* Scroll reveal animations */
  const revealItems = [
    ...document.querySelectorAll('.section-heading'),
    ...document.querySelectorAll('.hero-copy'),
    ...document.querySelectorAll('.hero-card'),
    ...document.querySelectorAll('.analyzer-panel'),
    ...document.querySelectorAll('.feature-card'),
    ...document.querySelectorAll('.step-card'),
    ...document.querySelectorAll('.footer-grid'),
    ...document.querySelectorAll('.footer-bottom')
  ];

  revealItems.forEach(el => {
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  revealItems.forEach(item => revealObserver.observe(item));

  /* Feature card hover polish */
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('card-hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('card-hovered'));
  });

  /* Empty result container controls for future backend integration */
  function showResults() {
    resultContainer.hidden = false;
  }

  function hideResults() {
    resultContainer.hidden = true;
  }

  async function analyzeClaim() {

  const text = textarea.value.trim();

  if (!text) {
    alert("Please enter some content.");
    return;
  }

  showResults();

  resultContainer.innerHTML = `
    <div class="loading-card">
      <h3>Analyzing...</h3>
      <p>MayaBhed is evaluating the claim.</p>
    </div>
  `;

  try {

    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text
      })
    });

    const data = await response.json();

    console.log(data);

    resultContainer.innerHTML = `
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;

  } catch (error) {

    console.error(error);

    resultContainer.innerHTML = `
      <div class="error-card">
        Analysis Failed
      </div>
    `;
  }
}

  hideResults();

  /* Expose only the future integration hooks */
  window.showResults = showResults;
  window.hideResults = hideResults;
});