# 📋 Visa Document Checklist Tracker

An interactive web app for immigration consultants to track visa document preparation — by country and visa type — with real-time progress tracking, notes per document, and export/print features.

Easily extendable for any visa destination or immigration practice.

---

## 🌍 Supported Countries & Visa Types

| Country | Visa Types |
|---|---|
| 🇦🇺 Australia | Tourist, Tourist (Friend/Family Invitation), Business, Student |
| 🇬🇧 UK | Tourist, Tourist (Friend/Family Invitation), Business, Student |
| 🇺🇸 USA | Tourist (B1/B2), Business (B1), Student (F1) |
| 🇪🇺 Schengen | Tourist, Tourist (Friend/Family Invitation), Business |

---

## ✨ Features

- **Dynamic checklists** — select country + visa type and the full document list generates instantly
- **Real-time progress bar** — tracks how many documents are collected (e.g. "7 of 12 ready — 58%")
- **Check off documents** — click any item to mark it as collected
- **Notes per document** — add remarks like *"needs notarization"* or *"courier pending"*
- **Client name & reference** — personalize each session
- **Save progress** — all checkmarks and notes saved in browser localStorage
- **Export summary** — download a `.txt` summary of the checklist with all statuses and notes
- **Print-ready** — clean print layout with client name, date, and visa type
- **Zero backend** — runs entirely in the browser, no server required

---

## 🚀 Live Demo

👉 **[https://ehsanzim.github.io/visa-checklist-tracker/](https://ehsanzim.github.io/visa-checklist-tracker/)**

---

## 📁 Project Structure

```
visa-checklist-tracker/
│
├── index.html          ← Main app layout
├── style.css           ← All styling
├── app.js              ← App logic + all checklist data embedded
└── README.md
```

---

## 🛠 How to Add a New Country or Visa Type

Open `app.js` and find the `CHECKLISTS` object at the top. Add a new entry:

```json
"Canada": {
  "Tourist": {
    "categories": [
      {
        "name": "Passport & Identity",
        "items": [
          "Valid passport",
          "Passport photographs"
        ]
      }
    ]
  }
}
```

No code changes needed — the dropdown updates automatically.

---

## 🖥 Running Locally

Just open `index.html` in any modern browser. No build tools, no npm, no server.

```bash
git clone https://github.com/EhsanZim/visa-checklist-tracker
cd visa-checklist-tracker
open index.html   # or double-click it
```

> All checklist data is embedded in `app.js` — no local server needed. Just open `index.html` directly.

---

## 📦 Deploying to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your app is live at `https://ehsanzim.github.io/visa-checklist-tracker/`

---

## 🏗 Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- Pure HTML / CSS / JavaScript — no frameworks
- Data-driven via JSON — easy to maintain and extend
- LocalStorage for client-side persistence

---

## 📄 License

Feel free to fork and adapt for your own immigration practice.

---

*Built by [Ehsan Zim](https://github.com/EhsanZim) | [github.com/EhsanZim](https://github.com/EhsanZim)*
