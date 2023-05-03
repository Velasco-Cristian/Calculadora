import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="BodyCalculator container">
        <div className="d-flex align-items-center">
          <img
            className="calculatorImg"
            src="/public/favicon.ico"
            alt="calculator"
          />
          <h4 className="fs-4 me-3">Calculadora</h4>
          <div className="ms-auto">
            <i className="bi bi-dash-lg me-5"></i>
            <i className="bi bi-square me-5"></i>
            <i className="bi bi-x-lg me-1"></i>
          </div>
        </div>
        <input type="number" className="col-12" />
        <div>
          <div className="row my-1 mx-1 justify-content-evenly">
            <button className="col-2  rounded btnCalculator">%</button>
            <button className="col-2 rounded btnCalculator">CE</button>
            <button className="col-2 rounded btnCalculator">C</button>
            <button className="col-2 rounded btnCalculator">borrar</button>
          </div>
          <div className="row">
            <button className="col-3">1/x</button>
            <button className="col-3">x^2</button>
            <button className="col-3">raiz</button>
            <button className="col-3">/</button>
          </div>
          <div className="row">
            <button className="col-3">7</button>
            <button className="col-3">8</button>
            <button className="col-3">9</button>
            <button className="col-3">X</button>
          </div>
          <div className="row">
            <button className="col-3">4</button>
            <button className="col-3">5</button>
            <button className="col-3">6</button>
            <button className="col-3">-</button>
          </div>
          <div className="row">
            <button className="col-3">1</button>
            <button className="col-3">2</button>
            <button className="col-3">3</button>
            <button className="col-3">+</button>
          </div>
          <div className="row">
            <button className="col-3">+/-</button>
            <button className="col-3">0</button>
            <button className="col-3">,</button>
            <button className="col-3">=</button>
          </div>
        </div>
      </div>
    </>
  );
}
