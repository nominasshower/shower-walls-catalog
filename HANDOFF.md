# Shower Walls catalog — handoff notes

## Repo & deploy
- Repo: https://github.com/nominasshower/shower-walls-catalog
- Deploy: GitHub Pages, auto-publishes `main` branch to shower-walls.net (CNAME file already set)
- To continue on another computer: `git clone https://github.com/nominasshower/shower-walls-catalog.git`
- Whoever clones needs **push access** to that GitHub repo (add them as a collaborator, or they log in with an account that already has access). No other secrets/API keys are needed — it's a static site, no build step.
- Just edit files and `git push origin main` — Pages redeploys in ~1-2 min.

## Structure
- `index.html` — home page (hero, about, 4 product category cards, download catalog, contact form)
- `surrounds.html`, `pans.html`, `accessories.html`, `tub.html` — one page per product category, each renders its grid from shared data
- `colors.html` — color swatches page
- `css/style.css` — all styling, shared by every page
- `js/catalog.js` — shared: product data (surrounds/pans/accessories/tubs arrays), card rendering, product modal (zoom/pan viewer, gallery thumbnails, lightbox), `renderCategoryGrid(cat)` used by the 4 category pages
- Nav has a hover dropdown under "Products" linking to the 4 category pages, plus a standalone "Colors" link

## What changed in this session (already committed & pushed)
1. Split the old single-page product catalog into the 4 separate pages + colors page above; added nav dropdown for Products (fixed a hover dead-zone bug — dropdown menu must sit with **zero gap** below the toggle button or it closes before the mouse reaches it).
2. Fixed product-detail modal opening over-zoomed — `DEFAULT_SCALE` in `js/catalog.js` was `2.5`, changed to `1` so the full image fits first; users can still zoom with +/-.
3. Found & fixed **8 products** whose gallery thumbnail was actually a photo of a *different* product (copy-paste data-entry error). Verified with a script that cross-checks every `img`/`gallery` path across all 49 product entries — confirmed 0 mismatches remain.
4. Fixed 3 surround cards (Vision, Theory, Dune) that showed a full lifestyle/installation photo instead of the tight texture close-up every other card uses — swapped `img` to the `*_Closed-Up_*.jpg` file, moved the lifestyle shot into `gallery`.
5. Cropped 4 color swatch images (Light Gray, Solid Bone, Solid White, Linen) that had transparent margins baked in, making the swatch look "hollow" — cropped to the opaque bbox. Originals backed up locally in `images/_backup_original/` (**not committed to git** — only exists on this PC; low priority to bring over, the fix is already live).
6. Replaced the yellow-tinted ADA shower pan photo (`ADA_SW_1.png`) with the cleaner `ADA_SW_2.png` throughout.
7. Removed the "Sprayed Granite Colors" swatches (Italian Iced, Cappuccino, Crystal Almond, Linen) per request — only "Regular Colors" remains on `colors.html`.

## Known open item / discussed but not done
- User was shown a competitor's studio-style product photography (arstarinc.com) and liked the idea of giving our own product photos a soft gradient background + drop shadow treatment. Two demo images were generated (not applied to the site) — well received but no decision yet to roll out across the catalog. If picked up again: the technique was — crop to the opaque/textured bbox (many source photos have baked-in white margins), place on a light vertical-gradient canvas, add a soft blurred ellipse shadow, rounded-corner mask + subtle white border for texture panels.

## Notes for a fresh Claude session
- No special credentials needed beyond GitHub push access to the repo above.
- The company's live production site is shower-walls.net — pushing to `main` is a direct-to-production deploy, no staging step. Get explicit confirmation before pushing changes, same as this session did.
