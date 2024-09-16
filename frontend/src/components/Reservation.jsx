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

const Reservation = () => {
  const [checkIn, setCheckIn] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });

  const [roomSize, setRoomSize] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [error, setError] = useState("");

  const handleReset = () => {
    setName("");
    setEmail("");
    setCountryCode("");
    setPhoneNumber("");
    setCheckIn(() => {
      return new Date().toISOString().split("T")[0];
    });
    setCheckOut(() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    });
    setRoomSize("3-beds");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 flex flex-col gap-3 justify-start items-center rounded-lg shadow-lg"
      >
        <h1 className="font-bold text-gray-800 text-lg">
          Room reservation form:
        </h1>
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
            className=" w-full rounded-md shadow px-4 py-2 text-gray-500 font-medium outline-none border"
          />
        </div>
        <div className="flex flex-row gap-3 w-full">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-500 text-sm">
              Check-in date:
            </label>
            <input
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value.split("T")[0])}
              type="date"
              required
              className="px-4 py-2 rounded-md shadow-md text-gray-500 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-500 text-sm">
              Check-out date:
            </label>
            <input
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value.split("T")[0])}
              type="date"
              required
              className="px-4 py-2 rounded-md shadow-md text-gray-500 outline-none"
            />
          </div>
        </div>
        <select
          className="px-4 py-2 rounded-md shadow-md w-full"
          value={roomSize}
          onChange={(e) => setRoomSize(e.target.value)}
        >
          <option value="3-beds">3-beds</option>
          <option value="2-beds">2-beds</option>
          <option value="1-bed">1-bed</option>
        </select>
        <div className="flex flex-col gap-2 w-full flex-wrap">
          <button
            onClick={handleReset}
            className=" w-full rounded-md px-4 py-2 shadow-lg font-bold text-red-500 bg-transparent border border-red-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="w-full border-none rounded-md px-4 py-2 shadow-lg font-bold text-white bg-red-500"
          >
            Book
          </button>
        </div>
        {error && <p className="font-medium text-red-700">{error}</p>}
      </form>
    </div>
  );
};

export default Reservation;
