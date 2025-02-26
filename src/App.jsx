import "./App.css";
import MainSerch from "./components/MainSerch";

function App() {
  return (
    <>
      <div className="w-full flex flex-row shadow-2xl h-12">
        <div> Burger </div>
        <div> Logo </div>
        <div> Login </div>
      </div>
      <div className=" flex justify-center items-center pt-5">
        <MainSerch />
      </div>
    </>
  );
}

export default App;
