//Funciones Helpers
function esPar(numero){
  return (numero % 2 === 0)
}

//Calculadora de mediana
function medianaSalarios(lista){
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)){
    const elemento1 = lista[mitad - 1];
    const elemento2 = lista[mitad];
    const media = calcularMedia([elemento1, elemento2]);
    return media;
  } else {
    return lista[mitad];
  }
}

const salariosCol = colombia.map(
  function(persona){
    return persona.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function(a,b){
    return a - b;
  }
);


function calcularMedia(lista){
  const suma = lista.reduce(
    function(acumulado = 0, elemento){
      return acumulado + elemento;
    }
  )
  const promedio = suma / lista.length;
  return promedio;
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//Mediana del Top 10%
const spliceStart = Math.ceil(salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

console.log(medianaSalarios(salariosColSorted));
console.log(medianaSalarios(salariosColTop10));