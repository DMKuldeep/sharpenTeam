import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <form className="form-container">
        <label>First Name</label>
        <input type="name"></input>
        <label>Last Name</label>
        <input type="name"></input>
        <br />
        <br />
        <label>Email</label>
        <input type="email"></input>
        <br />
        <br />
        <label>Permission</label>
        <select>
          <option>Accept</option>
          <option>Denied</option>
        </select>
        <br />
        <br />
        <button type="button">Save</button>
      </form>
    </div>
  );
};

export default Form;
