# Advanced Counter (React + TypeScript)
# Advanced Counter (React + TypeScript)

An advanced counter built with **React and TypeScript** that supports:
- Increment & decrement with a customizable step
- Keyboard controls (ArrowUp / ArrowDown)
- Saving to: `localStorage`

## Features

- Increment and decrement counter
- Custom step value
-  Keyboard :
  - `ArrowUp` → Increment
  - `ArrowDown` → Decrement
- Automatically saves count history to `localStorage`
- Loads saved data on page refresh
-  Status messages:
  - **Saving changes in localStorage...**
  - **Changes saved**

---

## How It Works

### State Management
- `count` → current counter value
- `countArray` → history of all counter values
- `step` → increment/decrement step
- `status` → UI message (loading / saving / saved)

---

## Technologies Used

- React
- TypeScript
- React Hooks:
  - `useState`
  - `useEffect`
- Browser `localStorage`

---

## Getting Started

1. Clone the repository
git clone "https://github.com/hasnasalah/Advanced-counter"
2. Install dependencies
   ```bash
   npm install
