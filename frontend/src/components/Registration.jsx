import React, { useState } from "react";

const countryPhoneCodes = [
  { country: "United States", code: "+1" },
  { country: "Canada", code: "+1" },
  { country: "United Kingdom", code: "+44" },
  { country: "Germany", code: "+49" },
  { country: "Australia", code: "+61" },
  { country: "India", code: "+91" },
  { country: "France", code: "+33" },
  { country: "China", code: "+86" },
  { country: "Japan", code: "+81" },
  { country: "Brazil", code: "+55" },
  { country: "South Africa", code: "+27" },
  { country: "Russia", code: "+7" },
  { country: "Mexico", code: "+52" },
  { country: "Spain", code: "+34" },
  { country: "Italy", code: "+39" },
  { country: "Netherlands", code: "+31" },
  { country: "Sweden", code: "+46" },
  { country: "Norway", code: "+47" },
  { country: "Turkey", code: "+90" },
  { country: "South Korea", code: "+82" },
];

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !userId ||
      !password ||
      !address ||
      !countryCode ||
      !phoneNumber ||
      !email
    )
      setError("Please enter all the * fields");
  };

  const handleReset = () => {
    setName("");
    setAddress("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setCountryCode("+91");
    setUserId("");
    setError("");
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#ECF4FC]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[400px] rounded-lg shadow-lg justify-center items-center p-10 bg-white/90"
      >
        <h1 className="text-red-500 font-bold text-xl">Hello User! 🙋‍♂️</h1>

        <input
          required
          type="text"
          placeholder="Name*..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
        />

        <input
          required
          type="email"
          placeholder="Email*..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
        />

        <input
          required
          type="text"
          placeholder="Address*..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className=" w-full rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
        />

        <div className="flex flex-row gap-2 w-full">
          <select
            required
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
          >
            {countryPhoneCodes.map((code, index) => (
              <option value={code.code} key={index}>
                {code.code}
              </option>
            ))}
          </select>
          <input
            required
            type="text"
            placeholder="Mobile number*..."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
          />
        </div>

        <input
          required
          type="text"
          placeholder="User ID*..."
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
        />

        <input
          required
          type="password"
          placeholder="Password*..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" w-full rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
        />

        <div className="flex flex-row gap-2 w-full">
          <button
            onClick={handleReset}
            className="rounded-md px-4 py-2 shadow-lg font-bold text-red-500 bg-transparent border border-red-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="border-none rounded-md px-4 py-2 shadow-lg font-bold text-white bg-red-500"
          >
            Login
          </button>
        </div>
        {error && <p className="font-medium text-red-700">{error}</p>}
      </form>
    </div>
  );
};

export default Registration;
