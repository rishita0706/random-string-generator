# 🔐 Random String Generator

A modern and responsive **React Web Application** that combines:

- Random String Generator
- Client-Side Routing using React Router

Built using **React + Tailwind CSS**, this project demonstrates strong fundamentals of hooks, UI design, and navigation.

---

## Features
### Random String Generator
- Adjustable string length using slider
- Include/exclude:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- Real-time string generation using React Hooks
- One-click copy to clipboard
- Fully responsive (Mobile + Desktop)
- Initial auto-generation on page load
- Smart UX (prevents empty selection)

### Client-Side Routing
- Multi-page navigation using `react-router-dom`
- Pages included:
  - Home
  - Generator
  - About
- Smooth navigation without page reload
- Persistent Navbar across all pages

---

## 🛠 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **React Router DOM**
- **JavaScript (ES6+)**

---

## ⚛️ React Hooks Used

| Hook | Purpose |
|------|--------|
| `useState` | Manage UI state (length, options, output) |
| `useCallback` | Optimize string generation function |
| `useEffect` | Auto-generate string on initial load |

---

## How It Works

### Generator Logic
1. User selects:
   - String length
   - Character types (uppercase, lowercase, etc.)
2. App builds a character pool dynamically
3. Random characters are selected using `Math.random()`
4. Final string is displayed instantly
5. User can copy the string using the clipboard button

### Routing Logic
1. Navigation handled using `react-router-dom`
2. Routes defined in `App.jsx`
3. Navbar allows switching between pages
4. No page reload → smooth SPA experience

---
