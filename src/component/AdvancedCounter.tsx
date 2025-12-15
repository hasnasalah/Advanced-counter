import { useState, useEffect } from "react";

export default function AdvancedCounter() {
  const [count, setCount] = useState<number>(0);
  const [countArray, setCountArray] = useState([]);
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState("Changes saved"); 

 useEffect(() => {
      const timer = setTimeout(() => {
    const counts = localStorage.getItem("counts");
    if (counts) setCountArray(JSON.parse(counts));
    setLoading("Changes saved");
     
    },600);
     return () => clearTimeout(timer);

}, []);

  useEffect(() => {
 setLoading("saving changes In local Storage.");
    const timer = setTimeout(() => {
           
      if (countArray.length === 0) return; 
  
  localStorage.setItem("counts", JSON.stringify(countArray));
  setLoading("Changes saved");
 
    },600);
     return () => clearTimeout(timer);
  }, [countArray]);

  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    setCountArray([...countArray, newCount]);
  };

  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setCountArray([...countArray, newCount]);
  };

  const handleReset = () => {
    setCount(0);
    setCountArray([]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") handleIncrement();
      else if (e.key === "ArrowDown") handleDecrement();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [count, countArray, step]);


  return (
    <>
      <p>Count</p>
      <h1>Current Count: {count}</h1>

      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div>
        <p>Step Value:</p>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
          <p>{loading}</p>
      <ul>
        {countArray.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
    </>
  );
}
