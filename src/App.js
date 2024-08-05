// Exercise >> https://codesandbox.io/p/sandbox/live-test-basic-javascript-2-8jfx1w?file=%2Fsrc%2Fstyles.css%3A1%2C1-35%2C1
// Expected >> https://lxcx3i.csb.app/
// Prev State >> https://www.youtube.com/watch?v=yvTGXH7uybA
// setInterval >> https://www.youtube.com/watch?v=AqSm-353U8I
// clearInterval >> https://www.youtube.com/watch?v=n0SpVgt3Lho


import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false)

  const countStart = () => {
    setCount((prev) => prev + 1 )
  }
  
  const handleClickStart = () => {
    setStartCount(true)
  }
  
  const handleClickStop = () => {
    setStartCount(false)
}

useEffect(() => {
  let intervalId = 0
  if (startCount) {
    intervalId = setInterval(() => {
      countStart()
    }, 1000)
  }
  return () => {
    clearInterval(intervalId)
    setStartCount(!startCount)
    }
  }, [startCount])

  // console.log("Count after useEffect()",count);

  return (
    <div className="App">
      <h1>Test Basic React 2</h1>
      <div className="count">{count < 10 ? "0" + count : count}</div>
      <div>
        <button onClick={handleClickStart}>start</button>
        <button onClick={handleClickStop}>stop</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  );
}
