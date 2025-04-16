# 🚗 CarSearching

Blok wyszukiwania samochodów w formie nowoczesnego komponentu front-endowego.  
Zaprojektowany z myślą o estetyce, intuicyjności i animacjach – bez implementacji backendu.

---

## 🛠️ Technologie

![ReactJS](https://img.shields.io/badge/react-19.0.0-61DBFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![FrameMotion](https://img.shields.io/badge/FrameMotion-yellow?style=for-the-badge)

---

## 🎯 Demo

🔗 **Sprawdź online:** [link-do-demo](#)

---

## 📸 Screeny

| Widok prosty                   | ![simple](./public/simple.png)             |
| ------------------------------ | ------------------------------------------ |
| Widok zaawansowany             | ![advance](./public/advance.png)           |
| Modal                          | ![dialog](./public/Dialog.png)             |
| ------------------------------ | ------------------------------------------ |
| Wybór marki                    | ![divsearching](./public/divSearching.png) |

---

## ✨ Kluczowe cechy

- 🔁 Tryb prosty i zaawansowany do wyszukiwania aut
- 💡 Responsywny i przejrzysty layout
- ✅ Komponenty dynamiczne z obsługą selekcji i list rozwijanych
- 🧩 Dialogi modalne z dodatkowymi parametrami wyszukiwania
- 🎬 Animacje `framer-motion` przy renderowaniu elementów

---

## 🔍 Przykładowy kod – komponent `DivSearch`

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
  {/* Zawartość dynamiczna */}
</motion.div>
```

---

## 📦 Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/twoj-login/carsearching.git
   cd carsearching
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Uruchom projekt lokalnie:
   ```bash
   npm run dev
   ```

---

## 🧾 Licencja

Projekt open-source. Możesz go modyfikować i rozwijać zgodnie z własnymi potrzebami.  
[MIT License](LICENSE)
