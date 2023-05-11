import React, { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator() {
  const [firstView, setFirstView] = useState("0");
  const [secondView, setSecondView] = useState("");
  const [secondValue, setSecondValue] = useState(0);
  const [operatorPressed, setOperatorPressed] = useState(false);

  const formatNumber = (number) => {
    if (Number.isInteger(number)) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return number.toLocaleString("en-US");
    }
  };

  const handleNumberClick = (e) => {
    let number = e.target.value.toString();
    if (operatorPressed) {
      setFirstView(number);
      setOperatorPressed(false);
    } else {
      setFirstView(
        firstView === "0"
          ? formatNumber(number)
          : formatNumber(firstView + number)
      );
    }
  };

  const handleDecimalClick = () => {
    if (!firstView.includes(".")) {
      setFirstView(formatNumber(firstView + "."));
    }
  };

  const handleSignChange = () => {
    setFirstView((prevView) => {
      const currentValue = parseFloat(prevView);
      const newValue = -currentValue;
      return newValue.toString();
    });
  };

  const handleReset = () => {
    setFirstView("0");
    setSecondView("");
    setSecondValue(0);
    setOperatorPressed(false);
  };

  const handleDelete = () => {
    if (firstView.length === 1) {
      setFirstView("0");
    } else {
      setFirstView(firstView.slice(0, -1));
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
            let result = evaluate(
              `${secondValue} ${tempOperator} ${firstView}`
            );
            setSecondView(`${formatNumber(result)} +`);
            setSecondValue(result);
            setFirstView(formatNumber(result.toString()));
          } else {
            setSecondView(`${formatNumber(firstView)} +`);
            setSecondValue(parseFloat(firstView));
          }
        }
        break;
      case "-":
        if (firstView !== "0") {
          let tempOperator = "-";
          if (secondView.includes("-")) {
            tempOperator = "-";
          }
          if (secondView !== "") {
            let result = eval(`${secondValue} ${tempOperator} ${firstView}`);
            setSecondValue(result);
            setSecondView(`${formatNumber(result)} -`);
            setFirstView(formatNumber(result.toString()));
          } else {
            setSecondView(`${formatNumber(firstView)} -`);
            setSecondValue(parseFloat(firstView));
          }
        }
        break;
      case "*":
        if (firstView !== "0") {
          let tempOperator = "*";
          if (secondView.includes("*")) {
            tempOperator = "*";
          }
          if (secondView !== "") {
            let result = eval(`${secondValue} ${tempOperator} ${firstView}`);
            setSecondView(`${result} *`);
            setSecondValue(result);
            setFirstView(result.toString());
          } else {
            setSecondView(`${firstView} *`);
            setSecondValue(parseFloat(firstView));
          }
        }
        break;
      case "/":
        if (firstView !== "0") {
          let tempOperator = "/";
          if (secondView.includes("+")) {
            tempOperator = "+";
          } else if (secondView.includes("-")) {
            tempOperator = "-";
          } else if (secondView.includes("*")) {
            tempOperator = "*";
          }
          if (secondView !== "" && secondValue !== 0) {
            let result = evaluate(
              `${secondValue} ${tempOperator} ${firstView}`
            );
            setSecondView(`${formatNumber(result)} /`);
            setSecondValue(result);
          } else {
            if (operatorPressed && secondView.slice(-1) === "/") {
              setSecondView(`${secondValue} /`);
            } else {
              setSecondView(`${firstView} /`);
              setSecondValue(parseFloat(firstView));
            }
          }
        }
        break;
      case "%":
        if (firstView !== "0") {
          let result = parseFloat(firstView) / 100;
          setFirstView(result.toString());
        }
        break;
      case "x^2":
        if (firstView !== "0") {
          let result = parseFloat(firstView) ** 2;
          setSecondView(`(${formatNumber(firstView)})^2`);
          setFirstView(formatNumber(result.toString()));
        }
        break;
      case "√":
        if (firstView !== "0") {
          let result = Math.sqrt(parseFloat(firstView));
          setSecondView(`√(${formatNumber(firstView)})`);
          setFirstView(formatNumber(result.toString()));
        }
        break;
      case "1/x":
        if (firstView !== "0") {
          let result = 1 / parseFloat(firstView);
          setSecondView(`1/(${formatNumber(firstView)})`);
          setFirstView(formatNumber(result.toString()));
        }
        break;
      case "=":
        if (secondView !== "" && firstView !== "") {
          let tempOperator = "";
          if (secondView.includes("+")) {
            tempOperator = "+";
          } else if (secondView.includes("-")) {
            tempOperator = "-";
          } else if (secondView.includes("*")) {
            tempOperator = "*";
          } else if (secondView.includes("/")) {
            tempOperator = "/";
          } else if (secondView.includes("%")) {
            tempOperator = "*";
          }

          if (tempOperator !== "") {
            let result = evaluate(
              `${Number(secondValue)} ${tempOperator} ${Number(firstView)}`
            );

            if (secondView.slice(-1) === "=") {
              setSecondView(`${result} ${tempOperator}`);
            } else {
              setSecondView(`${secondView} ${firstView} =`);
            }

            setSecondView(`${formatNumber(result)} ${tempOperator}`);
            setFirstView(formatNumber(result.toString()));
            setSecondValue(0);
            setOperatorPressed(false);
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
          value={formatNumber(firstView)}
        />
        <div>
          <div className="row my-1 mx-1 pt-2 justify-content-evenly fs-5">
            <button
              className="col-2 rounded btnCalculator"
              onClick={() => handleOperatorClick("%")}
            >
              %
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleReset}
            >
              CE
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleReset}
            >
              C
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleDelete}
            >
              <i className="bi bi-backspace"></i>
            </button>
          </div>
          <div className="row my-1 mx-1 justify-content-evenly fs-5">
            <button
              className="col-2 rounded btnCalculator"
              onClick={() => handleOperatorClick("1/x")}
            >
              1 / x
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={() => handleOperatorClick("x^2")}
            >
              x<sup>2</sup>
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={() => handleOperatorClick("√")}
            >
              √x
            </button>
            <button
              className="col-2 rounded btnCalculator fs-2"
              onClick={() => handleOperatorClick("/")}
            >
              ÷
            </button>
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
            <button
              className="col-2 rounded btnCalculator"
              onClick={() => handleOperatorClick("*")}
            >
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
              onClick={() => handleOperatorClick("-")}
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
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleSignChange}
            >
              <i className="bi bi-plus-slash-minus"></i>
            </button>
            <button
              className="col-2 rounded btnCalculator"
              onClick={handleNumberClick}
              value={0}
            >
              0
            </button>
            <button
              className="col-2 rounded btnCalculator"
              value="."
              onClick={handleDecimalClick}
            >
              ,
            </button>
            <button
              className="col-2 rounded btnCalculator btnEquals fs-3"
              onClick={() => handleOperatorClick("=")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
