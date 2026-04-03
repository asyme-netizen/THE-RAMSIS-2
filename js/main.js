/**
 * THE RAMSIS — Main JavaScript
 * Handles: navigation, newsletter, scroll effects, mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================
     Mobile Menu
     ============================================ */
  const hamburger     = document.querySelector('.hamburger');
  const mobileMenu    = document.querySelector('.mobile-menu');
  const mobileClose   = document.querySelector('.mobile-menu__close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    mobileClose?.addEventListener('click', closeMobileMenu);

    // Close on backdrop click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) closeMobileMenu();
    });

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ============================================
     Sticky Header Shadow
     ============================================ */
  const siteHeader = document.querySelector('.site-header');

  if (siteHeader) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        siteHeader.style.boxShadow = '0 1px 12px rgba(0,0,0,0.10)';
      } else {
        siteHeader.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ============================================
     Scroll to Top Button
     ============================================ */
  const scrollBtn = document.querySelector('.scroll-to-top');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================
     Newsletter Form
     ============================================ */
  const newsletterForms = document.querySelectorAll('.newsletter-widget__form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const email = input?.value.trim();

      if (!email || !isValidEmail(email)) {
        showToast('Please enter a valid email address.');
        return;
      }

      // Simulate API call
      const btn = form.querySelector('.btn-dispatch');
      if (btn) {
        btn.textContent = 'Subscribing…';
        btn.disabled = true;
      }

      setTimeout(() => {
        showToast('✓ Welcome to The Ramsis Dispatch!');
        if (input) input.value = '';
        if (btn) {
          btn.textContent = 'Join Dispatch';
          btn.disabled = false;
        }
      }, 1000);
    });
  });

  /* ============================================
     Ticker — Pause on hover
     ============================================ */
  const tickerInner = document.querySelector('.top-bar__ticker-inner');
  const tickerWrap  = document.querySelector('.top-bar__ticker');

  if (tickerInner && tickerWrap) {
    tickerWrap.addEventListener('mouseenter', () => {
      tickerInner.style.animationPlayState = 'paused';
    });
    tickerWrap.addEventListener('mouseleave', () => {
      tickerInner.style.animationPlayState = 'running';
    });
  }

  /* ============================================
     Intersection Observer — Fade-in
     ============================================ */
  const fadeTargets = document.querySelectorAll(
    '.article-card, .trending-item, .longform-sidebar-card, .hero-feature'
  );

  if ('IntersectionObserver' in window && fadeTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeTargets.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
      observer.observe(el);
    });
  }

  /* ============================================
     Active Nav Item
     ============================================ */
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.main-nav__item a, .mobile-menu__list a').forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  /* ============================================
     Utility: Email validation
     ============================================ */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ============================================
     Utility: Toast notification
     ============================================ */
  function showToast(message, duration = 3000) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), duration);
  }

});
