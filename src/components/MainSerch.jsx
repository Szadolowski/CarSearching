import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import DivSearch from "./DivSearch";
import DialogBlock from "./DialogBlock";
import InputSearch from "./InputSearch";
import { simpleSearchInputs, marki } from "./Data";

let SimpleSearch = ({ setChange }) => {
  return (
    <motion.div
      layout
      layoutId="search"
      className=" flex justify-center items-center pt-5"
      id="search"
    >
      <div className="bg-gray-50 rounded-2xl shadow-2xl border-black p-12 grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-8 place-items-center">
        <DivSearch
          insideText={"Marka Samochodu"}
          size={2}
          marki={marki}
          simpleSearchInputs={simpleSearchInputs}
        />
        <InputSearch insideText={"Model pojazdu"} size={2} />
        <InputSearch insideText={"cena do"} />
        <InputSearch insideText={"Rok produkcji od"} />
        <InputSearch insideText={"Typ nadwozia"} />
        <InputSearch insideText={"rodzaj paliwa"} />
        <span
          className="col-span-2 text-blue-600 font-bold cursor-pointer"
          onClick={() => {
            setChange(true);
          }}
        >
          Wyszukiwanie {<br></br>} Zaawansowane
        </span>
        <button className="col-span-2 w-full h-full bg-red-700 text-amber-50 font-bold rounded-xl">
          Szukaj
        </button>
      </div>
    </motion.div>
  );
};

SimpleSearch.propTypes = {
  setChange: PropTypes.func.isRequired,
};

let AdvanceSearch = ({ setChange }) => {
  const dialogRef = useRef(null);
  function handleClick() {
    dialogRef.current.showModal();
  }

  return (
    <motion.div
      layout
      layoutId="search"
      className=" flex justify-center items-center pt-5"
      id="search"
    >
      <div className="bg-gray-50 rounded-2xl shadow-2xl border-black p-12 grid grid-cols-6 grid-rows-5 gap-x-4 gap-y-8 place-items-center">
        <InputSearch insideText={"Marka Samochodu"} size={2} />
        <InputSearch insideText={"Model pojazdu"} size={2} />
        <InputSearch insideText={"Generacja"} size={2} />
        <InputSearch insideText={"cena od"} />
        <InputSearch insideText={"cena do"} />
        <InputSearch insideText={"Rok produkcji od"} />
        <InputSearch insideText={"Rok produkcji do"} />
        <InputSearch insideText={"Przebieg od"} />
        <InputSearch insideText={"Przebieg do"} />
        <InputSearch insideText={"Typ nadwozia"} size={2} />
        <InputSearch insideText={"rodzaj paliwa"} size={2} />
        <span
          className="col-span-2 text-blue-600 font-bold cursor-pointer hover:text-blue-800"
          onClick={() => {
            setChange(false);
          }}
        >
          Wyszukiwanie {<br></br>} Zaawansowane
        </span>
        <span
          className="col-span-2 cursor-pointer hover:font-bold flex justify-between items-center w-full px-10"
          onClick={() => {
            handleClick();
          }}
        >
          <DialogBlock ref={dialogRef} blockType={1} />
          <p>Silnik i napęd</p> <p className="text-4xl">{">"}</p>
        </span>
        <span
          className="col-span-2 cursor-pointer hover:font-bold flex justify-between items-center w-full px-10"
          onClick={() => {}}
        >
          <p>Nadwozie</p> <p className="text-4xl">{">"}</p>
        </span>
        <span
          className="col-span-2 cursor-pointer hover:font-bold flex justify-between items-center w-full px-10"
          onClick={() => {}}
        >
          <p>Dodatkowe wyposażenie</p> <p className="text-4xl">{">"}</p>
        </span>

        <button className="col-span-2 w-full h-full bg-red-700 text-amber-50 font-bold rounded-xl">
          Szukaj
        </button>
      </div>
    </motion.div>
  );
};

AdvanceSearch.propTypes = {
  setChange: PropTypes.func.isRequired,
};

function MainSerch() {
  const [advanceMode, setAdvanceMode] = useState(false);

  return (
    <>
      {advanceMode ? (
        <AdvanceSearch setChange={setAdvanceMode} />
      ) : (
        <SimpleSearch setChange={setAdvanceMode} />
      )}
    </>
  );
}

export default MainSerch;
