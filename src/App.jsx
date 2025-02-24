import "./App.css";

function App() {
  return (
    <div className=" flex justify-center items-center pt-5">
      <div className="bg-gray-50 rounded-2xl shadow-2xl border-black w-3xl h-64 p-12 grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-8">
        <input
          type="text"
          value={"test"}
          className="shadow-2xl col-span-2 bg-gray-500 rounded-[6px] p-1.5"
        />
        <input
          type="text"
          value={"test"}
          className="shadow-2xl col-span-2 rounded-[6px] bg-gray-500 p-2.5"
        />
        <input type="text" value={"test"} className="shadow-2xl bg-gray-500 rounded-[6px]" />
        <input type="text" value={"test"} className="shadow-2xl bg-gray-500 rounded-[6px]" />
        <input type="text" value={"test"} className="shadow-2xl bg-gray-500 rounded-[6px]" />
        <input type="text" value={"test"} className="shadow-2xl bg-gray-500 rounded-[6px]" />
      </div>
    </div>
  );
}

export default App;
