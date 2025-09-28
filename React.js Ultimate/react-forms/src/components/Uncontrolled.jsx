import React, { useRef } from 'react'

const Uncontrolled = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-6 underline">
          Uncontrolled Form using useRef()
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            ref={name}
            placeholder="Enter name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="email"
            ref={email}
            placeholder="Enter email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Uncontrolled
