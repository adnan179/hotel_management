import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Billing from "./components/Billing";
import History from "./components/History";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
