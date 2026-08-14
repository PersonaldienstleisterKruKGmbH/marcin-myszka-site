# Marcin Myszka — v6.2 multipage

## Architecture
- `index.html` — homepage content preserved from v6.1/v51 main markup.
- `assets/css/style.css` — shared base design system, header, red contact section and footer.
- `assets/css/subpages.css` — internal-page-only layout rules; no duplicate footer/contact/navigation implementation.
- `assets/js/site-footer.js` — single shared footer component used by all 7 pages.
- `assets/js/main.js` — shared interactions used on internal pages.
- `assets/js/subpages.js` — internal-page active navigation state only.

## Pages
- Start
- O mnie
- Projekty
- Osiągnięcia
- Media
- Współpraca
- Kontakt

## Responsive
Internal pages and the shared red contact/footer area have dedicated tablet/mobile layouts. Nested 12-column content stacks to a single column on phones. The shared footer stacks vertically below 820px and never uses horizontal scrolling.

## v6.4 — ZABLOKOWANY HEADER / FOOTER
- Header i footer są jednym wspólnym komponentem: `assets/js/site-shell.js`.
- Każda strona zawiera wyłącznie mounty: `<header data-site-header></header>` i `<footer data-site-footer></footer>`.
- Nie stosować lokalnych wariantów, aktywnych stanów ani override'ów header/footer na podstronach.
- Style header/footer pozostają wyłącznie w `assets/css/style.css`.
- `contact-page.css` dotyczy tylko treści strony Kontakt.


V6.5: red CTA + black footer are one shared component in assets/js/site-shell.js. Footer menu is above social links. Header remains unchanged.
