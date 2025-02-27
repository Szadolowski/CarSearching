import PropTypes from "prop-types";
let InputSerch = ({ size = "1", insideText }) => {
  return (
    <input
      type="text"
      value={insideText}
      className={`col-span-${size} bg-gray-300 rounded-[6px] p-1.5 w-full h-full`}
    />
  );
};

InputSerch.propTypes = {
  size: PropTypes.string,
  insideText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
};

function MainSerch() {
  return (
    <div className=" flex justify-center items-center pt-5">
      <div className="bg-gray-50 rounded-2xl shadow-2xl border-black p-12 grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-8 place-items-center">
        <InputSerch insideText={"Marka Samochodu"} size={2} />
        <InputSerch insideText={"Model pojazdu"} size={2} />
        <InputSerch insideText={"cena do"} />
        <InputSerch insideText={"Rok produkcji od"} />
        <InputSerch insideText={"Typ nadwozia"} />
        <InputSerch insideText={"rodzaj paliwa"} />
        <span className="col-span-2 text-blue-600 font-bold">
          Wyszukiwanie {<br></br>} Zaawansowane
        </span>
        <button className="col-span-2 w-full h-full bg-red-700 text-amber-50 font-bold rounded-xl">
          Szukaj
        </button>
      </div>
    </div>
  );
}

export default MainSerch;
