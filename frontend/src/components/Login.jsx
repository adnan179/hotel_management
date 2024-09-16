import React, { useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) setError("Please enter your credentials!");
    setUserId("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#ECF4FC]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-lg shadow-lg justify-center items-center p-10 bg-white/90"
      >
        <h1 className="text-red-500 font-bold text-xl">
          Welcome back User! 🙋‍♂️
        </h1>
        <input
          type="text"
          placeholder="User Id*..."
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
        />
        <input
          type="password"
          placeholder="Password*..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
        />
        <button
          type="submit"
          className=" border-none rounded-md px-4 py-2 shadow-md font-bold text-white bg-red-500"
        >
          Login
        </button>
        {error && <p className="font-medium text-red-700">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
