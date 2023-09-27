export const getAdd = (a, b) => a + b
export const getSubstract = (a, b) => a - b
export const getMultiply = (a, b) => a * b
export const getDivide = (a, b) => a / b
export const getModule = (a, b) => a % b
export const getExponent = (a, b) => a ** b

export const validate = (obj) => {
    for (const key in obj) {
        if (!obj[key]){
            return false
        }
    }
    return true
}

export function getResultadoFormateado(num1, num2, operation, result) {
    switch (operation) {
      case "exponent":
        return `<li class="list-group-item"> ${num1} exp ${num2} = ${result}</li>`;
        break;
      case "add":
        return `<li class="list-group-item"> ${num1} + ${num2} = ${result}</li>`;
        break;
      case "substract":
        return `<li class="list-group-item"> ${num1} - ${num2} = ${result}</li>`;
        break;
      case "module":
        return `<li class="list-group-item"> ${num1} % ${num2} = ${result}</li>`;
        break;
      case "divide":
        return `<li class="list-group-item"> ${num1} / ${num2} = ${result}</li>`;
        break;
      case "multiply":
        return `<li class="list-group-item"> ${num1} * ${num2} = ${result}</li>`;
        break;
      default:
        break;
    }
  }

