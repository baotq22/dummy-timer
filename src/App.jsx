import { useEffect, useRef, useState } from 'react'
import { Timer } from './components/Timer';

function App() {
  const Ref = useRef(null);
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isStart && isPause === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
    }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isStart, isPause])

  const handleStart = () => {
    setIsStart(true);
    setIsPause(false);
  }

  const handlePauseResume = () => {
    setIsPause(!isPause)
  }

  const handleReset = () => {
    setIsStart(false);
    setIsPause(true);
    setTime(0);
  }
  return (
    <>
      <div className="timeCont">
        <h1 className="title">Timer App</h1>
        <Timer time={time} />
        <div className="controller">
          <button onClick={handlePauseResume}>{isPause ? "Resume" : "Pause"}</button>
          {isStart ? <button onClick={handleReset}>Reset</button> : <button onClick={handleStart}>Start</button>}
        </div>
      </div>
    </>
  )
}

export default App
