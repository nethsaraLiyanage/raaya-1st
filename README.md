# Raaya's First Birthday — Invitation

A soft, bunny-themed single-page invitation. Tap **Open Invitation** on the
landing screen to reveal the full scrolling invite.

Theme: **mint green · peach · white**, with the pink ballerina bunnies as accents.

## Run it

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Details baked in

- **Date:** Sunday, 27th September 2026
- **Time:** 11 AM – 4 PM (lunch reception)
- **Venue:** Cinnamon Thiya, Nainamadama

## ✏️ Placeholders to fill (search for `TODO` in `index.html`)

1. **Parents' names** — currently "Mummy & Daddy" (greeting card).
2. **RSVP names & phone numbers** — currently placeholder `+94 …` numbers.

## Swapping images

All artwork lives in `assets/`:

- `bunnies.png` — original (with black background, kept as source).
- `bunnies-transparent.png` — full trio, background removed.
- `bunny-dance.png`, `bunny-bouquet.png`, `bunny-sit.png` — individual bunnies used
  in the hero, landing, and RSVP sections.

To add a **real photo of Raaya**, drop it into `assets/` and I can wire in a
round photo frame (e.g. in the greeting or a dedicated section).

## Structure

- `index.html` — markup
- `css/styles.css` — all styling (design tokens at the top under `:root`)
- `js/app.js` — open/close, scroll reveals, falling petals
