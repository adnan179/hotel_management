import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [admin, setAdmin] = useState(false);

  return (
    <div className="w-full h-[80px] shadow bg-red-700 flex flex-row gap-4 justify-between items-center flex-wrap text-white font-medium text-lg px-10">
      <h1 className="text-xl">Welcome User!</h1>
      <div className="flex flex-row gap-3 items-center">
        <Link to="/">Home</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/history">History</Link>
        <Link to="/bookings">Bookings</Link>
        {admin && <Link to="/roomstatus">Room status</Link>}
        <Link to="/contact">Contact us</Link>
        <Link to="/login">
          <button className="border border-white bg-transparent rounded-md text-white px-4 py-2">
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
