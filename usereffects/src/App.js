import { useState } from "react";
import "./App.css";
import News from "./components/News";

function App() {
  //Create a state to store the Selected Category
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <h1>News App</h1>
      <button onClick={() => setCategory("General")}>General</button>
      <button onClick={() => setCategory("business")}>Business</button>
      <button onClick={() => setCategory("technology")}>Technology</button>
      <button onClick={() => setCategory("entertainment")}> Entertainment
      </button>
      <button onClick={() => setCategory("Sports")}>Sports</button>
       
      <button onClick={() => setCategory("health")}>Health</button>
      <button onClick={() => setCategory("science")}>Science</button>

      {/* Pass the selected category as a prop to the News component */}
      <News category={category} />
    </div>
  );
}

export default App;