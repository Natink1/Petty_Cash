import React, { useContext, useState } from "react";
import { useModalContext } from "./Petty";

const Modal = () => {


  const { setShowModal, handleCost, setAmount, setCashout, amount, depositamount} = useModalContext();



  return (



    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center  items-center z-50 "
      onClick={(e) => e.stopPropagation()}
    >
      {" "}
      <div
        className="bg-white p-6 rounded-xl shadow-lg transition-all opacity-50 relative flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setShowModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <p>Modal Content</p>
    
        <input onChange={handleCost} type="number" className="mt-5 text-black"></input>
        <button onClick={depositamount} className="text-black" >Cashout</button>
      </div>
    </div>
  );
};

export default Modal;
