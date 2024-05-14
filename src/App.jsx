import React from "react";
import Expense from "./Components/Expense";

const App = () => {
  return (
    <div>
      <h1 className="flex justify-center text-2xl font-bold">
        Expense Tracker
      </h1>
      <Expense/>
    </div>
  );
};

export default App;
