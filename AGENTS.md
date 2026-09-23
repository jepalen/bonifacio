# AGENTS.md — Bonifacio 15 · Flat Rental Website

> Agent context file. Read fully before making any change.

---

## 1. Project Overview

Static single-page rental listing site for a private landlord renting furnished flats to workers and companies in **Langreo, Asturias, Spain**. Hosted on **GitHub Codespaces**. No backend, no database, no auth — everything is static files served as-is.

Contact flow: visitor fills a form → site opens local email client via `mailto:` pre-filled with their data.

---

## 2. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Markup | Vanilla HTML5 | Single file `index.html`, `lang="es"` |
| Styles | Vanilla CSS | `css/styles.css`, CSS custom properties, no preprocessor |
| Interactivity | Alpine.js v3 (CDN, jsDelivr) | Loaded `defer`; component registered before load via `js/app.js` |
| Icons | Font Awesome 6.4.0 (CDN, cdnjs) | Solid & regular icon styles |
| Fonts | Google Fonts — `Outfit` + `Inter` | Loaded via CSS `@import` |
| Maps | Google Maps Embed (iframe) | Hardcoded embed URL |
| Data | JSON files in `resources/` | Fetched at runtime via `fetch()` |

**No npm, no bundler, no build step.**

---

## 3. File & Folder Structure

```
/
├── index.html                  # Single-page entry point
├── css/styles.css              # All styles (~1500 lines, sectioned with ===== banners)
├── js/app.js                   # Alpine.js component (apartmentApp)
└── resources/
    ├── building/
    │   ├── values.json         # Building address, flat ID list, building amenities
    │   ├── main.png            # Hero building photo
    │   └── building-01..09.png # Additional building photos
    └── flats/
        ├── bgc15-4c-1/         # Studio, 20m², 1 bed
        ├── bgc15-4c-2/         # 1 bed + living room, 40m²
        ├── bgc15-4c-3/         # 2 bed, 50m²
        ├── bgc15-4d/           # 4 bed, 100m²
        └── dr-flemming-6/      # 2 bed, 70m² — different street address
            └── (each: values.json + photo-01..N.jpeg)
```

**Image naming convention:** all photos are `photo-01.jpeg`, `photo-02.jpeg`, etc. — no spaces or special characters.

---

## 4. Alpine.js App (`js/app.js`)

One Alpine component: `apartmentApp`, initialised via `x-init="fetchData()"` on `<body>`.

### Data loading strategy

- On init, fetches `resources/building/values.json` to get the flat ID list and building amenities.
- Fetches each flat's `resources/flats/<id>/values.json` in parallel via `Promise.allSettled()`.
- Merges JSON data with `flatMeta` (in-JS map for display-only fields the JSON doesn't contain).
- Shows a spinner while loading; shows an error state if fetch fails.

### `flatMeta` — what lives in JS (not in JSON)

Each entry in `flatMeta` holds: `name`, `floor`, `door`, `maxOccupancy`, `statusBadge`, `coverImage`, `photos[]`.
**To add a new flat:** add folder + `values.json` + photos, then add one entry to `flatMeta` and one `<option>` in the contact form `<select>`.

### State

| Property | Type | Purpose |
|---|---|---|
| `loading` | Boolean | True while JSON is being fetched |
| `loadError` | Boolean | True if fetch fails |
| `building` | Object | Name, address, amenities, worker benefits, photos |
| `flats` | Array | Flat objects built from JSON + flatMeta |
| `filterRooms` | String | `'all'` / `'1'` / `'2'` / `'4'` — drives filter bar |
| `mobileNavOpen` | Boolean | Hamburger nav toggle state |
| `lightboxOpen` | Boolean | Photo lightbox visibility |
| `lightboxImages` | Array | Images shown in lightbox |
| `lightboxIndex` | Number | Current photo index |
| `lightboxTitle` | String | Title shown in lightbox topbar |
| `touchStartX/EndX` | Number | Swipe tracking (threshold: 40px) |
| `commoditiesModalOpen` | Boolean | Commodities modal visibility |
| `selectedFlatForCommodities` | Object\|null | Flat whose commodities are shown |
| `contactModalOpen` | Boolean | Contact form modal visibility |
| `inquiryTarget` | String | Modal heading (flat name or generic) |
| `formSubmitted` | Boolean | Switches form to success state |
| `formData` | Object | `{ company, name, phone, email, flatId, stayDuration, comments }` |

### Computed

| Property | Returns |
|---|---|
| `filteredFlats` | Filters `flats` by `filterRooms` |

### Key Methods

| Method | Description |
|---|---|
| `fetchData()` | Loads building + all flat JSONs, builds `flats` array |
| `openLightbox(images, index, title)` | Opens photo lightbox |
| `nextPhoto()` / `prevPhoto()` | Navigate lightbox (wraps) |
| `handleTouchStart/End/Swipe()` | Mobile swipe support |
| `openCommoditiesModal(flat)` | Shows full amenities list |
| `getCommodityIcon(commodity)` | Maps Spanish text → Font Awesome class |
| `openContactModal(flatName, flatId)` | Opens pre-filled contact form |
| `submitForm()` | Triggers `mailto:` redirect after brief success state |

---

## 5. HTML Sections (in order)

1. **`<header>`** — Sticky navbar. Logo, desktop nav links, email CTA, contact button, hamburger toggle.
2. **`<nav class="mobile-nav">`** — Mobile dropdown (Alpine `mobileNavOpen`). Visible only on `≤768px`.
3. **`.hero`** — Full-width hero. Badge, H1, highlight chips, CTA buttons, building photo card.
4. **`#edificio`** — 4-photo building gallery (→ lightbox) + address & amenities card.
5. **`#pisos`** — Filter bar + `x-for` flat cards. Loading spinner and error state controlled by Alpine.
6. **`#ventajas`** — Worker benefits grid (6 cards, from `building.workerBenefits`).
7. **CTA Banner** — Dark banner with email link + contact form trigger.
8. **`#ubicacion`** — Google Maps embed + walking distances list.
9. **`<footer>`** — Logo, nav links, contact info, copyright.
10. **Contact Modal** — Form → `mailto:` redirect.
11. **Lightbox Modal** — Full-screen photo viewer. Keyboard (←/→/Esc) + swipe.
12. **Commodities Modal** — Full amenities grid for a selected flat.
13. **Sticky Mobile Bar** — Fixed bottom bar, mobile only (`≤768px`).

---

## 6. CSS Architecture (`css/styles.css`)

- Pure custom CSS, no frameworks. CSS custom properties in `:root`.
- Sections clearly marked with `=====` banners.
- Two responsive breakpoints: `@media (max-width: 1024px)` and `@media (max-width: 768px)`.

### Key CSS Variables

```css
--primary-navy: #0f172a       /* Main dark background */
--navy-light: #1e293b
--accent-gold: #b5851a        /* Brand accent — buttons, prices, highlights */
--accent-gold-hover: #8f6514
--accent-gold-light: #fdf6e3
--bg-page: #f8fafc
--section-alt-bg: #ffffff
--whatsapp-green: #25d366
--whatsapp-green-hover: #20ba5a
--danger: #dc2626
--font-heading: 'Outfit'
--font-body: 'Inter'
```

---

## 7. JSON Data Schema

### `resources/building/values.json`
```json
{
  "address": { "street", "number", "city", "province", "country", "postal_code" },
  "flats": [ { "id", "floor", "door" } ],
  "comodities": [ "string", ... ]
}
```

### `resources/flats/<id>/values.json`
```json
{
  "price":      { "value": Number, "sqm": String, "period": "month", "currency": "eur" },
  "rooms":      { "value": Number },
  "livingrooms":{ "value": Number },
  "bathrooms":  { "value": Number },
  "kitchens":   { "value": Number },
  "address":    { ... },
  "comodities": [ "string", ... ],
  "description": "string",
  "status":     "string"
}
```

---

## 8. Coding Standards & Agent Behaviour

> **Always propose changes and ask for confirmation before implementing.**
> If you spot an improvement while working on something else, flag it — do not apply silently.

### General

- Well-structured, readable, linted-quality code. 4-space indentation throughout.
- **No new external dependencies.** Alpine.js, Font Awesome, Google Fonts — all via CDN, nothing else.
- **Single-file architecture** — one `index.html`, one `styles.css`, one `app.js`. No build tooling.
- **Spanish** is the site language. All user-facing text stays in Spanish.

### HTML

- Semantic HTML5. Accessible labels on all interactive elements (`aria-label`, `aria-expanded`, etc.).
- Alpine directives kept clean and readable. Avoid inline styles — use CSS classes.

### CSS

- New styles go in the relevant `=====` section.
- Always use existing `var(--...)` variables. Never hardcode a value that already has a variable.
- Naming: `.component-name`, `.component-name__element`, `.component-name--modifier`.
- Responsive rules go inside the existing `@media` blocks at the bottom.

### JavaScript (Alpine.js)

- All state and logic inside the `apartmentApp` component.
- `const` / `let` only — no `var`.
- No direct DOM manipulation (`document.querySelector` etc.) unless strictly unavoidable.
- Short comment on any non-obvious logic.

### Images

- Filename convention: `photo-01.jpeg`, `photo-02.jpeg`, … — no spaces, no special characters.
- New flat photos go in `resources/flats/<id>/` following this convention.

---

## 9. How to Run Locally

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Open `http://localhost:8080`. No build step required.

---

## 10. Adding a New Flat — Checklist

1. Create `resources/flats/<new-id>/values.json` matching the schema above.
2. Add photos as `photo-01.jpeg`, `photo-02.jpeg`, … to the same folder.
3. Add one entry to `flatMeta` in `js/app.js` (name, floor, door, maxOccupancy, statusBadge, coverImage, photos).
4. Update filter bar button counts in `index.html` if the room count is new.
5. Add a `<option>` for the flat in the contact form `<select>` in `index.html`.
6. Propose the changes before implementing.
