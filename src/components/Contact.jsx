import { addDoc, collection, docRef } from "firebase/firestore";
import React, { useState } from "react";
import "../app.css";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/userDeatails");
    const docRef = addDoc(collection(db, "users"), {
      name,
      email,
      password,
    });
    console.log(docRef);

    setEmail("");
    setName("");
    setpassword("");
  };

  return (
    <>
      <div className="app">
        <form className="form">
          <h1>Register User </h1>

          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
