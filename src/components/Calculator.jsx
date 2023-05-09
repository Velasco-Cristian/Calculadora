import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [firstView, setFirstView] = useState("0");
  const [secondView, setSecondView] = useState("");
  const [secondValue, setSecondValue] = useState(0);
  const [operatorPressed, setOperatorPressed] = useState(false);

  const handleNumberClick = (e) => {
    let number = e.target.value.toString();
    if (operatorPressed) {
      setFirstView(number);
      setOperatorPressed(false);
    } else {
      setFirstView(firstView === "0" ? number : firstView + number);
    }
  };

  const handleOperatorClick = (op) => {
    switch (op) {
      case "+":
        if (firstView !== "0") {
          let tempOperator = "+";
          if (secondView.includes("+")) {
            tempOperator = "+";
          }
          if (secondView !== "") {
            let result = eval(`${secondValue} ${tempOperator} ${firstView}`);
            setSecondView(`${result} +`);
            setSecondValue(result);
            setFirstView(result.toString());
          } else {
            setSecondView(`${firstView} +`);
            setSecondValue(parseFloat(firstView));
          }
        }
        break;
      default:
        console.log("Wrong operator");
    }
    setOperatorPressed(true);
  };

  return (
    <>
      <div className="BodyCalculator container rounded-2">
        <div className="d-flex align-items-center pt-2">
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
          value={secondView}
          disabled
        />
        <input
          type="text"
          className="col-12 fs-3 text-end border border-0 pe-4"
          inputMode="numeric"
          onChange={(e) => setFirstView(e.target.value)}
          value={firstView}
        />
        <div>
          <div className="row my-1 mx-1 pt-2 justify-content-evenly fs-5">
            <button className="col-2 rounded btnCalculator">%</button>
            <button
              className="col-2 rounded btnCalculator"
              //onClick={resetNumber}
            >
              CE
            </button>
            <button
              className="col-2 rounded btnCalculator"
              //onClick={resetNumber}
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
              value={"7"}
            >
              7
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={"8"}
            >
              8
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={"9"}
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
              value={"4"}
            >
              4
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={"5"}
            >
              5
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={"6"}
            >
              6
            </button>
            <button
              className="col-2 rounded btnCalculator fs1"
              //onClick={() => handleOperatorClick("-")}
            >
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
              value={"3"}
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
