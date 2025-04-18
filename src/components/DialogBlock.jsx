import PropTypes from "prop-types";
import InputSerch from "./InputSearch";
import { createPortal } from "react-dom";

const DialogBlock = ({ ref, blockType }) => {
  return createPortal(
    <dialog ref={ref} className="z-50 bg-transparent backdrop:bg-black/40 border-none p-0 w-full h-full content-center items-center justify-center">
      {blockType === 1 ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="fixed bg-white rounded-2xl shadow-xl p-6 w-full max-w-[80vw] space-y-12">
            <h2 className="font-bold text-2xl">Silnik i Napęd</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4">
              <h3 className="col-span-2 text-[20px]">Pojemność silnika</h3>
              <h3 className="col-span-2 text-[20px]">Moc</h3>
              <InputSerch insideText={"Pojemność od"} />
              <InputSerch insideText={"Pojemność do"} />
              <InputSerch insideText={"Moc od"} />
              <InputSerch insideText={"Mod do"} />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="font-bold text-2xl mt-4">Rodzaj paliwa</h2>
              <div className="flex flex-row space-x-10 items-center">
                <label htmlFor="Beznyna" className="flex items-center gap-2">
                  <span>Benzyna</span>
                  <input type="checkbox" name="test" id="" />
                </label>
                <label htmlFor="Beznyna" className="flex items-center gap-2">
                  <span>Diesel</span>
                  <input type="checkbox" name="test" id="" />
                </label>
                <label htmlFor="Beznyna" className="flex items-center gap-2">
                  <span>Gaz</span>
                  <input type="checkbox" name="test" id="" />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">Rodzaj napędu</h2>
              <div className="flex flex-row space-x-10 items-center">
                <label htmlFor="Beznyna" className="flex items-center gap-2">
                  <span>Na przednią oś</span>
                  <input type="checkbox" name="test" id="" />
                </label>
                <label htmlFor="Beznyna" className="flex items-center gap-2">
                  <span>Na tylną oś</span>
                  <input type="checkbox" name="test" id="" />
                </label>
                <label htmlFor="Beznyna" className="flex items-center gap-2">
                  <span>Na 4 koła</span>
                  <input type="checkbox" name="test" id="" />
                </label>
              </div>
            </div>
            <form method="dialog">
              <button className="dialog-close bg-orange-600 rounded-2xl px-2 py-1.5 font-bold border-gray-500 border-[1px] hover:bg-orange-700 transition-all duration-300 ease-in-out cursor-pointer">
                Close
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </dialog>,
    document.body
  );
};

DialogBlock.propTypes = {
  blockType: PropTypes.number.isRequired,
  ref: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLDialogElement),
  }).isRequired,
};

export default DialogBlock;
