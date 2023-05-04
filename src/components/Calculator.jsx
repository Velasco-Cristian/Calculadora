import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="BodyCalculator container ">
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
        <input
          type="number"
          className="col-12 fs-5 text-end border border-0 text-muted"
          disabled
        />
        <input
          type="number"
          className="col-12 fs-3 text-end border border-0"
          inputMode="numeric"
        />
        <div>
          <div className="row my-1 mx-1 pt-2 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">%</button>
            <button className="col-2 rounded btnCalculator">CE</button>
            <button className="col-2 rounded btnCalculator">C</button>
            <button className="col-2 rounded btnCalculator">
              <i className="bi bi-backspace"></i>
            </button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">1/x</button>
            <button className="col-2 rounded btnCalculator">x^2</button>
            <button className="col-2 rounded btnCalculator">raiz</button>
            <button className="col-2 rounded btnCalculator">/</button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">7</button>
            <button className="col-2 rounded btnCalculator">8</button>
            <button className="col-2 rounded btnCalculator">9</button>
            <button className="col-2 rounded btnCalculator">X</button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">4</button>
            <button className="col-2 rounded btnCalculator">5</button>
            <button className="col-2 rounded btnCalculator">6</button>
            <button className="col-2 rounded btnCalculator">-</button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">1</button>
            <button className="col-2 rounded btnCalculator">2</button>
            <button className="col-2 rounded btnCalculator">3</button>
            <button className="col-2 rounded btnCalculator">+</button>
          </div>
          <div className="row my-1 pb-3 mx-1 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">+/-</button>
            <button className="col-2 rounded btnCalculator">0</button>
            <button className="col-2 rounded btnCalculator">,</button>
            <button className="col-2 rounded btnCalculator btnEquals">=</button>
          </div>
        </div>
      </div>
    </>
  );
}
