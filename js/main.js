/* ==========================================================================
   OM Group — Site interactions
   Mobile navigation, smooth scrolling, contact form validation and prefill.
   ========================================================================== */
(() => {
  "use strict";

  const body = document.body;
  const header = document.querySelector("[data-header]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopViewport = window.matchMedia("(min-width: 961px)");

  /* ------------------------------------------------------------------------
     Mobile navigation
     ---------------------------------------------------------------------- */
  const initNavigation = () => {
    const nav = document.getElementById("site-nav");
    const toggle = document.querySelector("[data-nav-toggle]");
    const scrim = document.querySelector("[data-nav-scrim]");

    if (!nav || !toggle) return;

    let lastFocused = null;

    const getNavLinks = () => Array.from(nav.querySelectorAll("a[href], button:not([disabled])"));

    const openNav = () => {
      if (body.classList.contains("nav-open")) return;
      lastFocused = document.activeElement;
      body.classList.add("nav-open", "is-locked");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");

      window.requestAnimationFrame(() => {
        const firstLink = getNavLinks()[0];
        if (firstLink) firstLink.focus({ preventScroll: true });
      });
    };

    const closeNav = (returnFocus = false) => {
      if (!body.classList.contains("nav-open")) return;
      body.classList.remove("nav-open", "is-locked");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");

      if (returnFocus) {
        const focusTarget =
          lastFocused instanceof HTMLElement && lastFocused !== document.body ? lastFocused : toggle;
        focusTarget.focus({ preventScroll: true });
      }
    };

    toggle.addEventListener("click", () => {
      if (body.classList.contains("nav-open")) {
        closeNav(true);
      } else {
        openNav();
      }
    });

    if (scrim) {
      scrim.addEventListener("click", () => closeNav(true));
    }

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav(false);
    });

    document.addEventListener("keydown", (event) => {
      if (!body.classList.contains("nav-open")) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeNav(true);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [...getNavLinks(), toggle];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!focusable.includes(active)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    });

    const handleDesktopChange = (event) => {
      if (event.matches) closeNav(false);
    };

    if (typeof desktopViewport.addEventListener === "function") {
      desktopViewport.addEventListener("change", handleDesktopChange);
    } else {
      desktopViewport.addListener(handleDesktopChange);
    }
  };

  /* ------------------------------------------------------------------------
     Smooth scrolling for same-page anchors
     ---------------------------------------------------------------------- */
  const initSmoothScrolling = () => {
    const links = document.querySelectorAll('a[href*="#"]:not(.skip-link):not(.back-to-top)');

    /* Layout position that ignores reveal transforms. */
    const layoutTop = (element) => {
      let top = 0;
      let node = element;

      while (node instanceof HTMLElement) {
        top += node.offsetTop;
        node = node.offsetParent;
      }

      return top;
    };

    /*
     * The browser resolves a #hash before late layout changes (such as the
     * contact form prefill note appearing). Re-align once the page has loaded.
     */
    const alignInitialHash = () => {
      let targetId;
      try {
        targetId = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        return;
      }

      if (!targetId || targetId === "top") return;

      const target = document.getElementById(targetId);
      if (!target) return;

      const headerOffset = header ? header.offsetHeight + 16 : 16;
      window.scrollTo({
        top: Math.max(0, layoutTop(target) - headerOffset),
        behavior: "auto",
      });
    };

    if (window.location.hash) {
      if (document.readyState === "complete") {
        window.requestAnimationFrame(alignInitialHash);
      } else {
        window.addEventListener("load", () => window.requestAnimationFrame(alignInitialHash), {
          once: true,
        });
      }
    }

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }

        const targetUrl = new URL(link.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        if (targetUrl.pathname !== currentUrl.pathname || targetUrl.search !== currentUrl.search) return;
        if (!targetUrl.hash) return;

        let targetId;
        try {
          targetId = decodeURIComponent(targetUrl.hash.slice(1));
        } catch {
          return;
        }

        const target = document.getElementById(targetId);
        if (!target) return;

        event.preventDefault();

        const headerOffset = header ? header.offsetHeight + 16 : 16;
        const top =
          targetId === "top"
            ? 0
            : Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);

        window.scrollTo({
          top,
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        });

        if (window.history && typeof window.history.pushState === "function") {
          window.history.pushState(null, "", targetUrl.hash);
        }

        if (targetId !== "top" && target !== document.body) {
          if (!target.hasAttribute("tabindex")) {
            target.setAttribute("tabindex", "-1");
            target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
          }

          target.focus({ preventScroll: true });
        }
      });
    });
  };

  /* ------------------------------------------------------------------------
     Contact form
     ---------------------------------------------------------------------- */
  const initContactForm = () => {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    /* Keep native validation as the no-JS fallback. */
    form.noValidate = true;

    const status = form.querySelector("[data-form-status]");
    const message = form.elements.namedItem("message");
    const counter = form.querySelector("[data-message-count]");

    const fields = {
      name: form.elements.namedItem("name"),
      email: form.elements.namedItem("email"),
      company: form.elements.namedItem("company"),
      interest: form.elements.namedItem("interest"),
      message,
      consent: form.elements.namedItem("consent"),
    };

    if (!fields.name || !fields.email || !fields.interest || !fields.message || !fields.consent) {
      return;
    }

    const setFieldError = (field, errorMessage) => {
      const wrapper = field.closest(".field");
      const errorElement = wrapper ? wrapper.querySelector(`[data-error-for="${field.id}"]`) : null;

      if (wrapper) wrapper.classList.toggle("has-error", Boolean(errorMessage));

      if (errorMessage) {
        field.setAttribute("aria-invalid", "true");
      } else {
        field.removeAttribute("aria-invalid");
      }

      if (errorElement) errorElement.textContent = errorMessage;
      return !errorMessage;
    };

    const validateField = (field) => {
      const value = field.type === "checkbox" ? field.checked : field.value.trim();
      let errorMessage = "";

      switch (field.name) {
        case "name":
          if (String(value).length < 2) errorMessage = "Please enter your full name.";
          break;
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value))) {
            errorMessage = "Please enter a valid email address.";
          }
          break;
        case "interest":
          if (!value) errorMessage = "Please choose an area of interest.";
          break;
        case "message":
          if (String(value).length < 20) {
            errorMessage = "Please tell us a little more (at least 20 characters).";
          }
          break;
        case "consent":
          if (!value) errorMessage = "Please confirm we can contact you about this enquiry.";
          break;
        default:
          break;
      }

      return setFieldError(field, errorMessage);
    };

    [fields.name, fields.email, fields.message].forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.closest(".field").classList.contains("has-error")) validateField(field);
      });
    });

    [fields.interest, fields.consent].forEach((field) => {
      field.addEventListener("change", () => validateField(field));
    });

    if (counter && message) {
      const updateCounter = () => {
        counter.textContent = String(message.value.length);
      };

      message.addEventListener("input", updateCounter);
      updateCounter();
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const requiredFields = [fields.name, fields.email, fields.interest, fields.message, fields.consent];
      let firstInvalid = null;

      requiredFields.forEach((field) => {
        const isValid = validateField(field);
        if (!isValid && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        if (status) {
          status.className = "form__status is-error";
          status.textContent = "Please check the highlighted fields and try again.";
        }
        firstInvalid.focus();
        return;
      }

      const interestLabel =
        fields.interest.options[fields.interest.selectedIndex]?.textContent.trim() || "General enquiry";
      const company = fields.company ? fields.company.value.trim() : "";
      const bodyText = [
        "New enquiry from the OM Group website",
        "",
        `Name: ${fields.name.value.trim()}`,
        `Email: ${fields.email.value.trim()}`,
        `Company: ${company || "Not provided"}`,
        `Area of interest: ${interestLabel}`,
        "",
        "Message:",
        fields.message.value.trim(),
      ].join("\n");

      if (status) {
        status.className = "form__status is-success";
        status.textContent =
          "Your email app should now open with your message ready to send. If it does not, email info@omgroupofcompanies.com.pk directly.";
      }

      const subject = encodeURIComponent(`Website enquiry — ${interestLabel}`);
      const encodedBody = encodeURIComponent(bodyText);
      window.location.href = `mailto:info@omgroupofcompanies.com.pk?subject=${subject}&body=${encodedBody}`;
    });

    /* Keep the interest field in sync when arriving from a service link. */
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get("service");
    const prefillNote = document.querySelector("[data-prefill-note]");

    if (requestedService) {
      const matchingOption = Array.from(fields.interest.options).find(
        (option) => option.value === requestedService
      );

      if (matchingOption) {
        fields.interest.value = requestedService;

        if (prefillNote) {
          prefillNote.textContent = `Your enquiry will be sent to our ${matchingOption.textContent.trim()} team.`;
          prefillNote.hidden = false;
        }
      }
    }
  };

  initNavigation();
  initSmoothScrolling();
  initContactForm();
})();
