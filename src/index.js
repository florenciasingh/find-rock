import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// eslint-disable-next-line
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/*let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edadString = prompt("Ingrese su edad");
let edad = parseInt(edadString);
let calculo = (edad) => {
  return 5 + 5 + edad;
};

let jsxMultiple = (
  <div>
    <h1>
      Hola, soy {nombre} {apellido} desde React con JSX
    </h1>

    <h2>Mi edad es: {calculo(edad)} </h2>
  </div>
);

let container = document.getElementById("root");
reactDom.render(jsxMultiple, container); */
