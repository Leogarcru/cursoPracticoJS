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
