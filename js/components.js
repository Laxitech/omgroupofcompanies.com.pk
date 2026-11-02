/* ==========================================================================
   OM Group — Shared components
   Site Footer component, footer year, sticky header state, scroll reveal,
   back-to-top, accordion.
   ========================================================================== */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  /* Shared Footer Component ---------------------------------------------- */
  const footerTemplate = `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <a class="brand" href="index.html" aria-label="OM Group of Companies — home">
          <img src="assets/icons/om-logo.png" alt="OM Group logo" class="om-nav-logo" width="130" height="49">
        </a>
        <p>
          A diversified global group spanning finance, commodities, metals processing, technology, education, and
          overseas employment, with over US$3 billion in annual turnover.
        </p>
       
      </div>

      <nav class="footer__nav" aria-label="Footer Navigation">
        <div>
          <h2 class="footer__heading">Explore</h2>
          <ul class="footer__list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About OM Group</a></li>
            <li><a href="services.html">Portfolio Companies</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer__heading">Group Companies</h2>
          <ul class="footer__list">
            <li><a href="company-details.html?company=education">OM Education Services</a></li>
            <li><a href="company-details.html?company=chrome">Chrome Ore Services</a></li>
            <li><a href="company-details.html?company=terraque">Terraque Computers UK</a></li>
            <li><a href="company-details.html?company=capital">OM Capital</a></li>
            <li><a href="company-details.html?company=hr">OM HR Services</a></li>
            <li><a href="company-details.html?company=global">OM Global Services</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer__heading">Direct Contact</h2>
          <address class="footer__contact">
            <span class="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.7" />
              </svg>
              <span>OM Building, Plot 1B, Street-2, Al-Fatah Market, G-9/3, Islamabad, Pakistan</span>
            </span>
            <span class="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <path
                  d="M6.6 3h2.1l1.3 4.1-1.8 1.2a12 12 0 0 0 6.5 6.5l1.2-1.8L20 14.3v2.1a2.6 2.6 0 0 1-2.8 2.6A15.1 15.1 0 0 1 4 5.8 2.6 2.6 0 0 1 6.6 3Z" />
              </svg>
              <a href="tel:+923008564854">+92 300 8564854</a>
            </span>
            <span class="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3.5 7 8.5 6 8.5-6" />
              </svg>
              <a href="mailto:info@omgroupofcompanies.com.pk">info@omgroupofcompanies.com.pk</a>
            </span>
            <span class="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7v5.2l3.4 2" />
              </svg>
              <span>Mon – Sat: 09:00 – 18:00 (PKT)</span>
            </span>
          </address>
        </div>
      </nav>
    </div>

    <div class="footer__bottom">
      <p>&copy; <span data-year>${new Date().getFullYear()}</span> OM Group of Companies. All rights reserved.</p>
      <p class="footer__meta">London &middot; Malaysia &middot; Dubai &middot; Pakistan</p>
    </div>
  </div>
</footer>
`;

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered) return;
      this.dataset.rendered = "true";
      this.innerHTML = footerTemplate;
    }
  }

  if (
    typeof customElements !== "undefined" &&
    !customElements.get("site-footer")
  ) {
    customElements.define("site-footer", SiteFooter);
  }

  const renderFooters = () => {
    document.querySelectorAll("site-footer").forEach((el) => {
      if (!el.dataset.rendered) {
        el.dataset.rendered = "true";
        el.innerHTML = footerTemplate;
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderFooters);
  } else {
    renderFooters();
  }

  /* Footer year ---------------------------------------------------------- */
  const yearTargets = document.querySelectorAll("[data-year]");
  const currentYear = new Date().getFullYear();
  yearTargets.forEach((target) => {
    target.textContent = String(currentYear);
  });

  /* Sticky header state -------------------------------------------------- */
  const header = document.querySelector("[data-header]");
  if (header) {
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  /* Reveal on scroll ----------------------------------------------------- */
  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  if (revealItems.length > 0) {
    if (!("IntersectionObserver" in window) || prefersReducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-revealed"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px",
        },
      );

      revealItems.forEach((item) => revealObserver.observe(item));
    }
  }

  /* Back to top ---------------------------------------------------------- */
  const backToTop = document.createElement("a");
  backToTop.className = "back-to-top";
  backToTop.href = "#top";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></svg>';
  document.body.append(backToTop);

  const updateBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 700);
  };

  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    });
  });

  updateBackToTop();
  window.addEventListener("scroll", updateBackToTop, { passive: true });

  /* Exclusive accordion -------------------------------------------------- */
  document.querySelectorAll("[data-accordion]").forEach((group) => {
    const items = Array.from(group.querySelectorAll("details"));

    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  });
})();
