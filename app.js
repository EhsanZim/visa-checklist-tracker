// =============================================
//  Visa Document Checklist Tracker — app.js
// =============================================

const CHECKLISTS = {
  "Australia": {
    "Tourist": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport of each applicant (current & all expired)",
            "Notarized copy of all passport pages including bio data, alterations & back page",
            "Recent passport-sized photographs (45mm x 35mm) against plain background",
            "NID with English translation of each applicant",
            "Birth certificate of each applicant"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements (personal & business) showing consistent savings history",
            "Solvency letter mentioning balance in USD",
            "Copies of documents showing other funds or assets held",
            "Taxation documents for last three years"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Marriage certificate with English translation (if spouse accompanying)",
            "Visa copies of all previous travel out of home country",
            "Utility bills of last 3 months",
            "Ticket & hotel booking copy (if available)",
            "Tour plan / itinerary"
          ]
        }
      ]
    },
    "Tourist (Friend/Family Invitation)": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport of each applicant (current & all expired)",
            "Notarized copy of all passport pages",
            "Recent passport-sized photographs (45mm x 35mm)",
            "NID with English translation",
            "Birth certificate of each applicant"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements showing consistent savings history",
            "Solvency letter mentioning balance in USD",
            "Taxation documents for last three years"
          ]
        },
        {
          "name": "Sponsor / Invitation Documents",
          "items": [
            "Form 1149 (if family member is sponsoring)",
            "Reference / invitation letter from sponsor",
            "Passport copy of sponsor / relative",
            "Current visa copy of sponsor/relative (if not a citizen)",
            "3 to 6 months pay slips of sponsor from Australian employer"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Marriage certificate with English translation (if applicable)",
            "Visa copies of all previous travel",
            "Utility bills of last 3 months",
            "Ticket & hotel booking copy (if available)",
            "Tour plan / itinerary"
          ]
        }
      ]
    },
    "Business": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport of each applicant (current & all expired)",
            "Notarized copy of all passport pages",
            "Recent passport-sized photographs (45mm x 35mm)",
            "NID with English translation",
            "Birth certificate"
          ]
        },
        {
          "name": "Business Documents",
          "items": [
            "Invitation letter from Australian host organization",
            "Conference registration details (if attending event)",
            "Letter from employer explaining purpose of visit",
            "Evidence of prior contact with Australian businesses",
            "Letter of invitation with supporting documents",
            "Evidence company is an active business (e.g., annual report)",
            "Proof of professional qualifications"
          ]
        },
        {
          "name": "Employment Documents (Job Holders)",
          "items": [
            "No Objection Certificate (NOC) from employer",
            "Salary certificate (position, salary & length of employment)",
            "Last 6 months salary transaction statement from bank",
            "Visiting card"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements showing consistent savings",
            "Solvency letter mentioning balance in USD",
            "Taxation documents for last three years"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Visa copies of all previous travel",
            "Utility bills of last 3 months",
            "Tour / visit plan / itinerary"
          ]
        }
      ]
    },
    "Student": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport (current & all expired)",
            "Notarized copy of all passport pages",
            "Recent passport-sized photographs (45mm x 35mm)",
            "NID with English translation",
            "Birth certificate"
          ]
        },
        {
          "name": "Academic Documents",
          "items": [
            "Enrolment letter / offer letter from Australian education institute",
            "Academic transcripts and certificates",
            "English language test results (IELTS/PTE/TOEFL)"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements showing sufficient funds for study & living",
            "Solvency letter in USD",
            "Sponsor's financial documents (if parent/guardian sponsoring)",
            "Scholarship letter (if applicable)"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Genuine Temporary Entrant (GTE) statement",
            "Marriage certificate with English translation (if applicable)",
            "Visa copies of all previous travel",
            "Overseas Student Health Cover (OSHC) policy"
          ]
        }
      ]
    }
  },
  "UK": {
    "Tourist": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport of each applicant (current & all expired)",
            "Notarized copy of all passport pages including bio data & back page",
            "Recent passport-sized photographs (45mm x 35mm) against plain background",
            "NID with English translation of each applicant",
            "Birth certificate of each applicant"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements (personal & business) showing consistent savings history",
            "Solvency letter mentioning balance in GBP",
            "Copies of documents showing other funds or assets held",
            "Taxation documents for last three years"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Marriage certificate with English translation (if spouse accompanying)",
            "Visa copies of all previous travel out of home country",
            "Utility bills of last 3 months",
            "Ticket & hotel booking copy (if available)",
            "Tour plan / itinerary"
          ]
        }
      ]
    },
    "Tourist (Friend/Family Invitation)": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport of each applicant (current & all expired)",
            "Notarized copy of all passport pages",
            "Recent passport-sized photographs (45mm x 35mm)",
            "NID with English translation",
            "Birth certificate of each applicant"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements showing consistent savings history",
            "Solvency letter mentioning balance in GBP",
            "Taxation documents for last three years"
          ]
        },
        {
          "name": "Sponsor / Invitation Documents",
          "items": [
            "Reference / invitation letter from UK sponsor",
            "Passport copy of UK sponsor / relative",
            "Current visa copy of sponsor/relative (if not a UK citizen)",
            "Utility bills & house agreement of UK sponsor / relative"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Marriage certificate with English translation (if applicable)",
            "Visa copies of all previous travel",
            "Utility bills of last 3 months",
            "Ticket & hotel booking copy (if available)",
            "Tour plan / itinerary"
          ]
        }
      ]
    },
    "Business": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport (current & all expired)",
            "Notarized copy of all passport pages",
            "Recent passport-sized photographs (45mm x 35mm)",
            "NID with English translation",
            "Birth certificate"
          ]
        },
        {
          "name": "Business Documents",
          "items": [
            "Invitation letter from UK host organization",
            "Conference registration details (if attending event)",
            "Letter from employer explaining purpose of visit",
            "Evidence of your current employment",
            "Evidence company is an active business (e.g. annual report)",
            "Scanned copy of host's ID / passport"
          ]
        },
        {
          "name": "Employment Documents (Job Holders)",
          "items": [
            "No Objection Certificate (NOC) from employer",
            "Salary certificate (position, salary & length of employment)",
            "Last 6 months salary transaction statement from bank",
            "Visiting card"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements showing consistent savings",
            "Solvency letter in GBP",
            "Taxation documents for last three years"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Visa copies of all previous travel",
            "Utility bills of last 3 months",
            "Visit plan / itinerary"
          ]
        }
      ]
    },
    "Student": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Passport (current & all expired)",
            "Notarized copy of all passport pages",
            "Recent passport-sized photographs (45mm x 35mm)",
            "NID with English translation",
            "Birth certificate"
          ]
        },
        {
          "name": "Academic Documents",
          "items": [
            "Confirmation of Acceptance for Studies (CAS) from UK institution",
            "Academic transcripts and certificates",
            "English language test results (IELTS/PTE)",
            "ATAS certificate (if required for course)"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements showing sufficient funds (tuition + £1,334/month for London)",
            "Solvency letter in GBP",
            "Sponsor financial documents (if parent/guardian sponsoring)",
            "Scholarship letter (if applicable)"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Personal statement / SOP",
            "Marriage certificate with English translation (if applicable)",
            "Tuberculosis (TB) test results",
            "Visa copies of all previous travel",
            "UK Healthcare Surcharge (IHS) payment receipt"
          ]
        }
      ]
    }
  },
  "USA": {
    "Tourist (B1/B2)": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Valid passport (minimum 6 months validity beyond intended stay)",
            "Previous passports (all expired)",
            "Recent passport-sized photograph (5cm x 5cm, white background)",
            "NID / National ID card",
            "Birth certificate"
          ]
        },
        {
          "name": "DS-160 & Visa Application",
          "items": [
            "Completed DS-160 online application form",
            "DS-160 confirmation page (barcode page)",
            "Visa application fee payment receipt (MRV fee)",
            "Interview appointment confirmation letter"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements for last 6 months (personal & business)",
            "Solvency letter mentioning balance in USD",
            "Income tax returns for last 3 years",
            "Salary certificate or proof of income",
            "Property ownership documents or other assets"
          ]
        },
        {
          "name": "Employment / Ties to Home Country",
          "items": [
            "No Objection Certificate (NOC) from employer",
            "Salary certificate (position, salary & length of employment)",
            "Leave approval letter from employer",
            "Business ownership documents (if self-employed)",
            "Trade license (if self-employed)"
          ]
        },
        {
          "name": "Travel Documents",
          "items": [
            "Hotel booking confirmation",
            "Flight itinerary (round trip)",
            "Travel itinerary / tour plan",
            "Travel insurance policy",
            "Visa copies of all previous US or international travel"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Marriage certificate (if spouse accompanying)",
            "Utility bills of last 3 months",
            "Property documents showing ties to home country"
          ]
        }
      ]
    },
    "Business (B1)": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Valid passport (minimum 6 months validity)",
            "Previous passports",
            "Recent passport-sized photograph (5cm x 5cm, white background)",
            "NID / National ID card",
            "Birth certificate"
          ]
        },
        {
          "name": "DS-160 & Visa Application",
          "items": [
            "Completed DS-160 online application form",
            "DS-160 confirmation page",
            "Visa application fee payment receipt (MRV fee)",
            "Interview appointment confirmation letter"
          ]
        },
        {
          "name": "Business Documents",
          "items": [
            "Invitation letter from US company / host organization",
            "Letter from employer explaining purpose of visit",
            "Conference or event registration details (if applicable)",
            "Business card",
            "Evidence of company being an active business"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements for last 6 months",
            "Solvency letter in USD",
            "Income tax returns for last 3 years",
            "Company financial statements (if self-employed)"
          ]
        },
        {
          "name": "Employment Documents",
          "items": [
            "No Objection Certificate (NOC) from employer",
            "Salary certificate",
            "Leave approval letter",
            "Trade license (if self-employed)"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Flight itinerary",
            "Hotel booking or host accommodation confirmation",
            "Visit plan / itinerary",
            "Visa copies of all previous travel"
          ]
        }
      ]
    },
    "Student (F1)": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Valid passport (minimum 6 months validity)",
            "Previous passports",
            "Recent passport-sized photograph (5cm x 5cm, white background)",
            "NID / National ID card",
            "Birth certificate"
          ]
        },
        {
          "name": "DS-160 & Visa Application",
          "items": [
            "Completed DS-160 online application form",
            "DS-160 confirmation page",
            "SEVIS fee payment receipt (I-901)",
            "Visa application fee payment receipt (MRV fee)",
            "Interview appointment confirmation letter"
          ]
        },
        {
          "name": "Academic Documents",
          "items": [
            "Form I-20 from SEVP-approved US institution",
            "Admission / acceptance letter from US university",
            "Academic transcripts and certificates",
            "Standardized test scores (SAT/GRE/GMAT as applicable)",
            "English language test scores (TOEFL/IELTS/Duolingo)"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements showing sufficient funds for tuition & living",
            "Solvency letter in USD",
            "Affidavit of support from sponsor (if parent/guardian sponsoring)",
            "Sponsor's bank statements and income proof",
            "Scholarship / financial aid award letter (if applicable)"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Statement of Purpose (SOP)",
            "Strong ties to home country (property, family, employment intent)",
            "Marriage certificate with English translation (if applicable)",
            "Visa copies of all previous travel"
          ]
        }
      ]
    }
  },
  "Schengen": {
    "Tourist": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Valid passport (minimum 3 months validity beyond intended stay)",
            "Previous passports (last 3 years)",
            "Completed Schengen visa application form",
            "Recent passport-sized photographs (35mm x 45mm, white/light background)",
            "NID / National ID card copy",
            "Birth certificate"
          ]
        },
        {
          "name": "Travel Insurance",
          "items": [
            "Travel insurance valid for all Schengen countries",
            "Minimum coverage of €30,000 for medical emergencies & repatriation"
          ]
        },
        {
          "name": "Travel Documents",
          "items": [
            "Round-trip flight reservation / booking",
            "Hotel bookings / accommodation confirmation for entire stay",
            "Detailed day-by-day travel itinerary",
            "Visa copies of all previous Schengen or international travel"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements for last 3–6 months",
            "Proof of sufficient funds (min. €50–100/day depending on country)",
            "Solvency letter from bank",
            "Income tax returns for last 3 years"
          ]
        },
        {
          "name": "Employment Documents",
          "items": [
            "No Objection Certificate (NOC) from employer",
            "Salary certificate (position, salary & length of employment)",
            "Leave approval / approved leave letter",
            "Utility bills of last 3 months",
            "Trade license & company bank statements (if self-employed)"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Marriage certificate with English translation (if spouse accompanying)",
            "Cover letter explaining purpose of visit"
          ]
        }
      ]
    },
    "Tourist (Friend/Family Invitation)": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Valid passport (minimum 3 months validity beyond intended stay)",
            "Previous passports (last 3 years)",
            "Completed Schengen visa application form",
            "Recent passport-sized photographs (35mm x 45mm)",
            "NID / National ID card copy",
            "Birth certificate"
          ]
        },
        {
          "name": "Travel Insurance",
          "items": [
            "Travel insurance valid for all Schengen countries",
            "Minimum coverage of €30,000"
          ]
        },
        {
          "name": "Sponsor / Invitation Documents",
          "items": [
            "Official invitation letter from Schengen-based host (notarized or from commune/municipality)",
            "Passport copy of host",
            "Residence permit or proof of citizenship of host",
            "Proof of host's accommodation (utility bills, house agreement / rental contract)",
            "Host's financial capacity documents (bank statements, pay slips)",
            "Scanned copy of host's ID / passport"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements for last 3–6 months",
            "Solvency letter from bank",
            "Income tax returns for last 3 years"
          ]
        },
        {
          "name": "Employment Documents",
          "items": [
            "NOC from employer",
            "Salary certificate",
            "Leave approval letter",
            "Utility bills of last 3 months"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Round-trip flight reservation",
            "Travel itinerary",
            "Marriage certificate with English translation (if applicable)",
            "Cover letter explaining purpose of visit"
          ]
        }
      ]
    },
    "Business": {
      "categories": [
        {
          "name": "Passport & Identity",
          "items": [
            "Valid passport (minimum 3 months validity beyond intended stay)",
            "Previous passports (last 3 years)",
            "Completed Schengen visa application form",
            "Recent passport-sized photographs (35mm x 45mm)",
            "NID / National ID card copy"
          ]
        },
        {
          "name": "Travel Insurance",
          "items": [
            "Travel insurance valid for all Schengen countries (min. €30,000 coverage)"
          ]
        },
        {
          "name": "Business Documents",
          "items": [
            "Invitation letter from Schengen-based company / host organization",
            "Letter from employer explaining purpose of visit",
            "Conference or seminar registration details (if applicable)",
            "Business card / visiting card",
            "Evidence of business relationship or prior contact"
          ]
        },
        {
          "name": "Financial Documents",
          "items": [
            "Bank statements for last 3–6 months",
            "Solvency letter in EUR",
            "Income tax returns for last 3 years",
            "Company bank statements (if self-employed)"
          ]
        },
        {
          "name": "Employment Documents",
          "items": [
            "NOC from employer",
            "Salary certificate",
            "Leave approval letter",
            "Trade license (if self-employed)",
            "Utility bills of last 3 months"
          ]
        },
        {
          "name": "Supporting Documents",
          "items": [
            "Round-trip flight reservation",
            "Hotel booking / accommodation confirmation",
            "Visit plan / itinerary",
            "Cover letter explaining purpose of visit"
          ]
        }
      ]
    }
  }
};

// ---- STATE ----
let state = {
  country: '',
  visaType: '',
  checked: {},
  notes: {},
  clientName: '',
  clientRef: '',
  appDate: ''
};

// ---- INIT ----
function init() {
  populateCountries();
  loadState();
  if (state.country) {
    document.getElementById('countrySelect').value = state.country;
    onCountryChange(true);
  }
  if (state.visaType) {
    document.getElementById('visaTypeSelect').value = state.visaType;
    renderChecklist();
  }
  document.getElementById('clientName').value = state.clientName || '';
  document.getElementById('clientRef').value = state.clientRef || '';
  document.getElementById('appDate').value = state.appDate || '';
}

// ---- POPULATE DROPDOWNS ----
function populateCountries() {
  const sel = document.getElementById('countrySelect');
  Object.keys(CHECKLISTS).forEach(country => {
    const opt = document.createElement('option');
    opt.value = country;
    opt.textContent = country;
    sel.appendChild(opt);
  });
}

function onCountryChange(skipReset = false) {
  const country = document.getElementById('countrySelect').value;
  const visaSel = document.getElementById('visaTypeSelect');
  visaSel.innerHTML = '<option value="">-- Select Visa Type --</option>';
  visaSel.disabled = !country;

  if (country && CHECKLISTS[country]) {
    Object.keys(CHECKLISTS[country]).forEach(type => {
      const opt = document.createElement('option');
      opt.value = type;
      opt.textContent = type;
      visaSel.appendChild(opt);
    });
  }

  if (!skipReset) {
    state.country = country;
    state.visaType = '';
    state.checked = {};
    state.notes = {};
    saveState();
    document.getElementById('checklistContainer').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>Now select a visa type to generate the checklist</p>
      </div>`;
    document.getElementById('progressWrap').style.display = 'none';
    document.getElementById('footerActions').style.display = 'none';
  }
}

// ---- RENDER CHECKLIST ----
function renderChecklist() {
  const country = document.getElementById('countrySelect').value;
  const visaType = document.getElementById('visaTypeSelect').value;
  state.country = country;
  state.visaType = visaType;
  saveState();

  if (!country || !visaType) return;
  const data = CHECKLISTS[country][visaType];
  if (!data) return;

  const container = document.getElementById('checklistContainer');
  container.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'checklist-header';
  const clientName = document.getElementById('clientName').value;
  header.innerHTML = `
    <div class="checklist-title">${country} — ${visaType} Visa</div>
    <div class="checklist-meta">
      ${clientName ? `Client: <strong>${clientName}</strong> &nbsp;|&nbsp;` : ''}
      Generated: ${new Date().toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'})}
    </div>`;
  container.appendChild(header);

  data.categories.forEach((cat, catIdx) => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.id = `cat-${catIdx}`;
    const checkedCount = cat.items.filter((_, i) => state.checked[`${catIdx}-${i}`]).length;
    card.innerHTML = `
      <div class="category-header" onclick="toggleCategory(${catIdx})">
        <span class="category-name">${cat.name}</span>
        <span class="category-badge ${checkedCount === cat.items.length ? 'done' : ''}" id="badge-${catIdx}">
          ${checkedCount}/${cat.items.length}
        </span>
      </div>
      <div class="category-body" id="cat-body-${catIdx}">
        ${cat.items.map((item, itemIdx) => buildDocItem(item, catIdx, itemIdx)).join('')}
      </div>`;
    container.appendChild(card);
  });

  updateProgress(data);
  document.getElementById('progressWrap').style.display = 'block';
  document.getElementById('footerActions').style.display = 'flex';
}

function buildDocItem(label, catIdx, itemIdx) {
  const key = `${catIdx}-${itemIdx}`;
  const isChecked = state.checked[key] || false;
  const note = state.notes[key] || '';
  return `
    <div class="doc-item ${isChecked ? 'checked' : ''}" id="item-${key}" onclick="toggleItem(${catIdx}, ${itemIdx}, event)">
      <div class="doc-checkbox"></div>
      <div class="doc-content">
        <div class="doc-label">${label}</div>
        <button class="doc-note-toggle" onclick="toggleNote(event, '${key}')">+ Add note</button>
        <textarea class="doc-note" id="note-${key}" placeholder="Add remark..."
          style="display:${note ? 'block' : 'none'}"
          onclick="event.stopPropagation()"
          onchange="saveNote('${key}', this.value)">${note}</textarea>
      </div>
    </div>`;
}

function toggleItem(catIdx, itemIdx, event) {
  if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'BUTTON') return;
  const key = `${catIdx}-${itemIdx}`;
  state.checked[key] = !state.checked[key];
  saveState();
  const el = document.getElementById(`item-${key}`);
  el.classList.toggle('checked', state.checked[key]);
  updateCategoryBadge(catIdx);
  const country = document.getElementById('countrySelect').value;
  const visaType = document.getElementById('visaTypeSelect').value;
  updateProgress(CHECKLISTS[country][visaType]);
}

function toggleCategory(catIdx) {
  const body = document.getElementById(`cat-body-${catIdx}`);
  body.style.display = body.style.display === 'none' ? '' : 'none';
}

function updateCategoryBadge(catIdx) {
  const country = document.getElementById('countrySelect').value;
  const visaType = document.getElementById('visaTypeSelect').value;
  const cat = CHECKLISTS[country][visaType].categories[catIdx];
  const checkedCount = cat.items.filter((_, i) => state.checked[`${catIdx}-${i}`]).length;
  const badge = document.getElementById(`badge-${catIdx}`);
  badge.textContent = `${checkedCount}/${cat.items.length}`;
  badge.className = `category-badge ${checkedCount === cat.items.length ? 'done' : ''}`;
}

function updateProgress(data) {
  let total = 0, done = 0;
  data.categories.forEach((cat, catIdx) => {
    cat.items.forEach((_, itemIdx) => {
      total++;
      if (state.checked[`${catIdx}-${itemIdx}`]) done++;
    });
  });
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  document.getElementById('progressText').textContent = `${done} of ${total} documents ready`;
  document.getElementById('progressPct').textContent = `${pct}%`;
  document.getElementById('progressFill').style.width = `${pct}%`;
}

function toggleNote(event, key) {
  event.stopPropagation();
  const area = document.getElementById(`note-${key}`);
  area.style.display = area.style.display === 'none' ? 'block' : 'none';
  if (area.style.display === 'block') area.focus();
}

function saveNote(key, value) {
  state.notes[key] = value;
  saveState();
}

function saveState() {
  state.clientName = document.getElementById('clientName').value;
  state.clientRef = document.getElementById('clientRef').value;
  state.appDate = document.getElementById('appDate').value;
  localStorage.setItem('visaChecklist_state', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('visaChecklist_state');
  if (saved) { try { state = JSON.parse(saved); } catch(e) {} }
}

function resetChecklist() {
  if (!confirm('Reset all checkmarks and notes for this checklist?')) return;
  state.checked = {};
  state.notes = {};
  saveState();
  renderChecklist();
}

function printChecklist() {
  document.querySelectorAll('.category-body').forEach(b => b.style.display = '');
  document.querySelectorAll('.doc-note').forEach(n => { if (n.value) n.style.display = 'block'; });
  window.print();
}

function exportSummary() {
  const country = document.getElementById('countrySelect').value;
  const visaType = document.getElementById('visaTypeSelect').value;
  if (!country || !visaType) return;

  const data = CHECKLISTS[country][visaType];
  const clientName = document.getElementById('clientName').value || 'N/A';
  const clientRef = document.getElementById('clientRef').value || 'N/A';
  const appDate = document.getElementById('appDate').value || 'N/A';

  let text = `VISA DOCUMENT CHECKLIST SUMMARY\n================================\n`;
  text += `Client: ${clientName}\nReference: ${clientRef}\nDate: ${appDate}\n`;
  text += `Visa: ${country} — ${visaType}\n`;

  let total = 0, done = 0;
  data.categories.forEach((cat, catIdx) => {
    text += `\n[${cat.name.toUpperCase()}]\n`;
    cat.items.forEach((item, itemIdx) => {
      const key = `${catIdx}-${itemIdx}`;
      const tick = state.checked[key] ? '✓' : '☐';
      const note = state.notes[key] ? ` [Note: ${state.notes[key]}]` : '';
      text += `  ${tick} ${item}${note}\n`;
      total++;
      if (state.checked[key]) done++;
    });
  });
  text += `\n================================\nProgress: ${done}/${total} (${Math.round(done/total*100)}%)\n`;

  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Checklist_${country}_${visaType.replace(/[\s/()]/g,'_')}_${clientName.replace(/\s/g,'_')}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

init();
