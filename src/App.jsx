import { useState } from "react";
import "./App.css";
import Creator from "./comtonents/Creator";
import List from "./comtonents/List";
import Filter from "./comtonents/Filter";
function App() {
  const [useToDo, setUseToDo] = useState([]);
  const [useFilter, setUseFilter] = useState([]);
  return (
    <div className="flex flex-col items-center min-h-screen relative">
      <div className="h-[200px] min-w-full bg-[url('./images/bg-mobile-light.jpg')] bg-no-repeat bg-cover"></div>
      <div className="absolute">
        <Creator setUseToDo={setUseToDo} useToDo={useToDo} />
        <List useToDo={useToDo} setUseToDo={setUseToDo} useFilter={useFilter} />
        <Filter
          useToDo={useToDo}
          setUseToDo={setUseToDo}
          useFilter={useFilter}
          setUseFilter={setUseFilter}
        />
      </div>
    </div>
  );
}

export default App;
