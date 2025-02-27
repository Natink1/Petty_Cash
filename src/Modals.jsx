import React, { useEffect, useContext, useState } from "react";
import { useModalContext } from "./Petty";

const Modal = ({ className=" " }) => {
  const {
    setShowModal,
    handleCost,
    setAmount,
    setCashout,
    amount,
    depositamount,
    showmodal,
    modalTransition,
    setModalTransition,
  } = useModalContext();

    useEffect(() => {
      if (showmodal) {
        setModalTransition("scale-100 opacity-100"); // Modal is showing, apply transition
      } else {
        setModalTransition("scale-90 opacity-0"); // Modal is hiding, apply transition
      }
    }, [showmodal]);

  return (
    
    <div
      className= {`fixed inset-0 bg-black/50 flex justify-center items-center z-50 `}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`${className} bg-white w-120 h-60 p-6 rounded-xl shadow-lg transition-all relative flex flex-col justify-center items-center `}
        onClick={(e) => e.stopPropagation()}
      >
       
        <button
          className={`${className} transition-all ease-in-out duration-200 absolute top-4 right-4 text-gray-500 hover:text-gray-700`}
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
        <input
          onChange={handleCost}
          type="number"
          className="mt-5 text-black border rounded-md w-70 h-full"
          placeholder="enter amount here"
        ></input>
        <input
          placeholder="enter reason here"
          type="text"
          className="mt-5 text-black border-1 rounded-md w-70 h-full"
        >
        </input>
        <button onClick={depositamount}  className=" mt-12 text-black w-25 h-12 rounded-2xl hover:bg-[#ffb300] transition ease-linear">
          Cashout
        </button>
      </div>
    </div>
 
  );
};

export default Modal;
