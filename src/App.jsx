import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid vh-100">
      <header>
        <h1 className="text-center py-5 text-orange">Calculadora</h1>
      </header>
      <main className="container-xxl">
        <article className="row">
          <section className="col text-bg-dark rounded-5 rounded-bottom">
            <img
              src="/public/using-a-calculator.jpg"
              className="img-fluid p-3"
              alt="Using a calculator"
            />
            <p className="text-orange">
              Una calculadora gratis y simple, permite realizar operaciones
              matemáticas. Puede ser utilizada en cualquier dispositivo con
              acceso a Internet, con ella puedes realizar funciones como suma,
              resta, multiplicación, división.
            </p>
          </section>
          <section className="col">Calculadora</section>
        </article>
      </main>
      <footer className="bg-dark text-center fixed-bottom p-1 text-orange">
        <div className="row">
          <article className="col-6 text-end">
            <p>Derechos reservados &copy; 2023 - Calculadora</p>
            <p>Hecho por: Velasco Cristian</p>
          </article>
          <article className="col-6 text-start">Redes</article>
        </div>
      </footer>
    </div>
  );
}

export default App;
