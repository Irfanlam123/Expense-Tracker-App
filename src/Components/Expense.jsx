import { useState } from "react";

const Expense = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange1 = (e) => {
    // Check if the entered value is a number
    if (!isNaN(e.target.value)) {
      setInputValue1(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Check if both input fields are filled
    if (!inputValue.trim() || !inputValue1.trim()) {
      // If any of the input fields are empty, return early and do not submit
      return;
    }

    // Store the submitted data
    const newItem = { name: inputValue, price: parseFloat(inputValue1) }; // Parse the price to float
    setSubmittedData([...submittedData, newItem]);

    // Clear input fields after submission
    setInputValue("");
    setInputValue1("");
  };

  const handleClear = () => {
    // Clear input fields and submitted data
    setInputValue("");
    setInputValue1("");
    setSubmittedData([]);
  };

  // sare item ka total sum
  const total = submittedData.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <div className=" flex justify-center space-x-20 ml-16 mr-16 py-32 rounded-md bg-green-100 text-black">
      <div className=" border-2 border-gray-800 rounded-md p-3">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <label className="font-bold flex justify-center text-xs">
            Item name:
          </label>
          <input
            className="text-gray-700 bg-red-100 rounded-md border-2 border-gray-800"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="productName"
          />
          <label className="font-bold flex justify-center text-xs">
            Item Price:
          </label>
          <input
            className="text-gray-700 bg-red-100 rounded-md border-2 border-gray-800"
            type="text"
            value={inputValue1}
            onChange={handleInputChange1}
            placeholder="Price?"
          />
          <div className="flex justify-center space-x-16 mt-2">
            <button
              type="submit"
              className="font-bold bg-blue-200 hover:bg-green-300 text-xs rounded-full px-3 py-1"
            >
              AddItem
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="font-bold bg-blue-200 hover:bg-green-300 text-xs rounded-full px-3 py-1"
            >
              ClearAll
            </button>
          </div>
        </form>
      </div>
      <div className="font-bold  border-2 border-gray-800 p-2 rounded-md px-28">
        <h4 className="flex justify-center  bg-gray-950 px-5 rounded-full py-1 text-white">
          Total
        </h4>
        {/* Display total price */}
        <div className="bg-green-100 text-black rounded-md mt-2 text-xs space-y-2">
          <p className="px-5">{`Total: $${total.toFixed(2)}`}</p>
        </div>
        <h2 className="flex justify-center bg-gray-950 px-3 py-1 rounded-full text-xs text-white mt-5">
          Items
        </h2>{" "}
        {/* Display submitted data */}
        {submittedData.map((item, index) => (
          <div
            className="bg-gray-300 text-black rounded-md mt-2 space-y-2"
            key={index}
          >
            <p className="px-5">{`${item.name}:   $${item.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expense;
