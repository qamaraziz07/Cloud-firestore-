import React from "react";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
const UserDetails = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setDoctors(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  useEffect(()=>{
      console.log(doctors);
  },[doctors])

  return (
    <div>
      <h1>User Details</h1>
      {doctors
        ? doctors.map((doctor, ind) => {
            return (
              <div key={ind}>
                <h2>
                  Name: <b>{doctor.name}</b>
                </h2>
                <h2>
                  Email: <b>{doctor.email}</b>
                </h2>
              </div>
            );
          })
        : "No Doctor"}
    </div>
  );
};

export default UserDetails;
