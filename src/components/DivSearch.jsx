import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function DivSearch({ size = "1", insideText, marki, simpleSearchInputs }) {
  const isNew = !simpleSearchInputs.includes(insideText);
  const [divSearchStatus, setDivSearchStatus] = useState(false);
  const wrapperRef = useRef(null);
  const [choseName, setChoseName] = useState([]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDivSearchStatus(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function divOption() {
    setDivSearchStatus((isDivSearchStatus) => !isDivSearchStatus);
  }

  const toggleName = (name, checked) => {
    if (checked) {
      if (!choseName.includes(name)) {
        setChoseName([...choseName, name]);
      }
    } else {
      setChoseName(choseName.filter((n) => n !== name));
    }
  };

  const DivInsideInformation = ({ name, deleteX = true }) => {
    const handleRemove = (e) => {
      e.stopPropagation();
      setChoseName((prev) => prev.filter((n) => n !== name));
    };

    return (
      <div id={name} className="flex space-x-2 border-solid border-gray-400 border-[1px] px-2.5 py-0.5 bg-[#d6dce0] rounded-2xl">
        <span>{name}</span>
        {deleteX && (
          <span className="font-extrabold cursor-pointer" onClick={handleRemove}>
            X
          </span>
        )}
      </div>
    );
  };

  DivInsideInformation.propTypes = {
    name: PropTypes.string,
    deleteX: PropTypes.bool,
  };

  return (
    <motion.div
      ref={wrapperRef}
      layout
      layoutId={insideText}
      // Animacja wejścia tylko dla nowych elementów
      initial={isNew ? { scale: 0, opacity: 0 } : false}
      animate={isNew ? { scale: 1, opacity: 1 } : false}
      exit={isNew ? { scale: 0 } : false}
      value={insideText}
      id={`${insideText}div`}
      className={`col-span-${size} bg-gray-300 rounded-[6px] w-full h-full ease-in-out relative`}
    >
      <div className="h-full flex items-center justify-start p-1.5 space-x-1 overflow-x-auto" onClick={divOption}>
        {choseName.length === 0 && choseName.length < 4 ? (
          insideText
        ) : choseName.length < 4 ? (
          choseName.map((prop) => <DivInsideInformation key={prop} name={prop} />)
        ) : (
          <>
            {choseName.slice(0, 3).map((prop) => (
              <DivInsideInformation key={prop} name={prop} />
            ))}
            <DivInsideInformation key={`numbers`} name={`+${choseName.length - 3}`} deleteX={false} />
          </>
        )}
      </div>
      {divSearchStatus && (
        <div className="absolute max-h-48 overflow-auto bg-gray-300 w-full p-1.5 border-x-2 border-b-2 border-t-0 border-gray-400 border-solid top-10 rounded-b-xl">
          {marki.map((name) => (
            <div className="font-bold border-solid border-gray-400 border-[1px] p-1 rounded-sm cursor-pointer" key={name}>
              <label className="flex items-center space-x-1">
                <input type="checkbox" checked={choseName.includes(name)} onChange={(e) => toggleName(name, e.target.checked)} />
                <span>{name}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

DivSearch.propTypes = {
  size: PropTypes.string,
  insideText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  marki: PropTypes.arrayOf(PropTypes.string).isRequired,
  simpleSearchInputs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DivSearch;
