import { useState, useEffect, useCallback } from "react";

import { ethers } from "ethers";
import {
  addDoc,
  collection,
  updateDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  Firestore,
} from "firebase/firestore";
import { db, firestore } from "../config";

const TableBuyer = () => {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [medicine, setMedicine] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [manDate, setManDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [location, setLocation] = useState("");
  const [bool, setBool] = useState(false);
  //send ethers from your wallet

  const startPayment = async (id, ether, stock) => {
    try {
      console.log(ether);
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress("0x3169531AC297B93921d4B32CEb8fD1AA31B0A603");
      const tx = await signer.sendTransaction({
        to: "0x3169531AC297B93921d4B32CEb8fD1AA31B0A603",
        value: ethers.utils.parseEther(ether)
      });
      var stocks = parseInt(stock) - 1;
      var newStock = stocks.toString();
      const washingtonRef = doc(firestore, db.biocryptic, id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        stock: newStock,
      });
    } catch (e) {}
  };

  const startPayments = async () => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress("0x3169531AC297B93921d4B32CEb8fD1AA31B0A603");
      const tx = await signer.sendTransaction({
        to: "0x3169531AC297B93921d4B32CEb8fD1AA31B0A603",
        value: ethers.utils.parseEther("0.02"),
      });
      setBool(true);
    } catch (err) {
      console.error(err);
    }
  };

  const writeToDatabase = async (e) => {
    e.preventDefault();
    await startPayments();

    await addDoc(collection(firestore, db.biocryptic), {
      stock,
      medicine,
      CompanyName,
      manDate,
      expDate,
      price,
      location,
    });
    
  };

  const getToDatabase = async () => {
    const data = await getDocs(collection(firestore, db.biocryptic));
    setAlldata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getToDatabase();
    console.log(alldata);
  }, []);

  const forceUpdate = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container my-5" >
        <div className="d-flex justify-content-end mt-5 pt-5" id="buyer" >
          <button className="btn btn-primary mb-2  px-5" onClick={forceUpdate}>
            Refresh
          </button>
        </div>
        <table className="table table-bordered table-hover tableInfo  " >
          <thead>
            <tr className="table-primary">
              <th scope="col">Medicine</th>
              <th scope="col">CompanyName</th>
              <th scope="col">PriceOfMedicine</th>
              <th scope="col">Stock</th>
              <th scope="col">LocationOfSeller</th>
              <th scope="col">
                Manfacturing <br />
                Date
              </th>
              <th scope="col">
                Expiry <br />
                Date
              </th>
              <th scope="col">BUY PRODUCT</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((data) => {
              return (
                <>
                  <tr>
                    <td>{data.medicine}</td>
                    <td>{data.CompanyName}</td>
                    <td>{data.price}</td>
                    <td>{data.stock}</td>
                    <td>{data.location}</td>
                    <td>{data.manDate}</td>
                    <td>{data.expDate}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => startPayment(data.id, data.price, data.stock)}
                      >
                        BUY
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <form className="container my-5 pt-5" id ="seller">
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
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Stock
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setStock(e.target.value)}
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
            onChange={(e) => setLocation(e.target.value)}
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
              onChange={(e) => setManDate(e.target.value)}
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
              onChange={(e) => setExpDate(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-start">
        <button
          type="submit"
          className="btn btn-primary px-5 me-3"
          onClick={writeToDatabase}
        >
          Submit
        </button>
        <button className="btn btn-primary  px-5" onClick={forceUpdate}>
            Refresh
          </button>
        </div>
      </form>
    </>
  );
};

export default TableBuyer;
