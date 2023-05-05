import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState("0"); //Muestra el valor del input
  const [firstValue, setFirstValue] = useState(0); //Almacena el valor del primer término
  const [secondValue, setSecondValue] = useState(0); //Almacena el valor del segundo término
  const [isOperating, setIsOperating] = useState(false); //Para saber cuando se presiona un operador
  const [secondViewValue, setSecondViewValue] = useState(""); //El input más chico donde muestra el resultado anterior

  // Actualizamos el valor del primer número cada vez que cambia el valor actual
  useEffect(() => {
    if (!isOperating) {
      setFirstValue(parseFloat(currentValue));
    }
  }, [currentValue, isOperating]);

  //Mostramos cada boton que el usuario vaya ingresando
  const handleInputChange = (e) => {
    setCurrentValue(e.target.value.toString());
  };

  //Manejamos los casos donde se introduce un numero distinto de cero siendo cero ya el valor actual
  //Además limpiamos el input cuando se pulsa un operador y se ingresa otro numero
  const handleNumberClick = (e) => {
    const number = e.target.value.toString();
    if (number === "0" && currentValue === "0") {
      return;
    } else if (currentValue === "0" || isOperating) {
      setCurrentValue(number);
      setIsOperating(false);
    } else {
      setCurrentValue(currentValue + number);
    }
    if (isOperating) {
      setSecondValue(parseFloat(currentValue));
      setIsOperating(false);
    }
  };

  //Reseteamos los valores al precionar "C"
  const resetNumber = () => {
    setCurrentValue("0");
    setFirstValue(0);
    setSecondValue(0);
    setSecondViewValue("");
  };

  //Manejamos los operadores para cada caso
  const handleOperatorClick = (operator) => {
    switch (operator) {
      case "+":
        //Activamos el operador
        setIsOperating(true);
        //Mientras no sea cero lo vamos 'imprimiendo' en el input chico
        setSecondViewValue(
          firstValue + secondValue !== 0 ? firstValue + secondValue : ""
        );
        //Para cuando uso el operando 'más' luego de otro operando más
        //me actualice también la vista del currentValue
        setCurrentValue(
          firstValue + secondValue !== 0 ? firstValue + secondValue : ""
        );
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
            <button
              className="col-2 rounded btnCalculator"
              onClick={resetNumber}
            >
              CE
            </button>
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
