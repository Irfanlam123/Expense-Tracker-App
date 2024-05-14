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
    <div className="flex flex-col items-center justify-center ml-32 mr-32 py-20 rounded-md bg-yellow-200 text-black">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label className="font-bold">Item name:</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="productName"
        />
        <label className="font-bold">Item Price:</label>
        <input
          type="text"
          value={inputValue1}
          onChange={handleInputChange1}
          placeholder="Price?"
        />
        <div className="flex justify-center space-x-16 mt-2">
          <button
            type="submit"
            className="font-bold bg-blue-200 rounded-full px-3 py-1"
          >
            AddItem
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="font-bold bg-blue-200 rounded-full px-3 py-1"
          >
            ClearAll
          </button>
        </div>
      </form>
      <div className="mt-5 font-bold text-2xl ">
        <h2 className="flex justify-center bg-gray-950 px-5 rounded-md text-white">
          Total
        </h2>
        {/* Display total price */}
        <div className="bg-gray-300 text-black rounded-md mt-2 space-y-2">
          <p className="px-5">{`Total: $${total.toFixed(2)}`}</p>
        </div>
        <h2 className="flex justify-center bg-gray-950 px-5 rounded-md text-white mt-5">
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
