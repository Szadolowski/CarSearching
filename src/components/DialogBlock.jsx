import PropTypes from "prop-types";
import InputSerch from "./InputSearch";

const DialogBlock = ({ ref, blockType }) => {
  return (
    <dialog ref={ref} className="z-50 bg-transparent backdrop:bg-black/40 border-none p-0">
      {blockType === 1 ? (
        <div className="fixed top-3/12 left-1/2 -translate-x-1/2 -translate-y-11/12 bg-white rounded-2xl shadow-xl p-6 w-full max-w-[80vw]">
          <h2 className="font-bold text-2xl">Silnik i Napęd</h2>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4">
            <InputSerch />
            <InputSerch />
            <InputSerch />
            <InputSerch />
          </div>
          <p>This is a dialog block.</p>
          <form method="dialog">
            <button className="dialog-close">Close</button>
          </form>
        </div>
      ) : null}
    </dialog>
  );
};

DialogBlock.propTypes = {
  blockType: PropTypes.number.isRequired,
  ref: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLDialogElement),
  }).isRequired,
};

export default DialogBlock;
