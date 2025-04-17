# 🚗 CarSearching

A modern front-end search block for cars – designed for clarity, responsiveness, and smooth animations.  
This project focuses purely on the front-end interface without backend integration.

---

## 🛠️ Technologies

![ReactJS](https://img.shields.io/badge/react-19.0.0-61DBFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![FrameMotion](https://img.shields.io/badge/FrameMotion-yellow?style=for-the-badge)

---

## 🎯 Live Demo

🔗 **Check it live:** [demo-link](https://carsearching.netlify.app/)

---

## 📸 Screenshots

| Simple View    | ![simple](./public/simple.png)             |
| -------------- | ------------------------------------------ |
| Advanced View  | ![advance](./public/advance.png)           |
| Modal          | ![dialog](./public/Dialog.png)             |
| Brand Selector | ![divsearching](./public/divSearching.png) |

---

## ✨ Key Features

- 🔁 Toggle between simple and advanced search modes
- 💡 Clean and responsive layout
- ✅ Dynamic components with checkbox-based dropdown lists
- 🧩 Modal dialogs for additional search options
- 🎬 Smooth entry animations using `framer-motion`

---

## 🔍 Code Example – `DivSearch` component

```jsx
<motion.div
  ref={wrapperRef}
  layout
  layoutId={insideText}
  initial={isNew ? { scale: 0, opacity: 0 } : false}
  animate={isNew ? { scale: 1, opacity: 1 } : false}
  exit={isNew ? { scale: 0 } : false}
  className={`col-span-${size} bg-gray-300 rounded-[6px] w-full h-full ease-in-out relative`}
>
  {/* Dynamic content */}
</motion.div>
```

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/carsearching.git
   cd carsearching
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
