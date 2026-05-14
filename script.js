'use strict';

const SEGMENT_LABEL = {
  architectural_glass: 'Architectural glass',
  fenestration: 'Fenestration',
  aluminum_extrusion: 'Aluminum extrusion',
};
const SEGMENT_BADGE = {
  architectural_glass: 'badge-glass',
  fenestration: 'badge-fen',
  aluminum_extrusion: 'badge-alu',
};

const NA_VALUES = new Set(['', 'not available', 'n/a', 'not applicable', 'none', 'unclear']);
const NA_KEEP = new Set(['accepting_new_customers', 'red_flags']);

const FIELD_SECTIONS = [
  { title: 'Identity', fields: ['parent_company', 'hq_address', 'hq_city', 'hq_state', 'hq_country', 'year_founded', 'years_in_business', 'ownership'] },
  { title: 'Products & specialty', fields: ['primary_specialty', 'secondary_lines', 'glass_types', 'frame_materials', 'market_segment', 'custom_capabilities', 'max_dimensions', 'moq'] },
  { title: 'Capabilities', fields: ['num_plants', 'plant_locations', 'typical_lead_time'] },
  { title: 'Trust & certifications', fields: ['trade_assoc_memberships', 'product_certifications', 'warranty_terms', 'notable_projects'] },
  { title: 'Pricing & sales', fields: ['pricing_tier', 'public_price_list', 'sales_model', 'quote_turnaround'] },
  { title: 'Contact', fields: ['main_phone', 'sales_email', 'cs_email', 'website', 'contact_form_url'] },
  { title: 'Reachability', fields: ['accepting_new_customers', 'preferred_contact_method', 'response_time_reputation'] },
  { title: 'Digital presence', fields: ['linkedin_url', 'linkedin_followers', 'linkedin_last_post_recency', 'facebook_url', 'instagram_url', 'youtube_url', 'twitter_url', 'recent_trade_show'] },
  { title: 'Leadership', fields: ['ceo_president', 'vp_sales_or_commercial'] },
  { title: 'Red flags', fields: ['red_flags'], danger: true },
];

const FIELD_LABEL = {
  parent_company: 'Parent company',
  hq_address: 'HQ address',
  hq_city: 'HQ city',
  hq_state: 'HQ state',
  hq_country: 'Country',
  year_founded: 'Year founded',
  years_in_business: 'Years in business',
  ownership: 'Ownership',
  primary_specialty: 'Primary specialty',
  secondary_lines: 'Secondary product lines',
  glass_types: 'Glass types',
  frame_materials: 'Frame materials / alloys',
  market_segment: 'Market segments served',
  custom_capabilities: 'Custom capabilities',
  max_dimensions: 'Max product dimensions',
  moq: 'Minimum order quantity',
  num_plants: 'Number of plants',
  plant_locations: 'Plant locations',
  typical_lead_time: 'Typical lead time',
  trade_assoc_memberships: 'Trade association memberships',
  product_certifications: 'Product certifications',
  warranty_terms: 'Warranty terms',
  notable_projects: 'Notable projects',
  pricing_tier: 'Pricing tier',
  public_price_list: 'Public price list',
  sales_model: 'Sales model',
  quote_turnaround: 'Quote turnaround',
  main_phone: 'Main phone',
  sales_email: 'Sales email',
  cs_email: 'Customer service email',
  website: 'Website',
  contact_form_url: 'Contact form',
  accepting_new_customers: 'Accepting new customers',
  preferred_contact_method: 'Preferred contact method',
  response_time_reputation: 'Response-time reputation',
  linkedin_url: 'LinkedIn',
  linkedin_followers: 'LinkedIn followers',
  linkedin_last_post_recency: 'LinkedIn activity',
  facebook_url: 'Facebook',
  instagram_url: 'Instagram',
  youtube_url: 'YouTube',
  twitter_url: 'Twitter / X',
  recent_trade_show: 'Most recent trade show',
  ceo_president: 'CEO / President',
  vp_sales_or_commercial: 'VP of Sales / Commercial',
  red_flags: 'Red flags',
};

const URL_FIELDS = new Set(['website', 'contact_form_url', 'linkedin_url', 'facebook_url', 'instagram_url', 'youtube_url', 'twitter_url']);
const EMAIL_FIELDS = new Set(['sales_email', 'cs_email']);
const PHONE_FIELDS = new Set(['main_phone']);

const state = {
  all: [],
  filtered: [],
  segment: 'all',
  pricing: '',
  sort: 'name',
  search: '',
  acceptingOnly: false,
  hideRedFlags: false,
};

const $ = (sel) => document.querySelector(sel);
const grid = $('#grid');
const emptyEl = $('#empty');
const countEl = $('#count');
const dialog = $('#detail');
const detailContent = $('#detail-content');

function isNA(value) {
  if (value == null) return true;
  return NA_VALUES.has(String(value).trim().toLowerCase());
}

function hasRedFlag(v) {
  const rf = (v.red_flags || '').toLowerCase().trim();
  if (!rf) return false;
  if (rf === 'none identified' || rf === 'none' || rf === 'not available') return false;
  return true;
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function urlify(value) {
  let url = String(value).trim();
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  return url;
}

function renderValueHTML(field, value) {
  if (isNA(value)) return '<span class="na">not available</span>';
  const safe = escapeHTML(value);
  if (URL_FIELDS.has(field)) {
    return `<a href="${escapeHTML(urlify(value))}" target="_blank" rel="noopener">${safe}</a>`;
  }
  if (EMAIL_FIELDS.has(field)) {
    return `<a href="mailto:${safe}">${safe}</a>`;
  }
  if (PHONE_FIELDS.has(field)) {
    const tel = String(value).replace(/[^+\d]/g, '');
    return `<a href="tel:${tel}">${safe}</a>`;
  }
  // semicolon-joined multi-values
  if (safe.includes(';')) {
    return safe.split(';').map((p) => `<span class="tag">${p.trim()}</span>`).join(' ');
  }
  return safe;
}

function badgeFor(seg) {
  return `<span class="badge ${SEGMENT_BADGE[seg] || ''}">${SEGMENT_LABEL[seg] || seg}</span>`;
}

function cardLocation(v) {
  const parts = [v.hq_city, v.hq_state, v.hq_country].filter((p) => !isNA(p));
  if (!parts.length) return '<span class="na">Location not available</span>';
  return escapeHTML(parts.join(', '));
}

function tinyLink(href, label, icon) {
  if (isNA(href)) return '';
  return `<a href="${escapeHTML(urlify(href))}" target="_blank" rel="noopener" title="${label}">${icon}${label}</a>`;
}

function renderCard(v, idx) {
  const acceptingTag = (v.accepting_new_customers || '').toLowerCase() === 'yes'
    ? '<span class="tag accepting">accepting</span>' : '';
  const tier = (v.pricing_tier || '').toLowerCase();
  const tierTag = ['budget', 'mid', 'premium'].includes(tier)
    ? `<span class="tag tier-${tier}">${tier}</span>` : '';
  const redFlagTag = hasRedFlag(v) ? '<span class="tag redflag">⚠ red flag</span>' : '';
  const specialty = isNA(v.primary_specialty)
    ? '<span class="na">Specialty not available</span>'
    : escapeHTML(v.primary_specialty);

  const linkIcons = [
    tinyLink(v.website, 'Website', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>'),
    tinyLink(v.main_phone, 'Phone', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z"/></svg>'),
    tinyLink(v.linkedin_url, 'LinkedIn', '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18V9.93H5.67V18zM7 8.79a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.42c0-2.37-1.27-3.47-2.96-3.47-1.37 0-1.98.75-2.32 1.28V9.93h-2.67c.04.75 0 8.07 0 8.07h2.67v-4.51c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.35.73 1.35 1.8V18z"/></svg>'),
  ].filter(Boolean).join('');

  return `
  <article class="card" data-idx="${idx}" tabindex="0" role="button" aria-label="View details for ${escapeHTML(v.company_name)}">
    <div class="card-head">
      <div>
        <h2 class="card-name">${escapeHTML(v.company_name)}</h2>
        <div class="card-loc">${cardLocation(v)}</div>
      </div>
      ${badgeFor(v.segment)}
    </div>
    <p class="card-specialty">${specialty}</p>
    <div class="card-meta">${tierTag}${acceptingTag}${redFlagTag}</div>
    <div class="card-links">${linkIcons || '<span class="na" style="font-size:12px">No public links</span>'}</div>
  </article>`;
}

function renderDetail(v) {
  const sections = FIELD_SECTIONS.map((sec) => {
    const rows = sec.fields.map((f) => {
      const val = v[f];
      const naAlready = isNA(val);
      const ddClass = naAlready ? 'na' : '';
      return `<dt>${FIELD_LABEL[f] || f}</dt><dd class="${ddClass}">${renderValueHTML(f, val)}</dd>`;
    }).join('');
    return `
      <section class="section ${sec.danger ? 'redflag' : ''}">
        <h3>${sec.title}</h3>
        <dl class="fields">${rows}</dl>
      </section>`;
  }).join('');

  detailContent.innerHTML = `
    <div class="detail-head">
      <div>
        ${badgeFor(v.segment)}
        <h2>${escapeHTML(v.company_name)}</h2>
        <div class="loc">${cardLocation(v)}</div>
      </div>
      <button type="button" class="close-btn" aria-label="Close" id="close-btn">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>
    ${sections}`;
  $('#close-btn').addEventListener('click', () => dialog.close());
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}

function applyFilters() {
  const q = state.search.trim().toLowerCase();
  const accepting = state.acceptingOnly;
  const hideRF = state.hideRedFlags;

  let filtered = state.all.filter((v) => {
    if (state.segment !== 'all' && v.segment !== state.segment) return false;
    if (state.pricing && (v.pricing_tier || '').toLowerCase() !== state.pricing) return false;
    if (accepting && (v.accepting_new_customers || '').toLowerCase() !== 'yes') return false;
    if (hideRF && hasRedFlag(v)) return false;
    if (q) {
      const hay = [v.company_name, v.parent_company, v.primary_specialty, v.secondary_lines, v.hq_city, v.hq_state, v.plant_locations, v.glass_types, v.frame_materials]
        .map((x) => (x || '').toLowerCase()).join(' || ');
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  filtered.sort((a, b) => {
    switch (state.sort) {
      case 'name-desc': return (b.company_name || '').localeCompare(a.company_name || '');
      case 'founded': return numeric(a.year_founded) - numeric(b.year_founded);
      case 'founded-desc': return numeric(b.year_founded) - numeric(a.year_founded);
      case 'recent': return recencyRank(a) - recencyRank(b);
      case 'name':
      default: return (a.company_name || '').localeCompare(b.company_name || '');
    }
  });

  state.filtered = filtered;
  render();
}

function numeric(v) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : 99999;
}

function recencyRank(v) {
  const r = (v.linkedin_last_post_recency || '').toLowerCase();
  if (r.includes('active')) return 0;
  if (r.includes('moderate')) return 1;
  if (r.includes('stale')) return 2;
  return 3;
}

function render() {
  if (!state.filtered.length) {
    grid.innerHTML = '';
    emptyEl.hidden = false;
  } else {
    emptyEl.hidden = true;
    grid.innerHTML = state.filtered.map((v, i) => renderCard(v, i)).join('');
  }
  countEl.textContent = `${state.filtered.length} of ${state.all.length} vendor${state.all.length === 1 ? '' : 's'}`;
}

function bindEvents() {
  $('#search').addEventListener('input', (e) => {
    state.search = e.target.value;
    applyFilters();
  });
  document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      state.segment = chip.dataset.segment;
      applyFilters();
    });
  });
  $('#pricing').addEventListener('change', (e) => { state.pricing = e.target.value; applyFilters(); });
  $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; applyFilters(); });
  $('#accepting').addEventListener('change', (e) => { state.acceptingOnly = e.target.checked; applyFilters(); });
  $('#hide-redflags').addEventListener('change', (e) => { state.hideRedFlags = e.target.checked; applyFilters(); });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    if (e.target.closest('a')) return;
    const v = state.filtered[parseInt(card.dataset.idx, 10)];
    if (v) renderDetail(v);
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.card');
    if (!card) return;
    e.preventDefault();
    const v = state.filtered[parseInt(card.dataset.idx, 10)];
    if (v) renderDetail(v);
  });
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      dialog.close();
    }
  });
}

async function load() {
  try {
    const res = await fetch('vendors.csv');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
    state.all = parsed.data.filter((r) => r.company_name && r.company_name.trim());
    $('#stat-total').textContent = state.all.length;
    bindEvents();
    applyFilters();
  } catch (err) {
    grid.innerHTML = `<p class="empty">Failed to load vendor data: ${escapeHTML(err.message)}</p>`;
    console.error(err);
  }
}

// ───── gate ─────
const PW = 'glass';
const AUTH_KEY = 'gam-auth';

function unlock() {
  document.getElementById('gate').remove();
  document.getElementById('app').hidden = false;
  load();
}

function initGate() {
  if (sessionStorage.getItem(AUTH_KEY) === 'ok') {
    unlock();
    return;
  }
  const form = document.getElementById('gate-form');
  const pw = document.getElementById('gate-pw');
  const err = document.getElementById('gate-error');
  const card = form;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pw.value === PW) {
      sessionStorage.setItem(AUTH_KEY, 'ok');
      unlock();
    } else {
      err.hidden = false;
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
      pw.select();
    }
  });
}

initGate();
