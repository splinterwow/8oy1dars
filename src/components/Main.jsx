import React, { useRef } from "react";

function Main({ setCartItems }) {
  const nameRef = useRef();
  const ageRef = useRef();
  const nationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const nation = nationRef.current.value;

    const newItem = { name, age, nation };
    setCartItems((prevItems) => [...prevItems, newItem]); // Update the cart in App
    e.target.reset(); // Clear the form after submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="font-bold text-4xl text-center mb-6">User Info</h1>

        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-medium">Name</label>
          <input
            id="name"
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            className="input input-bordered w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="age" className="font-medium">Age</label>
          <input
            id="age"
            ref={ageRef}
            type="number"
            placeholder="Enter age"
            className="input input-bordered w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="nation" className="font-medium">Nation</label>
          <select
            id="nation"
            ref={nationRef}
            className="select select-bordered w-full"
          >
            <option disabled selected>Select a nation?</option>
            <option>English</option>
            <option>Russia</option>
            <option>Uzbek</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-full">SAVE</button>
      </form>
    </div>
  );
}

export default Main;