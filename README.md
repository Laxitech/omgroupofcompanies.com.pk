# OM Group — Website

A four-page marketing website for OM Group, built with hand-written HTML5, CSS3
and vanilla JavaScript. No frameworks, build step or package manager required.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Hero, group introduction, key figures, featured services and call to action. |
| About | `about.html` | Who we are, mission, vision, operating model and leadership principles. |
| Services | `services.html` | Six service areas, each with a dedicated anchor and enquiry link. |
| Contact | `contact.html` | Contact details, offices, validated enquiry form and FAQ. |

## Project structure

```text
omgroup-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── README.md
├── assets/
│   ├── fonts/            # Reserved for self-hosted fonts (Google Fonts is used)
│   ├── icons/            # Logo, favicon.ico and favicon.svg
│   └── images/           # Local SVG artwork (hero and about visuals)
├── css/
│   ├── style.css         # Design tokens, base styles, header, footer, shared UI
│   ├── responsive.css    # Site-wide breakpoints (1100, 960, 820, 640, 480px)
│   └── pages/
│       ├── home.css
│       ├── about.css
│       ├── services.css
│       └── contact.css
└── js/
    ├── main.js           # Mobile navigation, smooth scrolling, contact form
    └── components.js     # Footer year, sticky header, reveals, back-to-top, FAQ
```

## Running the site

The site works by opening `index.html` directly in a browser. A local server is
recommended so absolute paths, query strings and cache behaviour match production:

```bash
# Python 3
python3 -m http.server 8000

# or Node.js
npx serve .
```

Then visit <http://localhost:8000/>.

There is no installation, compilation or dependency step.

## Design system

All core design decisions live in the `:root` custom properties at the top of
`css/style.css`:

- **Colours** — navy ink, warm canvas, sand surfaces and a muted gold accent.
- **Typography** — Roboto (weights 100–900, roman and italic) is loaded from
  Google Fonts and used for both display and body text, with a system sans-serif
  fallback if the font cannot be fetched.
- **Spacing, radii and shadows** — shared tokens keep cards, buttons and sections
  consistent across pages.

Buttons (`.btn`), cards (`.card`), icon badges, section headings, the header and
the footer are reusable components defined once in `style.css` and reused on
every page.

## JavaScript behaviour

`js/components.js`:

- Sets the footer copyright year automatically.
- Adds a compact style to the sticky header once the page is scrolled.
- Reveals sections on scroll with `IntersectionObserver` (skipped when the user
  prefers reduced motion).
- Creates the back-to-top control and keeps the FAQ accordion exclusive.

`js/main.js`:

- Accessible mobile navigation: focus moves into the menu on open, <kbd>Tab</kbd>
  is trapped, <kbd>Esc</kbd> closes and returns focus to the toggle, and the menu
  closes automatically when the viewport becomes desktop-sized.
- Smooth scrolling for in-page anchors, with an offset for the sticky header.
  Initial `#hash` links are re-aligned after layout settles.
- Contact form validation, inline error messages, a live message character
  counter, and service pre-selection from links such as
  `contact.html?service=technology#contact-form`.

The site remains usable without JavaScript: all pages, links and content are
static HTML, and the form keeps its native `required` validation and `mailto`
fallback.

## Contact form

The form is front-end only and sends nothing to a server. On a valid submission
it opens the visitor's email application with a pre-filled message addressed to
`info@omgroupofcompanies.com.pk`. If no mail client is configured, the confirmation message
tells the visitor to email that address directly.

To use a different destination, update the address in two places:

1. `action="mailto:..."` on the `<form>` in `contact.html` (no-JS fallback).
2. The `window.location.href = "mailto:..."` line in `initContactForm()` in
   `js/main.js`.

For a production site, replace this with a real form endpoint (for example a
serverless function or your email provider's form service) and update the
success message accordingly.

## Customising content

- **Brand and copy** — edit the HTML directly. Each page has its own title, meta
  description and Open Graph tags in the `<head>`.
- **Shared header/footer** — these are intentionally duplicated in all four
  pages so navigation works without JavaScript. Update them together to keep the
  site consistent, including the `is-active` / `aria-current="page"` state.
- **Colours and type** — change the tokens in `css/style.css`; page styles and
  breakpoints inherit automatically.
- **Artwork** — replace `assets/images/hero-visual.svg` and
  `assets/images/about-visual.svg`, or point the `<img>` tags at new files. Keep
  the `width`/`height` attributes or update them to preserve layout stability.
- **Icons and logo** — the header uses `assets/icons/om-logo.png`. The favicon is
  available as SVG (`favicon.svg`) with an ICO fallback (`favicon.ico`). Inline
  SVG icons are used throughout the pages.
- **Fonts** — the site loads Roboto from Google Fonts through the `<link>` tags
  in each page's `<head>` and references it via the `--font-*` tokens in
  `css/style.css`. To self-host instead, add the files to `assets/fonts/`,
  declare `@font-face` rules and remove the Google Fonts links. The system
  sans-serif fallback in the tokens keeps the site readable if the font fails.

## Accessibility and responsiveness

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), a skip link,
  visible focus styles and labelled form controls.
- Decorative SVGs use `aria-hidden="true"`; meaningful images include `alt` text.
- Mobile navigation manages `aria-expanded`, `aria-label`, focus and body scroll.
- Layout is tested from 320px to large desktop widths, with no horizontal
  overflow. Key breakpoints are in `css/responsive.css`.
- Motion is reduced automatically for visitors who set
  `prefers-reduced-motion: reduce`.

## Notes

- Office addresses, phone numbers, email addresses and statistics are sample
  content for demonstration and should be replaced with verified details before
  launch.
- The only third-party request is the Google Fonts stylesheet and font files
  used to load Roboto. There are no analytics, cookies, external scripts or
  trackers.
# omgroupofcompanies.com.pk
