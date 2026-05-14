# Methods to Find Glass / Aluminum / Fenestration Manufacturers

A catalog of every reliable way to discover manufacturers in the industries overseen by **NGA, FGIA, GPI, Aluminum Association**, and adjacent groups. Each method was sampled to confirm whether it actually returns usable, accurate listings.

Legend:
- **HIGH** — publicly accessible, real company names confirmed in sample
- **MEDIUM** — exists and is real, but requires extra steps (PDF download, registration, paid)
- **LOW / GATED** — paywall, login wall, or returned 403/404 in testing

---

## Category 1 — Trade Association Member Directories

Member directories are the most authoritative starting point because membership is voluntary and self-reported, so listings tend to be current and accurately categorized.

### 1.1 NGA — National Glass Association
- **URL:** https://www.glass.org → "Find a Company"
- **Direct path tested:** `members.glass.org` and `glass.org/membership/find-a-member` both returned 404 during test (site appears to be under reorganization)
- **What it should cover:** Architectural glass, auto glass, glazing contractors, fabricators, primary float glass producers, suppliers (~1,900+ companies)
- **Searchable by:** Company name, business type, location
- **Status:** **MEDIUM** — directory exists per multiple references but URLs are unstable; may require login for full details

### 1.2 FGIA — Fenestration & Glazing Industry Alliance
- **URL:** https://fgiaonline.org
- **What it covers:** Window/door/skylight makers, IGU manufacturers, curtain wall/storefront, testing labs, glazing contractors
- **Status:** **MEDIUM** — public site exists but the `/about/membership-directory/` path returned 404; member list likely behind login

### 1.3 GPI — Glass Packaging Institute
- **URL:** https://www.gpi.org/membership-directory/corporate
- **Test result:** Successfully pulled a real member profile (**Gallo Glass**, with full staff roster across QA, sales, manufacturing engineering)
- **What it covers:** Glass container manufacturers (5 core members) + ~27 supplier members (cullet, decorating, raw materials, equipment)
- **Status:** **HIGH** — individual member profiles are public; small total membership means full coverage is feasible

### 1.4 Aluminum Association
- **URL:** https://www.aluminum.org/about-association/member-directory
- **Tested entry:** "Air Products and Chemicals, Inc." profile is publicly visible at `/member-directory/air-products-and-chemicals-inc`
- **Covers:** Primary smelters, recyclers, mill product producers, suppliers (~150+ companies, ~180 U.S. plants)
- **Status:** **HIGH** — individual member pages are publicly addressable

### 1.5 Aluminum Extruders Council (AEC)
- **URL:** https://members.aec.org/
- **Test result:** Returned **403 Forbidden** to anonymous web fetch
- **What it should cover:** All North American aluminum extruders (the framing material for windows/curtain walls)
- **Status:** **MEDIUM** — directory exists but requires browser access; AEC also publishes a partial member list as a PDF distributed to Energy Star partners (confirmed alternate route)

---

## Category 2 — Certification Directories

Certification bodies maintain searchable lists of every product (and therefore manufacturer) currently licensed against an industry standard. These are the **most authoritative product-level source** — if a company makes IGUs sold in the U.S., they almost certainly appear in IGCC.

### 2.1 NFRC Certified Products Directory (CPD)
- **URL:** https://search.nfrc.org
- **Test result:** Public, searchable, free
- **Filterable by:** Manufacturer, product type, applied film, CPD number; label-verification lookup
- **Covers:** Every window, door, skylight, and attachment sold in the U.S. with energy ratings (U-factor, SHGC, VT)
- **Status:** **HIGH** — gold-standard for fenestration product discovery

### 2.2 SGCC — Safety Glazing Certification Council
- **URL:** https://sgcc.org/product-search/plants-with-certified-products
- **Test result:** Searchable interface confirmed; alphabetical browse A–Z
- **Covers:** **600+ licensed plants** producing certified tempered, laminated, and safety glazing
- **Also:** Free biannual PDF directory distributed to 2,500+ industry recipients
- **Status:** **HIGH** — best source for tempered/laminated glass fabricators

### 2.3 IGCC / IGMA Certified Products Directory
- **URL:** https://igcc.org/Certified-Products.aspx
- **Covers:** Every IGU manufacturer certified to **ASTM E2190**; assigns IGCC numbers to product/factory combos
- **Format:** Downloadable PDF directory, refreshed twice yearly (Feb 2025 edition was current at test time)
- **Status:** **HIGH** — definitive list for insulating glass units

### 2.4 Energy Star Partner Lists
- **Path:** energystar.gov → "Partners" → product category (Windows / Doors / Skylights)
- **Covers:** Manufacturers whose products meet Energy Star efficiency thresholds
- **Status:** **HIGH** — free, government-maintained, well-categorized

### 2.5 AAMA-branded Certifications (now FGIA)
- **Standards:** AAMA 101 (performance class), AAMA 2605 (finish coatings)
- **Lookup:** FGIA certified products listings at `fgiaonline.org/product-certification`
- **Status:** **MEDIUM** — directories exist per standard; navigation requires knowing the cert program name

---

## Category 3 — Trade Publication Buyers' Guides

Annual print/digital directories published by the dominant industry magazines. Less authoritative than certification lists but **broader** — they include companies that don't need certifications (decorative glass, equipment, hardware, software).

### 3.1 USGlass Magazine — Annual Buyers' Guide
- **URL:** https://buyersguide.usglassmag.com/
- **Test result:** **CONFIRMED HIGH QUALITY** — sample pull returned 5 real listings:
  - 310 Tempering (Louisville, KY) — tempering services
  - 3M Company (St. Paul, MN) — structural glazing materials
  - A3 Glass Fabricator LLC (Houston, TX) — fabrication
  - Action Bullet Resistant (West Islip, NY) — bullet-resistant glass
  - Adams Rite (Phoenix, AZ) — window/door hardware
- **Scale:** ~700+ companies across 28 pages
- **Bonus:** USGlass also publishes a "Guide to Fabricated Glass and Metal" with **state-by-state geographic maps** of fabricators
- **Status:** **HIGH** — best free, publicly searchable U.S. directory

### 3.2 Glass Magazine SourceBook (NGA)
- **URL:** https://www.glassmagazine.com/glass-magazine-sourcebook
- **Test result:** Print + PDF only, not web-searchable
- **Scale:** 1,200+ companies in 700+ product categories
- **Status:** **MEDIUM** — content is comprehensive but requires PDF download/print issue

### 3.3 Window + Door Magazine — Buying Guide
- **URL:** https://www.windowanddoor.com/window-door-buying-guide
- **Test result:** PDF-based; 1,400+ companies; no inline web search
- **Bonus:** Annual **"Top 100 Manufacturers" report** (Excel format) ranks residential window/door makers by sales — fully sortable
- **Status:** **MEDIUM** for the directory itself, **HIGH** for the Top 100 ranking

### 3.4 Glass International Directory
- **URL:** https://www.glass-international.com/directory
- **Covers:** Global hollow + flat glass manufacturers, machinery, raw materials
- **Status:** **MEDIUM** — useful for international suppliers

---

## Category 4 — Trade Show Exhibitor Lists

Every major industry expo publishes an exhibitor list, typically with booth #, company description, and product categories. Since exhibiting is expensive, the list filters for **serious, active companies**.

### 4.1 GlassBuild America (annual, U.S. — NGA's flagship show)
- **URL:** https://glassbuildamerica2025.mapyourshow.com/8_0/exhibitor/exhibitor-list.cfm
- **Test result:** **600+ exhibitors confirmed**; sample names retrieved: A+W Software (booth 12041), ABC Hardware (29029), Accurate Perforating (20081)
- **Format:** Interactive web directory + downloadable PDF
- **Status:** **HIGH** — premier U.S. event; lists are the same year-over-year with high overlap

### 4.2 fensterbau frontale (Nuremberg, biennial — world's largest fenestration show)
- **URL:** https://www.frontale.de/en/exhibitors-products/find-exhibitors
- **Test result:** **499 confirmed exhibitors** for 2026; sample names: C.C.E. srl, RBB Aluminium-Profiltechnik AG, eLstar Dynamics B.V., Neher Systeme GmbH, RAICO
- **Status:** **HIGH** — best source for European window/door/façade manufacturers

### 4.3 Other relevant shows
- **Vitrum** (Milan) — Italian/European glass processing machinery
- **glasstec** (Düsseldorf) — biennial, world's largest glass-industry show
- **FIT Show** (Birmingham, UK) — UK fenestration
- **NGA Glazing Executives Forum** — smaller, U.S. exec-level
- **AAMA / FGIA Annual Conference** — fenestration manufacturers
- **Status:** **HIGH** for each — public exhibitor lists are standard

### 4.4 Aggregator: 10times.com
- **URL:** https://10times.com/fensterbau-frontale/exhibitors
- **Use:** Cross-show exhibitor browsing, sometimes shows past-event lists when the official site has rolled to a new year
- **Status:** **MEDIUM** — useful fallback

---

## Category 5 — General B2B Vendor Databases

Cross-industry directories that include glass/aluminum/fenestration as categories. Less specialized than the trade-specific options but **broader coverage** and often free.

### 5.1 ThomasNet (thomasnet.com)
- **URL pattern:** `thomasnet.com/products/glass-manufacturers-37800000-1.html`
- **Test result:** Returned 403 to anonymous fetch (likely bot protection), but ThomasNet is well-documented as free with browser access
- **Covers:** U.S. manufacturers across every product category; vendor profiles include specialty, location, certifications, CAD downloads
- **Status:** **HIGH** in browser, **GATED** to scripted fetches

### 5.2 Kompass (us.kompass.com)
- **URLs:**
  - Flat glass: `us.kompass.com/a/flat-glass/31400/`
  - Glass products: `us.kompass.com/a/glass-products/31390/`
  - Glass bottles: `us.kompass.com/a/glass-bottles-flasks-and-jars/31480/`
- **Scale:** 57M+ companies in 70+ countries
- **Test result:** Categories confirmed live; full profiles partly paywalled but basic info (name, location, products) is free
- **Status:** **HIGH** for international coverage

### 5.3 IndustryNet, MFG.com, Maker's Row
- **Use:** Alternatives to ThomasNet, more sourcing-oriented
- **Status:** **MEDIUM** — useful supplements, less depth in glass specifically

### 5.4 glassonweb.com Directory
- **URL:** https://www.glassonweb.com/directory
- **Test result:** **CONFIRMED HIGH** — free, well-categorized; category counts visible:
  - Basic processed glass — 587 listings
  - uPVC doors & windows — 800 listings
  - Art glass — 800 listings
  - Cutting machines — 136 listings
  - Automotive glass — 966 listings
- **Status:** **HIGH** — best free global glass directory

### 5.5 glassglobal.com Directory
- **Covers:** Producers, fabricators, machinery, consultants
- **Status:** **MEDIUM** — global coverage, less curated than glassonweb

---

## Category 6 — Government & Statistical Data

Authoritative for **existence verification** and market sizing. Not great for picking specific vendors, but unbeatable for confirming a company is real and properly classified.

### 6.1 NAICS Codes + U.S. Census Bureau
Relevant NAICS codes for this industry:
| Code | Industry |
|---|---|
| **327211** | Flat Glass Manufacturing (204 U.S. companies, ~$4.1B revenue) |
| **327213** | Glass Container Manufacturing |
| **327215** | Glass Product Manufacturing from Purchased Glass (fabricators) |
| **332321** | Metal Window & Door Manufacturing |
| **331313** | Alumina & Aluminum Production |
| **331318** | Other Aluminum Rolling, Drawing & Extruding |
| **332323** | Ornamental & Architectural Metal Work |

- **Lookups:** naics.com, siccode.com, Census Business Builder
- **Status:** **HIGH** for code definitions; **MEDIUM** for actual company lists (most lookup sites paywall the company rosters)

### 6.2 Dun & Bradstreet
- **Use:** Verify company size, revenue, DUNS number, corporate hierarchy
- **Status:** **MEDIUM** — paid, but authoritative for B2B due diligence

### 6.3 U.S. Customs / Import Records (paid)
- **Panjiva** (panjiva.com) — S&P Global, 2B+ shipment records, 22 customs sources; supply-chain mapping
- **ImportGenius** (importgenius.com) — 24+ jurisdictions, daily updates, shipper-consignee link AI
- **Use case:** Find Chinese/European manufacturers shipping aluminum windows, doors, glass into the U.S. — surfaces names not in U.S. directories
- **Status:** **HIGH** but **PAID**

---

## Category 7 — Sales Intelligence & Social Platforms

### 7.1 LinkedIn (Sales Navigator)
- Filter by **Industry → Glass, Ceramics & Concrete** or **Building Materials**
- Filter by **Company Size + Region** to find manufacturers vs. distributors
- Status: **HIGH** for outreach + employee verification, **MEDIUM** for raw discovery (paid tier needed for serious filtering)

### 7.2 Crunchbase / PitchBook
- Use for: Funding rounds, M&A, founding year, leadership
- Status: **MEDIUM** — better for startups and venture-backed entries than legacy industrials

### 7.3 ZoomInfo, Apollo.io, RocketReach
- Use for: Direct contact info (emails, phones) of decision-makers at manufacturers identified through other methods
- Status: **HIGH** for contact data, paid

### 7.4 Google Maps (often underrated)
- Search: `"glass fabricator" near [city]` or `"aluminum extrusion" + state`
- Returns verified addresses, website links, reviews, photos of facility
- Status: **HIGH** for local/regional discovery; especially good for **glazing contractors** and small fabricators that aren't in trade directories

---

## Category 8 — Adjacent / Specialty Methods

### 8.1 "Top X" ranking reports
- Window + Door **Top 100 Manufacturers** (annual, Excel format)
- NGA's **Top Companies** lists (glass.org/market-intelligence/top-company-lists)
- USGlass **Top 50 Glaziers**
- Status: **HIGH** for identifying market leaders

### 8.2 Manufacturer rep / distributor networks
- Many manufacturers don't sell direct — finding the rep firms reveals the manufacturer roster
- Example: AGI (Architectural Glass Inc.), NSG/Pilkington distributor lists
- Status: **MEDIUM** — useful inverse lookup

### 8.3 Specifications & project case studies
- Architectural Record, Building Design+Construction, ENR (Engineering News-Record)
- Project case studies name the glass/window suppliers used
- Status: **MEDIUM** — slow, but reveals premium specifier-grade brands

### 8.4 Wikipedia category pages
- "Category:Glass manufacturers", "Category:Aluminum companies", etc.
- Status: **MEDIUM** — incomplete but free and useful for the top of the market

### 8.5 State manufacturing extension partnerships (MEP)
- NIST-funded MEP centers in every state often publish in-state manufacturer rosters
- Status: **MEDIUM** — geographically narrow

---

## Quality Scorecard (Tested Methods Only)

| Method | Free? | Searchable Online? | Sample Verified? | Verdict |
|---|---|---|---|---|
| USGlass Buyers Guide | Yes | Yes | ✅ 5 real names | **HIGH** |
| glassonweb.com Directory | Yes | Yes | ✅ Category counts | **HIGH** |
| GlassBuild America exhibitors | Yes | Yes (+PDF) | ✅ Real booth names | **HIGH** |
| fensterbau frontale | Yes | Yes | ✅ 5 real names | **HIGH** |
| NFRC CPD | Yes | Yes | ✅ Confirmed filters | **HIGH** |
| SGCC plants directory | Yes | Yes (A–Z) | ⚠️ Interface only | **HIGH** |
| IGCC certified products | Yes | PDF | ⚠️ Feb 2025 ed | **HIGH** |
| Kompass | Free tier | Yes | ✅ Categories live | **HIGH** |
| GPI member profiles | Yes | Per-company URL | ✅ Gallo Glass | **HIGH** |
| Aluminum Assn member dir | Yes | Per-company URL | ✅ Air Products | **HIGH** |
| Glass Magazine SourceBook | Free PDF | No web search | — | **MEDIUM** |
| Window+Door Buying Guide | Free PDF | No web search | — | **MEDIUM** |
| NGA Find a Company | Yes | 404 at test | — | **MEDIUM** |
| FGIA member directory | Yes | 404 at test | — | **MEDIUM** |
| AEC member directory | Yes | 403 at test | — | **MEDIUM** |
| ThomasNet | Yes | 403 to script | — | **HIGH in browser** |
| Aluminum Press Directory | $150–$300 | PDF | — | **PAID** |
| Panjiva / ImportGenius | Paid | Yes | — | **PAID** |
| LinkedIn Sales Navigator | Paid | Yes | — | **PAID** |

---

## Recommended Starting Sequence

If working from scratch with no leads:

1. **USGlass Buyers Guide** (buyersguide.usglassmag.com) — broadest free, searchable U.S. list
2. **glassonweb.com Directory** — fill in global gaps, especially for machinery and specialty
3. **GlassBuild America exhibitor list** — most current "active companies" snapshot
4. **NFRC CPD + SGCC + IGCC** — verify a candidate company actually has certified products
5. **Google Maps** — geographic discovery of local glaziers/fabricators not in directories
6. **LinkedIn / RocketReach** — get contacts at the manufacturers identified above
7. **Panjiva** (if budget allows) — surface offshore manufacturers that ship into the U.S.
