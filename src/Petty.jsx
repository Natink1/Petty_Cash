import { createContext, useEffect, useContext, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modals";

const ModalContext = createContext({
  showmodal: false,
  setShowModal: () => {},
  amount: 1000, // Initial amount
  setAmount: () => {},
  cashout: 0, // Initial cashout
  setCashout: () => {},
  handleCost: () => {},
  depositamount: () => {},
  modalTransition: "",
  setModalTransition: () => {},
  cashoutHistory: 0,
  setCashoutHistory: () => {},
});

export const ModalProvider = ({ children }) => {
  const [showmodal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [cashout, setCashout] = useState(0);
  const [modalTransition, setModalTransition] = useState("");
  const [cashoutHistory, setCashoutHistory] = useState(0);

  const depositamount = () => {
    const min = amount - cashout;
    if (amount <= 0) {
      alert("we are out of Cash");
    } else {
      setAmount(min);
      setShowModal(false);
    }
  };

  // const list = () => {

  //     setCashoutHistory(cashout);
  //     setCashout(0);

  // };

  const handleCost = (e) => {
    setCashout(Number(e.target.value));
  };

  const value = {
    showmodal,
    setShowModal,
    amount,
    setAmount,
    cashout,
    setCashout,
    handleCost,
    depositamount,
    modalTransition,
    setModalTransition,
    cashoutHistory,
    setCashoutHistory,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

const Petty = () => {
  const {
    showmodal,
    setShowModal,
    amount,
    setAmount,
    cashout,
    setCashout,
    handleCost,
    depositamount,
    modalTransition,
    setModalTransition,
    cashoutHistory,
    setCashoutHistory,
  } = useModalContext();

  useEffect(() => {
    if (showmodal) {
      setModalTransition("scale-100 opacity-100"); // Modal is showing, apply transition
    } else {
      setModalTransition("scale-90 opacity-0"); // Modal is hiding, apply transition
    }
  }, [showmodal]);

  setCashoutHistory(cashout);

  return (
    <>
      <div className="pt-5 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold flex justify-center">Petty Cash</h1>
          <p className=" pt-7 text-3xl">You Have ${amount}</p>

          <button
            className="mt-12 font-bold bg-[#ffdd00] w-25 h-12 rounded-2xl hover:bg-[#ffb300] transition-all ease-linear duration-150"
            onClick={() => setShowModal(true)}
          >
            Cash Out
          </button>

          {showmodal &&
            createPortal(
              <Modal
                className={`  transition-all duration-300 ease-in-out ${modalTransition}`}
              />,
              document.body
            )}
        </div>
      </div>
      <div className="mt-50 place-self-center">
        <h1>Your Disposed amount is: {cashoutHistory}</h1>
      </div>
    </>
  );
};

export default Petty;
