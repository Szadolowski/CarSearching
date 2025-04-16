import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { simpleSearchInputs } from "./Data";

function InputSearch({ size = "1", insideText }) {
  // Sprawdzamy, czy input jest nowy (nie ma go w SimpleSearch)
  const isNew = !simpleSearchInputs.includes(insideText);

  return (
    <motion.input
      layout
      layoutId={insideText}
      // Animacja wejścia tylko dla nowych elementów
      initial={isNew ? { scale: 0, opacity: 0 } : false}
      animate={isNew ? { scale: 1, opacity: 1 } : false}
      exit={isNew ? { scale: 0 } : false}
      type="text"
      value={insideText}
      id={`${insideText}text`}
      className={`col-span-${size} bg-gray-300 rounded-[6px] p-1.5 w-full h-full ease-in-out`}
    />
  );
}

InputSearch.propTypes = {
  size: PropTypes.string,
  insideText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
};

export default InputSearch;
