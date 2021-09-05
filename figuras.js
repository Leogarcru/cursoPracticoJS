//Código del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

//Código del triangulo

console.group("triangulo");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const ladoTriangulo3 = 5;
const alturaTriangulo = 5;

console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    ladoTriangulo3 +
    "cm"
);

console.log("La altura del triangulo es de : " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo2;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm²");

console.groupEnd();

//Código del circulo
console.group("circulo");

//radio
const radioCirculo = 15;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//diamtero
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

//circunferencia
const perimetroCirculo = PI * diametroCirculo;
console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

//area
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es: " + areaCirculo + "cm²");

console.groupEnd();
