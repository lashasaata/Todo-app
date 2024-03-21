import "./App.css";
import Creator from "./comtonents/Creator";
function App() {
  return (
    <div className="flex flex-col items-center min-h-screen relative">
      <div className="h-[200px] min-w-full bg-[url('./images/bg-mobile-light.jpg')] bg-no-repeat bg-cover"></div>
      <Creator />
    </div>
  );
}

export default App;
