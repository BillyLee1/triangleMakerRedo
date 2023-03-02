import Triangle from './triangle.js';
import Square from './square.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleTriangleForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const length2 = parseInt(document.querySelector('#length2').value);
  const length1 = parseInt(document.querySelector('#length1').value);
  const length3 = parseInt(document.querySelector('#length3').value);
  const length4 = parseInt(document.querySelector('#length4').value);
  const triangle = new Triangle(length1, length2, length3, length4);
  const square = new Square(length1, length2, length3, length4);
  const response = triangle.checkType();
  const responseSquare = square.checkType();
  const squareArea = square.squareArea();
  const pTag = document.createElement("p");
  pTag.append(response + " ");
  pTag.append(responseSquare + ", " + "Area: " + squareArea);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
});
