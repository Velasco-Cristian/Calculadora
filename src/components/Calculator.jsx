import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [firstValue, setFirstValue] = useState(0);
  const [IsOperating, setIsOperating] = useState(false);
  const [secondViewValue, setSecondViewValue] = useState("");

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value.toString());
  };

  const handleNumberClick = (e) => {
    const number = e.target.value.toString();
    if (number === "0" && currentValue === "0") {
      return;
    } else if (currentValue === "0" || IsOperating === true) {
      setCurrentValue(number);
      setIsOperating(false);
    } else {
      setCurrentValue(currentValue + number);
    }
  };

  const resetNumber = () => {
    setCurrentValue("0");
    setFirstValue(0);
  };

  const handleOperatorClick = (operator) => {
    switch (operator) {
      case "+":
        console.log("el current values es: " + currentValue);
        setFirstValue(parseFloat(currentValue));
        console.log(typeof firstValue);
        console.log(firstValue);
        setIsOperating(true);
        setSecondViewValue(currentValue + " " + operator);
        break;
      case "-":
        //
        break;
      case "*":
        //
        break;
      case "/":
        //
        break;
      case "squareRoot":
        //
        break;
      case "powers":
        //;
        break;
      case "inverseFunction":
        //;
        break;
      default:
        console.log("Wrong operator");
    }
  };

  return (
    <>
      <div className="BodyCalculator container ">
        <div className="d-flex align-items-center">
          <img className="calculatorImg" src="/favicon.ico" alt="calculator" />
          <sub className="fs-6 ms-2">Calculadora</sub>
          <div className="ms-auto">
            <i className="bi bi-dash-lg me-5"></i>
            <i className="bi bi-square me-5"></i>
            <i className="bi bi-x-lg me-1"></i>
          </div>
        </div>
        <input
          type="text"
          className="col-12 fs-5 text-end border border-0 text-muted pe-4"
          value={secondViewValue}
          disabled
        />
        <input
          type="text"
          className="col-12 fs-3 text-end border border-0 pe-4"
          inputMode="numeric"
          onChange={handleInputChange}
          value={currentValue}
        />
        <div>
          <div className="row my-1 mx-1 pt-2 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">%</button>
            <button className="col-2 rounded btnCalculator">CE</button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={resetNumber}
            >
              C
            </button>
            <button className="col-2 rounded btnCalculator">
              <i className="bi bi-backspace"></i>
            </button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">1 / x</button>
            <button className="col-2 rounded btnCalculator">
              x<sup>2</sup>
            </button>
            <button className="col-2 rounded btnCalculator">√x</button>
            <button className="col-2 rounded btnCalculator fs-2">÷</button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={7}
            >
              7
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={8}
            >
              8
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={9}
            >
              9
            </button>
            <button className="col-2 rounded btnCalculator">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={4}
            >
              4
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={5}
            >
              5
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={6}
            >
              6
            </button>
            <button className="col-2 rounded btnCalculator fs1">
              <i className="bi bi-dash-lg"></i>
            </button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={"1"}
            >
              1
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={"2"}
            >
              2
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={3}
            >
              3
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={() => handleOperatorClick("+")}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
          <div className="row my-1 pb-3 mx-1 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">
              <i className="bi bi-plus-slash-minus"></i>
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={0}
            >
              0
            </button>
            <button className="col-2 rounded btnCalculator">,</button>
            <button
              className="col-2 rounded btnCalculator btnEquals fs-3"
              //onClick={handleEqualsClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
