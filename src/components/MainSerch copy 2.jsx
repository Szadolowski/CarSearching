import PropTypes from "prop-types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Komponent InputSerch z layoutId
function InputSerch({ insideText, size = "1" }) {
  return (
    <motion.input
      layout
      layoutId={insideText}
      type="text"
      value={insideText}
      id={`${insideText}text`}
      className={`col-span-${size} bg-gray-300 rounded-[6px] p-1.5 w-full h-full ease-in-out`}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}

InputSerch.propTypes = {
  insideText: PropTypes.string.isRequired,
  size: PropTypes.string,
};

// Prosty tryb wyszukiwania
function SimpleSearch({ setChange }) {
  return (
    <motion.div
      className="flex justify-center items-center pt-5"
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }} // Lekkie zmniejszenie przy wyjściu
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-gray-50 rounded-2xl shadow-2xl border-black p-12 grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-8 place-items-center"
        layout
        initial={{ width: "auto", height: "auto" }}
        animate={{ width: "600px", height: "300px" }} // Stały rozmiar dla SimpleSearch
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <InputSerch insideText="Marka Samochodu" size="2" />
        <InputSerch insideText="Model pojazdu" size="2" />
        <InputSerch insideText="cena do" />
        <InputSerch insideText="Rok produkcji od" />
        <InputSerch insideText="Typ nadwozia" />
        <InputSerch insideText="rodzaj paliwa" />
        <span
          className="col-span-2 text-blue-600 font-bold cursor-pointer"
          onClick={() => setChange(true)}
        >
          Wyszukiwanie {<br />} Zaawansowane
        </span>
        <button className="col-span-2 w-full h-full bg-red-700 text-amber-50 font-bold rounded-xl">
          Szukaj
        </button>
      </motion.div>
    </motion.div>
  );
}

SimpleSearch.propTypes = {
  setChange: PropTypes.func.isRequired,
};

// Zaawansowany tryb wyszukiwania
function AdvanceSearch({ setChange }) {
  return (
    <motion.div
      className="flex justify-center items-center pt-5"
      initial={{ scale: 0.9 }} // Lekkie zmniejszenie przy wejściu
      animate={{ scale: 1 }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-gray-50 rounded-2xl shadow-2xl border-black p-12 grid grid-cols-6 grid-rows-4 gap-x-4 gap-y-8 place-items-center"
        layout
        initial={{ width: "600px", height: "300px" }} // Początkowy rozmiar taki jak SimpleSearch
        animate={{ width: "900px", height: "400px" }} // Większy rozmiar dla AdvanceSearch
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <InputSerch insideText="Marka Samochodu" size="2" />
        <InputSerch insideText="Model pojazdu" size="2" />
        <InputSerch insideText="Generacja" size="2" />
        <InputSerch insideText="cena od" />
        <InputSerch insideText="cena do" />
        <InputSerch insideText="Rok produkcji od" />
        <InputSerch insideText="Rok produkcji do" />
        <InputSerch insideText="Przebieg od" />
        <InputSerch insideText="Przebieg do" />
        <InputSerch insideText="Typ nadwozia" size="2" />
        <InputSerch insideText="rodzaj paliwa" size="2" />
        <span
          className="col-span-2 text-blue-600 font-bold cursor-pointer"
          onClick={() => setChange(false)}
        >
          Wyszukiwanie {<br />} Proste
        </span>
        <button className="col-span-2 w-full h-full bg-red-700 text-amber-50 font-bold rounded-xl">
          Szukaj
        </button>
      </motion.div>
    </motion.div>
  );
}

AdvanceSearch.propTypes = {
  setChange: PropTypes.func.isRequired,
};

// Główny komponent
function MainSearch() {
  const [advanceMode, setAdvanceMode] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {advanceMode ? (
        <AdvanceSearch key="advanced" setChange={setAdvanceMode} />
      ) : (
        <SimpleSearch key="simple" setChange={setAdvanceMode} />
      )}
    </AnimatePresence>
  );
}

export default MainSearch;
