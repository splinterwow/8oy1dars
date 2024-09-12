import React, { useRef, useState } from "react";

function Main() {
  const [cartItems, setCartItems] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();
  const nationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const nation = nationRef.current.value;

    setCartItems([...cartItems, { name, age, nation }]);
    e.target.reset(); // Clear the form after submission
  };

  return (
    <div className="mx-auto max-w-[1440px] w-full p-6">
      <hr className="my-4 border-t-2 border-gray-300 w-[900px] -mt-[26px]" />

      <div className="Cart mx-auto max-w-lg">
        <form className="mx-auto ml-10 space-y-4" onSubmit={handleSubmit}>
          <h1 className="font-bold text-4xl text-center mb-6">User Info</h1>

          <div className="flex flex-col space-y-2 ml-14">
            <label htmlFor="name1" className="font-medium">
              Name
            </label>
            <input
              id="name1"
              ref={nameRef}
              type="text"
              placeholder="Enter name"
              className="input input-bordered w-full max-w-xs p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col space-y-2 ml-14">
            <label htmlFor="age" className="font-medium">
              Age
            </label>
            <input
              id="age"
              ref={ageRef}
              type="number"
              placeholder="Enter age"
              className="input input-bordered w-full max-w-xs p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col space-y-2 ml-14">
            <label htmlFor="nation" className="font-medium">
              Nation
            </label>
            <select
              id="nation"
              ref={nationRef}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select a nation?
              </option>
              <option>English</option>
              <option>Russia</option>
              <option>Uzbek</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary ml-[180px]">
            SAVE
          </button>
        </form>

        <div className="mt-6">
          <h2 className="font-bold text-2xl text-center">Cart Items</h2>
          <div className="overflow-auto border border-gray-300 rounded-lg p-4">
            <div className="space-y-2 boredr ">
              {cartItems.map((item, index) => (
                <ul key={index} className="p-2 border-gray-200">
                  <li>Name: {item.name}</li>
                  <li>Age: {item.age}</li>
                  <li>Nation: {item.nation}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
