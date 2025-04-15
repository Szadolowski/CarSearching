import PropTypes from "prop-types";

const DialogBlock = ({ ref, blockType }) => {
  return (
    <>
      {blockType === 1 ? (
        <dialog ref={ref} className="dialog-block">
          <div className="dialog-content">
            <h2>Dialog Block</h2>
            <p>This is a dialog block.</p>
          </div>
          <input
            type="button"
            value="Open Dialog"
            onClick={() => ref.current.close()}
            className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded"
          />
        </dialog>
      ) : null}
    </>
  );
};

DialogBlock.propTypes = {
  blockType: PropTypes.number.isRequired,
  ref: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLDialogElement),
  }).isRequired,
};

export default DialogBlock;
