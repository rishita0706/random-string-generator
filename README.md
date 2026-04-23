# 🔐 Random String Generator

A responsive **Random String Generator Web App** built using **React + Tailwind CSS**.  
It allows users to generate secure random strings based on customizable options like length, uppercase, lowercase, numbers, and symbols.

---

## Features

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

---

## 🛠 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
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

1. User selects:
   - String length
   - Character types (uppercase, lowercase, etc.)
2. App builds a character pool dynamically
3. Random characters are selected using `Math.random()`
4. Final string is displayed instantly
5. User can copy the string using the clipboard button

---
