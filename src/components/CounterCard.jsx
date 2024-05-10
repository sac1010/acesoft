import React, { useState } from "react";

const CounterCard = ({ number, counter, setCounter }) => {

    const handlePlus = ()=>{
            if(counter[`counter${number}`]===9){
              setError(true)
            }
            if(counter[`counter${number}`]<10){
                setCounter({...counter, [`counter${number}`]: counter[`counter${number}`]+1})
            }
    }
    const handleMinus = ()=>{
      if(counter[`counter${number}`]===10){
        setError(false)
      }
        if(counter[`counter${number}`]>0){
            setCounter({...counter, [`counter${number}`]: counter[`counter${number}`]-1})
        }
    }

    const [error, setError] = useState(false)

  return (
    <div className="w-full ">

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
    <div className="text-red-600 text-center h-1">{error && "Max value" }</div>
    </div>
  );
};

export default CounterCard;
