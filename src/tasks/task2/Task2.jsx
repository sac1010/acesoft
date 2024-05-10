import React, { useState } from "react";
import CounterCard from "../../components/CounterCard";

const Task2 = () => {
  const [counter, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
  });
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <div className="w-[350px] h-[650px] border border-black rounded-3xl flex flex-col gap-10 px-5">
        <div className="w-full text-center pt-3">Page Title</div>
        <CounterCard number={1} counter={counter} setCounter={setCounter} />
        <CounterCard number={2} counter={counter} setCounter={setCounter} />
        <CounterCard number={3} counter={counter} setCounter={setCounter} />
        <CounterCard number={4} counter={counter} setCounter={setCounter} />

        <button
          onClick={() => {
            setCounter({
              counter1: 0,
              counter2: 0,
              counter3: 0,
              counter4: 0,
            });
          }}
          className="bg-red-400 py-2 rounded-full text-white"
        >
          Reset
        </button>

        <div className="w-full flex justify-between items-center py-2 px-5 rounded-3xl bg-orange-200 font-bold text-lg">
          <div>sum</div>
          <div>
            {counter.counter1 +
              counter.counter2 +
              counter.counter3 +
              counter.counter4}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
