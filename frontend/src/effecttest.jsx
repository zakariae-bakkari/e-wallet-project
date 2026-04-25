import { useEffect, useState } from "react";

export default function EffectJsx() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("useeffectjsx");
    setCount2(count + 1);
  }, [count]);
  return (
    <>
      <h1>zakariae</h1>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={() => setCount2(count2 + 1)}>count2 {count2}</button>
    </>
  );
}
