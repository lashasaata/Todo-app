import { useState } from "react";
import "./App.css";
import Creator from "./comtonents/Creator";
import List from "./comtonents/List";

function App() {
  const [useToDo, setUseToDo] = useState([]);
  const [useFilter, setUseFilter] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-[#171823]" : "bg-white"
      } flex flex-col items-center min-h-screen h-screen overflow-auto relative`}
    >
      <div
        className={`${
          darkMode
            ? "bg-[url('/images/bg-mobile-dark.jpg')] lg:bg-[url('/images/bg-desktop-dark.jpg')]"
            : "bg-[url('/images/bg-mobile-light.jpg')] lg:bg-[url('/images/bg-desktop-light.jpg')]"
        } h-[200px] lg:h-[300px] min-w-full bg-no-repeat bg-cover`}
      ></div>
      <div className="absolute">
        <Creator
          setUseToDo={setUseToDo}
          useToDo={useToDo}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <List
          useToDo={useToDo}
          setUseToDo={setUseToDo}
          useFilter={useFilter}
          setUseFilter={setUseFilter}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;
