import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <div id="tri" className="form-control form-group">
      <button type="button" className="btn btn-danger btn-block">
        Page1
      </button>
      <br />
      <br />
      <button type="button" className="btn btn-danger btn-block">
        +
      </button>
      <br />
      <br />
      <button type="button" className="btn btn-danger btn-block">
        Page2
      </button>
    </div>
  );
};

export default Button;
