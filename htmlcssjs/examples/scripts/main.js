"use strict";

import {
  getAdd,
  getSubstract,
  getMultiply,
  getDivide,
  getModule,
  getExponent,
  getResultadoFormateado,
  validate,
} from "./functions.js";

// leer dos numeros, mostrar operaciones basicas

const d = document;
const $firstNumber = d.getElementById("firstNumber");
const $secondNumber = d.getElementById("secondNumber");
const $basicOperationForm = d.getElementById("basicOperationForm");
const $basicOperationResults = d.getElementById("basicOperationResults");

//  <li class="list-group-item active">Operaciones básicas</li>

const operands = {
  num1: null,
  num2: null,
};

d.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});

function eventListeners() {
  $basicOperationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = validate(operands);
    console.log(isValid);
    if (isValid) {
    }

    let html = "";

    // $basicOperationResults.innerHTML = `<li class="list-group-item"> 100 + 10 = 110</li>`
    const add = getAdd(operands.num1, operands.num2);
    html += getResultadoFormateado(operands.num1, operands.num2, "add", add);
    const substract = getSubstract(operands.num1, operands.num2);
    html += getResultadoFormateado(
      operands.num1,
      operands.num2,
      "substract",
      substract
    );
    const multiply = getMultiply(operands.num1, operands.num2);
    html += getResultadoFormateado(
      operands.num1,
      operands.num2,
      "multiply",
      multiply
    );
    const divide = getDivide(operands.num1, operands.num2);
    html += getResultadoFormateado(
      operands.num1,
      operands.num2,
      "divide",
      divide
    );
    const module = getModule(operands.num1, operands.num2);
    html += getResultadoFormateado(
      operands.num1,
      operands.num2,
      "module",
      module
    );

    const exponent = getExponent(operands.num1, operands.num2);
    html += getResultadoFormateado(
      operands.num1,
      operands.num2,
      "exponent",
      exponent
    );

    $basicOperationResults.innerHTML = html;
  });

  $firstNumber.addEventListener("input", (event) => {
    operands.num1 = event.target.valueAsNumber;
    console.log(operands);
  });
  $secondNumber.addEventListener("input", (event) => {
    operands.num2 = event.target.valueAsNumber;
    console.log(operands);
  });
}

//  <li class="list-group-item"> 100 + 10 = 110</li>
// mdn web docs
