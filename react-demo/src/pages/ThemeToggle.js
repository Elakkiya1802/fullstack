import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h1>Theme Toggle</h1>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
