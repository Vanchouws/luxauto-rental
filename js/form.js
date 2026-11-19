/* ============================================================
   LuxAuto — form.js
   Contact form validation and submission
   ============================================================ */

(function () {
  'use strict';

  /* ── Validation rules ───────────────────────────────────── */
  const RULES = {
    firstName: {
      required: true,
      minLength: 2,
      pattern: /^[A-Za-zА-ЯҐЄІЇа-яґєії'\- ]+$/u,
      messages: {
        required: "Введіть ваше ім'я",
        minLength: "Ім'я має містити щонайменше 2 символи",
        pattern: "Ім'я може містити лише літери"
      }
    },
    lastName: {
      required: true,
      minLength: 2,
      pattern: /^[A-Za-zА-ЯҐЄІЇа-яґєії'\- ]+$/u,
      messages: {
        required: 'Введіть ваше прізвище',
        minLength: 'Прізвище має містити щонайменше 2 символи',
        pattern: 'Прізвище може містити лише літери'
      }
    },
    phone: {
      required: true,
      pattern: /^\+?[\d\s\-().]{7,20}$/,
      messages: {
        required: 'Введіть номер телефону',
        pattern: 'Введіть коректний номер телефону'
      }
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      messages: {
        required: 'Введіть адресу електронної пошти',
        pattern: 'Введіть коректну адресу e-mail'
      }
    },
    car: {
      required: true,
      messages: {
        required: 'Оберіть автомобіль'
      }
    },
    dateFrom: {
      required: true,
      messages: {
        required: 'Вкажіть дату початку оренди',
        minDate: 'Дата початку не може бути в минулому'
      }
    },
    dateTo: {
      required: true,
      messages: {
        required: 'Вкажіть дату закінчення оренди',
        afterFrom: 'Дата закінчення має бути після дати початку'
      }
    }
  };

  /* ── Helpers ────────────────────────────────────────────── */
  function getField(form, name) {
    return form.querySelector(`[name="${name}"]`);
  }

  function getError(field) {
    const id = field.id || field.name;
    return document.getElementById(`${id}-error`);
  }

  function showError(field, msg) {
    field.classList.add('error');
    field.classList.remove('success');
    const errEl = getError(field);
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('visible');
    }
  }

  function showSuccess(field) {
    field.classList.remove('error');
    field.classList.add('success');
    const errEl = getError(field);
    if (errEl) errEl.classList.remove('visible');
  }

  function clearField(field) {
    field.classList.remove('error', 'success');
    const errEl = getError(field);
    if (errEl) errEl.classList.remove('visible');
  }

  /* ── Validate single field ──────────────────────────────── */
  function validateField(form, fieldName) {
    const field = getField(form, fieldName);
    if (!field) return true;

    const rule = RULES[fieldName];
    if (!rule) return true;

    const value = field.value.trim();

    // Required
    if (rule.required && !value) {
      showError(field, rule.messages.required);
      return false;
    }

    // MinLength
    if (rule.minLength && value.length < rule.minLength) {
      showError(field, rule.messages.minLength);
      return false;
    }

    // Pattern
    if (rule.pattern && value && !rule.pattern.test(value)) {
      showError(field, rule.messages.pattern);
      return false;
    }

    // Date: not in past
    if (fieldName === 'dateFrom' && value) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(value) < today) {
        showError(field, rule.messages.minDate);
        return false;
      }
    }

    // dateTo: after dateFrom
    if (fieldName === 'dateTo' && value) {
      const dateFromField = getField(form, 'dateFrom');
      if (dateFromField && dateFromField.value) {
        if (new Date(value) <= new Date(dateFromField.value)) {
          showError(field, rule.messages.afterFrom);
          return false;
        }
      }
    }

    showSuccess(field);
    return true;
  }

  /* ── Validate entire form ───────────────────────────────── */
  function validateForm(form) {
    const fields = Object.keys(RULES);
    let valid = true;
    fields.forEach(name => {
      if (!validateField(form, name)) valid = false;
    });
    return valid;
  }

  /* ── Set min dates ──────────────────────────────────────── */
  function setMinDates(form) {
    const today = new Date().toISOString().split('T')[0];
    const dateFrom = getField(form, 'dateFrom');
    const dateTo = getField(form, 'dateTo');

    if (dateFrom) {
      dateFrom.min = today;
      dateFrom.addEventListener('change', () => {
        if (dateTo) {
          dateTo.min = dateFrom.value || today;
          if (dateTo.value && dateTo.value <= dateFrom.value) {
            dateTo.value = '';
            clearField(dateTo);
          }
        }
      });
    }
    if (dateTo) {
      dateTo.min = today;
    }
  }

  /* ── Pre-fill from URL params ───────────────────────────── */
  function prefillFromURL(form) {
    const params = new URLSearchParams(window.location.search);
    const carParam = params.get('car');
    const fromParam = params.get('from');
    const toParam = params.get('to');

    if (carParam) {
      const carField = getField(form, 'car');
      if (carField) {
        const option = [...carField.options].find(o =>
          o.value === carParam || o.textContent.trim() === carParam
        );
        if (option) carField.value = option.value;
      }
    }

    if (fromParam) {
      const dateFrom = getField(form, 'dateFrom');
      if (dateFrom) dateFrom.value = fromParam;
    }

    if (toParam) {
      const dateTo = getField(form, 'dateTo');
      if (dateTo) dateTo.value = toParam;
    }
  }

  /* ── Real submission via Formspree ─────────────────────── */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpqlwpq';

  function submitToFormspree(form, successEl) {
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Відправлення...';
    }

    const data = new FormData(form);

    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          // Success
          form.style.display = 'none';
          if (successEl) successEl.classList.add('visible');
          if (successEl) {
            const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80;
            const top = successEl.getBoundingClientRect().top + window.scrollY - headerH - 24;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        } else {
          return response.json().then(err => { throw err; });
        }
      })
      .catch(() => {
        // Error fallback
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Надіслати заявку';
        }
        alert('Помилка надсилання. Будь ласка, зателефонуйте нам або спробуйте ще раз.');
      });
  }

  /* ── Init form ──────────────────────────────────────────── */
  function initForm(form) {
    if (!form) return;

    const successEl = document.getElementById('form-success');
    setMinDates(form);
    prefillFromURL(form);

    // Real-time validation on blur
    Object.keys(RULES).forEach(name => {
      const field = getField(form, name);
      if (!field) return;

      field.addEventListener('blur', () => validateField(form, name));

      field.addEventListener('input', () => {
        if (field.classList.contains('error')) validateField(form, name);
      });
    });

    // Submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(form)) {
        submitToFormspree(form, successEl);
      } else {
        // Scroll to first error
        const firstError = form.querySelector('.form-control.error');
        if (firstError) {
          const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80;
          const top = firstError.getBoundingClientRect().top + window.scrollY - headerH - 24;
          window.scrollTo({ top, behavior: 'smooth' });
          firstError.focus();
        }
      }
    });
  }

  /* ── Init all forms ─────────────────────────────────────── */
  function init() {
    document.querySelectorAll('.contact-form form, form[data-validate]').forEach(initForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
