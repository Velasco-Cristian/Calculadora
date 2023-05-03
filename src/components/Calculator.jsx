import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [value, setValue] = useState(0);
  return (
    <>
      Calculadora
      <input type="number" className="col-8" />
      <div>
        <div className="row">
          <button className="col-3">%</button>
          <button className="col-3">CE</button>
          <button className="col-3">C</button>
          <button className="col-3">borrar</button>
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
          <button className="col-2">4</button>
          <button className="col-2">5</button>
          <button className="col-2">6</button>
          <button className="col-2">-</button>
        </div>
        <div className="row">
          <button className="col-2">1</button>
          <button className="col-2">2</button>
          <button className="col-2">3</button>
          <button className="col-2">+</button>
        </div>
        <div className="row">
          <button className="col-2">+/-</button>
          <button className="col-2">0</button>
          <button className="col-2">,</button>
          <button className="col-2">=</button>
        </div>
      </div>
    </>
  );
}
