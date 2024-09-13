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
    setCartItems((prevItems) => [...prevItems, newItem]);
    e.target.reset();
  };

  return (
    <div className="mx-auto max-w-[1440px] w-full p-6">
      <form className="mx-auto ml-10 space-y-4" onSubmit={handleSubmit}>
        <h1 className="font-bold text-4xl text-center mb-6">User Info</h1>

        <div className="flex flex-col space-y-2 ml-14">
          <label htmlFor="name" className="font-medium">Name</label>
          <input
            id="name"
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            className="input input-bordered w-full max-w-xs p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col space-y-2 ml-14">
          <label htmlFor="age" className="font-medium">Age</label>
          <input
            id="age"
            ref={ageRef}
            type="number"
            placeholder="Enter age"
            className="input input-bordered w-full max-w-xs p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col space-y-2 ml-14">
          <label htmlFor="nation" className="font-medium">Nation</label>
          <select
            id="nation"
            ref={nationRef}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>Select a nation?</option>
            <option>English</option>
            <option>Russia</option>
            <option>Uzbek</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary ml-[180px]">SAVE</button>
      </form>
    </div>
  );
}

export default Main;