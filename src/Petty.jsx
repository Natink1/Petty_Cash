import { useState } from "react";

const Petty = () => {
  const [amount, setAmount] = useState(1000);
  const [cashout, setCashout] = useState(0);

  const depositamount = () => {
    const min = amount - cashout;
    setAmount(min);
  };

  const handleCost = (e) => {
    setCashout(e.target.value);
  } 
  

  return(
    <>
      <div className="pt-5 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold flex justify-center">Petty Cash</h1>
          <p className=" pt-7 text-3xl">You Have ${amount}</p>
          <input onChange={handleCost} type="number" className="mt-5"></input>
          <button
            
            className="mt-12 font-bold bg-[#ffdd00] w-25 h-12 rounded-2xl hover:bg-[#ffb300] transition ease-linear"
            onClick={depositamount}
          >
            
            Cash Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Petty;
