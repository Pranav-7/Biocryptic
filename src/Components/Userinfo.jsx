import { useState, useEffect } from "react";

import {
  addDoc,
  collection,
  updateDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, firestore } from "../config";


const Userinfo = () => {
    const[medicine,setMedicine] = useState("");
    const[CompanyName,setCompanyName] = useState("");
    const[manDate,setManDate] = useState("");
    const[expDate,setExpDate] = useState("");
    const[price,setPrice] = useState("");
    const[location,setLocation] = useState("");
  return (
    <>
      <form className="form-horizontal container my-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Medicine
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setMedicine(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Company name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price Of Medicine
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) =>setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Location of seller
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) =>setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3 d-flex ">
          <div>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Manufacturing Date
          </label>
          <input
            type="date"
            className="form-control "
            id="exampleInputPassword1"
            onChange={(e) =>setManDate(e.target.value)}
          />
          </div>
          <div className="ms-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Expiry Date
          </label>
          <input
            type="date"
            className="form-control "
            id="exampleInputPassword1"
            onChange={(e) =>setExpDate(e.target.value)}
          />
          </div>
        </div>
        <button type="submit" className="btn btn-primary px-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default Userinfo;
