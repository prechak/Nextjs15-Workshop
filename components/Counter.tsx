"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-4 items-center justify-center">
      <button className="text-5xl gap-4" onClick={() => setCount(count - 1)}>
        -
      </button>
      <p className="text-5xl">{count}</p>
      <button className="text-5xl gap-4" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
export default Counter;
