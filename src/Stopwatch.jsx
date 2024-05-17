import React from "react";
import {useState,useEffect,useRef} from "react";
//import { CiStopwatch } from "react-icons/ci";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
      
      return () => clearInterval(interval);
    }, [isRunning]);
    
    const start = () => {
      setIsRunning(true);
    };
    
    const stop = () => {
      setIsRunning(false);
    };
    
    const reset = () => {
      setIsRunning(false);
      setTime(0);
      setLaps([]);
    };
    
    const lap = () => {
      setLaps(prevLaps => [...prevLaps, time]);
    };
  
    return (
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <p className="display">{time} seconds</p>
        <div className="controls">
          {isRunning ? (
            <button className="stop-button" onClick={stop}>Stop</button>
          ) : (
            <button className="start-button" onClick={start}>Start</button>
          )}
          <button className="reset-button"onClick={reset}>Reset</button>
          <button className="lap-button"onClick={lap}>Lap</button>
        </div>
        <div>
          <h2>Laps</h2>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>{lapTime} seconds</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Stopwatch;