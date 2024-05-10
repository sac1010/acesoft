import React from "react";

const CounterCard = ({ number, counter, setCounter }) => {

    const handlePlus = ()=>{
            if(counter[`counter${number}`]<10){
                setCounter({...counter, [`counter${number}`]: counter[`counter${number}`]+1})
            }
    }
    const handleMinus = ()=>{
        if(counter[`counter${number}`]>0){
            setCounter({...counter, [`counter${number}`]: counter[`counter${number}`]-1})
        }
    }

  return (
    <div className="flex justify-between items-center px-5 border h-16 border-black rounded-3xl">
      <div>Counter {number}</div>
      <button onClick={handleMinus} className="border w-10 h-10 flex items-center justify-center border-black rounded-full">
        -
      </button>
      <div>{counter[`counter${number}`]}</div>
      <button onClick={handlePlus} className="border w-10 h-10 flex items-center justify-center border-black rounded-full">
        +
      </button>
    </div>
  );
};

export default CounterCard;
