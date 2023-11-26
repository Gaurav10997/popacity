import React, { useContext } from "react";
import "./modal.css";
import DetailsContext from "../../context/DetailsContext";
const DeleteModal = () => {
  //Delete modal Component
  const { setModal, modal } = useContext(DetailsContext); //fetched data from the contex
  return (
    <div className="modal-container" onClick={() => setModal(!modal)}>
      <div className="modal">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#FC5A5A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="middle">
          <p className="caution">Caution!</p>
          <p className="des">
            Are you sure you want to Delete <span>$NAME</span>
          </p>
        </div>
        <div className="bottom">
          {/* change the modal data globally  */}
          <button className="cancel" onClick={() => setModal(!modal)}>
            Cancel
          </button>
          <button className="yes">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
