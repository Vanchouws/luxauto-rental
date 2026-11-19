/* ============================================================
   LuxAuto — main.js
   Theme switcher, language switcher, mobile menu,
   smooth scroll, scroll reveal, header scroll state
   ============================================================ */

(function () {
  'use strict';

  /* ── Helpers ────────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ── Theme Switcher ─────────────────────────────────────── */
  const THEME_KEY = 'luxauto-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
    updateThemeBtn(theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function updateThemeBtn(theme) {
    const btn = $('#theme-btn');
    if (!btn) return;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      applyTheme(saved);
      return;
    }
    // Respect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  }

  /* ── Language Switcher ──────────────────────────────────── */
  const LANG_KEY = 'luxauto-lang';

  function applyLang(lang) {
    $$('[data-ua]').forEach(el => {
      const ua = el.getAttribute('data-ua');
      const en = el.getAttribute('data-en');
      if (!ua && !en) return;
      if (lang === 'en' && en) {
        el.textContent = en;
      } else if (ua) {
        el.textContent = ua;
      }
    });

    // Placeholder attributes
    $$('[data-ph-ua]').forEach(el => {
      const ua = el.getAttribute('data-ph-ua');
      const en = el.getAttribute('data-ph-en');
      el.placeholder = lang === 'en' && en ? en : (ua || '');
    });

    // aria-label
    $$('[data-aria-ua]').forEach(el => {
      const ua = el.getAttribute('data-aria-ua');
      const en = el.getAttribute('data-aria-en');
      el.setAttribute('aria-label', lang === 'en' && en ? en : (ua || ''));
    });

    // Update active state on lang buttons
    $$('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'uk';
    localStorage.setItem(LANG_KEY, lang);
  }

  function initLang() {
    const saved = localStorage.getItem(LANG_KEY) || 'ua';
    applyLang(saved);
  }

  /* ── Mobile Menu ────────────────────────────────────────── */
  function initMobileMenu() {
    const hamburger = $('#hamburger');
    const mobileNav = $('#mobile-nav');
    if (!hamburger || !mobileNav) return;

    function toggle(open) {
      hamburger.classList.toggle('open', open);
      mobileNav.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      toggle(!isOpen);
    });

    // Close on nav link click
    $$('.mobile-nav__link', mobileNav).forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });

    // Close on overlay click (outside nav)
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) toggle(false);
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        toggle(false);
      }
    });
  }

  /* ── Header scroll state ────────────────────────────────── */
  function initHeaderScroll() {
    const header = $('.header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Active nav link ────────────────────────────────────── */
  function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    $$('.nav__link, .mobile-nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.split('/').pop();
      const isActive =
        (linkPage === path) ||
        (path === '' && linkPage === 'index.html') ||
        (path === 'index.html' && linkPage === 'index.html');
      link.classList.toggle('active', isActive);
    });
  }

  /* ── Smooth Scroll ──────────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  /* ── Scroll Reveal ──────────────────────────────────────── */
  function initScrollReveal() {
    const items = $$('.reveal, .reveal-stagger');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
  }

  /* ── Counter Animation ──────────────────────────────────── */
  function animateCounter(el, target, duration = 1800) {
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString('uk-UA') + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = $$('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ── Init all ───────────────────────────────────────────── */
  function init() {
    initTheme();
    initLang();
    initMobileMenu();
    initHeaderScroll();
    initActiveNav();
    initSmoothScroll();
    initScrollReveal();
    initCounters();

    // Wire theme button
    const themeBtn = $('#theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Wire lang buttons
    $$('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
