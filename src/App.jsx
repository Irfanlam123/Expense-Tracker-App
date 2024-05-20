import React from "react";
import Expense from "./Components/Expense";

const App = () => {
  return (
    <div className="">
      <div className="bg-blue-300 p-3 rounded-md ml-10 mr-10 mt-3 mb-3 hover:bg-blue-100 shadow-lg transition duration-300">
        <h1 className="flex justify-center text-gray-700 text-2xl font-bold ">
          Expense Tracker
        </h1>
      </div>
      <Expense />
    </div>
  );
};

export default App;
