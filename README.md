# Glass & Aluminum Manufacturers Directory

A searchable, filterable directory of **77 architectural glass producers, fenestration manufacturers, and aluminum extruders** serving the North American market.

**Live site:** https://t3chw1zrd.github.io/GlassAndAluminumManufacturers/

## What's inside

| File | Purpose |
|---|---|
| `index.html` / `styles.css` / `script.js` | Static site — vanilla JS, PapaParse for CSV |
| `vendors.csv` | Merged dataset: 77 vendors × 48 fields |
| `data/vendors-architectural-glass.csv` | Per-segment: 26 flat glass producers + fabricators |
| `data/vendors-fenestration.csv` | Per-segment: 25 window/door/skylight makers |
| `data/vendors-aluminum-extrusion.csv` | Per-segment: 26 aluminum extruders |
| `docs/discovery-methods.md` | The research methodology — every directory used, with quality grades |

## Schema (48 columns)

Grouped into 10 sections in the detail view:

1. **Identity** — name, parent, HQ, founded, ownership
2. **Products & specialty** — glass types, frame materials/alloys, market segments, custom capabilities
3. **Capabilities** — plants, plant locations, lead time
4. **Trust & certifications** — NGA / FGIA / GPI / AA memberships; NFRC / SGCC / IGCC / AAMA certifications
5. **Pricing & sales** — tier, public price list, direct vs distribution
6. **Contact** — phone, emails, address, website, contact form
7. **Reachability** — accepting new customers, preferred contact method
8. **Digital presence** — LinkedIn (with activity recency), Facebook, Instagram, YouTube, Twitter/X
9. **Leadership** — CEO/President, VP of Sales
10. **Red flags** — OSHA citations, lawsuits, plant closures, bankruptcy, negative press

Missing data is consistently rendered as `not available` rather than guessed.

## Data quality

Overall fill rate: **~68%** of cells contain real, sourced data.

| Segment | Vendors | Fill rate |
|---|---|---|
| Architectural glass + fabricators | 26 | ~68% |
| Windows, doors, skylights | 25 | ~74% |
| Aluminum extrusion / framing | 26 | ~62-65% |

**Well-covered:** company name, parent, HQ, founding year, primary specialty, plant locations, website, LinkedIn, main phone, address, CEO.

**Mostly "not available":** direct sales emails (most use contact forms), MOQ, max product dimensions, quote turnaround, warranty detail, VP-of-sales names, Instagram/Twitter URLs.

## Sources

- **Trade associations:** [NGA](https://www.glass.org), [FGIA](https://fgiaonline.org), [GPI](https://www.gpi.org), [Aluminum Association](https://www.aluminum.org), [AEC](https://www.aec.org)
- **Certification bodies:** [NFRC CPD](https://search.nfrc.org), [SGCC](https://sgcc.org), [IGCC](https://igcc.org), AAMA (via FGIA)
- **Trade publications:** [USGlass Buyers Guide](https://buyersguide.usglassmag.com/), [Glass Magazine SourceBook](https://www.glassmagazine.com/glass-magazine-sourcebook), [Window+Door Top 100](https://www.windowanddoor.com/general-topic/top-manufacturers)
- **Trade shows:** [GlassBuild America](https://www.glassbuildamerica.com), [fensterbau frontale](https://www.frontale.de/en)
- Each vendor's own website + LinkedIn page
- News searches for red flags / current events

See [`docs/discovery-methods.md`](docs/discovery-methods.md) for the full method catalog with quality scoring.

## Disclaimer

This dataset is compiled from publicly available sources and intended as a starting point for vendor research, not a substitute for direct due diligence. Information may be out of date — always verify directly with the vendor before commercial engagement. Red flags reflect what was reported in public news at the time of research; they're informational, not legal claims.

## Running locally

It's a static site — no build step. From the repo root:

```bash
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## License

Data sources are public. Site code: MIT.
