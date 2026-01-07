import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "100vh", textAlign: "center" }}>
      <h1>Timer: {seconds}s</h1>
    </div>
  );
}

export default Timer;
