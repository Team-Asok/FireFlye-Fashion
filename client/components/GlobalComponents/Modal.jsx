import React from "react";

const Modal = function () {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="model-header">
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">This is the modal content</div>
        <div className="modal-footer">
          <button className="modal-close-button" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
