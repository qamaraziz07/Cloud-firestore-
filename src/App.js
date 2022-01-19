import React from "react";
import Contact from "./components/Contact";
import "./app.css";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/userDeatails" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
