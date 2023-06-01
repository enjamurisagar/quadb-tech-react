import React, { useState } from "react";
import "./Form.css";
//icons
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
const Form = ({ singleShow }) => {
  const [qty, setQty] = useState(1);
  const decreaseQty = () => {
    if (qty !== 1) {
      setQty((qty) => qty - 1);
    }
  };
  const increaseQty = () => {
    setQty((qty) => qty + 1);
  };
  const handleEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-main">
      <h1 className="heading">Just Fill it and Get it</h1>
      <div className="form">
        <form>
          <div className="show-name">
            <label>Show Name</label>
            <input type="text" value={singleShow[0].show.name} readOnly />
          </div>
          <div className="available">
            <h1
              className={
                singleShow[0].show.status === "Running" ? "green" : "red"
              }
            >
              {singleShow[0].show.status === "Running"
                ? "Available"
                : "Not Available"}
            </h1>
          </div>
          <div className="user-name">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" placeholder="example@example.com" />
          </div>
          <div className="time">
            <label>Show time</label>
            <p>{singleShow[0].show.schedule.time} P.M</p>
          </div>
          <div className="qty">
            <h1>No.of Tickets</h1>
            <div className="wrapper">
              <HiMinusCircle className="minus" onClick={decreaseQty} />
              <p className="qty">{qty}</p>
              <HiPlusCircle className="plus" onClick={increaseQty} />
            </div>
          </div>
          <div className="form-btn">
            <button className="button" onClick={handleEvent}>
              Book Tickets
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
