# ⚡ RAPID — Emergency Response System
### Hackathon Frontend Prototype

---

## 🚀 How to Run in VS Code

### Option 1: Live Server (Recommended)
1. Open the `emergency-response` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens at `http://127.0.0.1:5500`

### Option 2: Direct Open
- Just double-click `index.html` to open in browser
- Navigate between pages using the top navbar

---

## 📁 Project Structure

```
emergency-response/
├── index.html                    # Emergency Request Interface (Landing)
├── css/
│   ├── main.css                  # Shared styles & design system
│   └── index.css                 # Landing page styles
├── js/
│   ├── main.js                   # Shared utilities
│   └── index.js                  # Landing page logic
└── pages/
    ├── track.html                # Real-time Ambulance Tracking (Canvas Map)
    ├── hospital.html             # Hospital Network & Bed Availability
    ├── admin.html                # Admin Dispatch Dashboard
    └── hospital-dashboard.html  # Hospital Dashboard (ICU, Beds, Fleet)
```

---

## 📄 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| **Emergency Request** | `index.html` | SOS button, live dispatch feed, request form |
| **Live Tracking** | `pages/track.html` | Canvas-based map with animated ambulances |
| **Hospital Network** | `pages/hospital.html` | Bed/ICU availability across 12 hospitals |
| **Admin Dashboard** | `pages/admin.html` | Dispatch management, manual control |
| **Hospital Dashboard** | `pages/hospital-dashboard.html` | ICU monitor, bed grid, fleet status |

---

## ✅ Features Implemented

- [x] **Emergency Request Interface** — SOS modal with type, location (GPS), contact info
- [x] **Live Dispatch Feed** — Auto-updating real-time simulation
- [x] **Ambulance Tracking** — Canvas-based animated map (Delhi simulation)
- [x] **Route Visualization** — Dashed route lines from ambulances to hospitals
- [x] **Hospital Availability** — Bed counts, ICU availability, wait times, filters
- [x] **Admin Dashboard** — Full request table, manual dispatch, operator panel
- [x] **Hospital Dashboard** — Bed grid visual, ICU monitor with vitals, fleet cards
- [x] **Incoming Patient Queue** — Priority-based inbound patients
- [x] **Activity Log** — Real-time operator activity stream
- [x] **Responsive Design** — Works on mobile and desktop

---

## 🎨 Design System

- **Colors:** Dark background (#050810), Red accent (#FF1744), Green/Yellow/Blue status
- **Fonts:** Bebas Neue (display), DM Sans (body), JetBrains Mono (data)
- **Theme:** Industrial/emergency operations center aesthetic

---

## 🔧 For Production Integration

Replace simulated data with:
- **Google Maps API** or **Mapbox** for real map rendering
- **WebSocket** for real-time ambulance GPS updates
- **REST API** for hospital bed data
- **Firebase** or **Node.js** backend for request management

---

*Built for Hackathon — Emergency Response & Ambulance Optimization System*
