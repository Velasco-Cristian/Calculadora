import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Calculator from "./components/calculator";

function App() {
  return (
    <div className="container-fluid">
      <header>
        <h1 className="text-center py-xl-5 py-3 text-orange">Calculadora</h1>
      </header>
      <main className="">
        <article className="row flex-column-reverse flex-lg-row d-flex justify-content-center">
          <section className="col-lg-5 col-10 mx-auto text-bg-dark rounded-4 rounded-bottom aboutText">
            <img
              src="/public/using-a-calculator.jpg"
              className="img-fluid pt-4 pb-2 d-none d-lg-block px-xl-4 image"
              alt="Using a calculator"
            />
            <p className="text-orange my-sm-4 my-lg-1 pt-2 px-3">
              La calculadora es una herramienta fundamental para cualquier
              persona que necesite realizar operaciones matemáticas en su día a
              día, permite realizar operaciones matemáticas. Puede ser utilizada
              en cualquier dispositivo con acceso a Internet, con ella puedes
              realizar funciones como suma, resta, multiplicación, división.
            </p>
          </section>
          <section className="col-10 mx-auto col-lg-5 mb-sm-5 mb-5">
            <Calculator></Calculator>
          </section>
        </article>
      </main>
      <footer className="bg-dark text-center fixed-bottom py-1 text-orange">
        <div className="row">
          <article className="col-8 col-lg-7 col-xxl-6 text-end">
            <p className="fs-6 ">
              Derechos reservados &copy; 2023 - Calculadora
            </p>
            <p className="fs-6 mt-n1">Hecho por: Velasco Cristian</p>
          </article>
          <article className="col-4  text-start mt-n2">
            <a
              href="https://www.linkedin.com/in/velasco-cristian-nicolas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin text-orange fs-1 mx-4 link"></i>
            </a>
            <a
              href="https://github.com/Velasco-Cristian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github text-orange fs-1 link"></i>
            </a>
          </article>
        </div>
      </footer>
    </div>
  );
}

export default App;
