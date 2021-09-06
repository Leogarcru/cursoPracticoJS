//Código del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

//Código del triangulo

console.group("triangulo");
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// const ladoTriangulo3 = 5;
// const alturaTriangulo = 5;

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     ladoTriangulo3 +
//     "cm"
// );

//console.log("La altura del triangulo es de : " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm²");

console.groupEnd();

//Código del circulo
console.group("circulo");

//radio
//const radioCirculo = 15;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//diamtero
function diametroCirculo(radio) {
  return radio * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//console.log("El valor de PI es: " + PI);

//circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// const perimetroCirculo = PI * diametroCirculo;
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

//area
function areaCirculo(radio) {
  return radio * radio * PI;
}
// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm²");

console.groupEnd();

//Interactuar con HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputLadoCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputLadoCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input_1 = document.getElementById("inputLadoTriangulo-1")
  const input_2 = document.getElementById("inputLadoTriangulo-2")
  const input_3 = document.getElementById("inputLadoTriangulo-3")
  const value1 = Number(input_1.value)
  const value2 = Number(input_2.value)
  const value3 = Number(input_3.value)
  const perimetro = perimetroTriangulo(value1, value2, value3)
  alert(perimetro)
}

function calcularAreaTriangulo(){
  const input_h = document.getElementById("inputAlturaTriangulo")
  const input_b = document.getElementById("inputLadoTriangulo-3")
  const value_h = Number(input_h.value)
  const value_b = Number(input_b.value)
  const area = areaTriangulo(value_b, value_h)
  alert(area)
}

function calcularPerimetroCirculo(){
  const input_r = document.getElementById("inputRadioCirculo")
  const value_r = Number(input_r.value)
  const perimetro = perimetroCirculo(value_r)
  alert(perimetro)
}

function calcularAreaCirculo(){
  const input_r = document.getElementById("inputRadioCirculo")
  const value_r = Number(input_r.value)
  const area = areaCirculo(value_r)
  alert(area)
}