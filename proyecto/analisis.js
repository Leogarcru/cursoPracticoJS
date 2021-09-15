const salariosCol = colombia.map(
  function(persona){
    return persona.salary;
  }
)

const salariosColSorted = salariosCol.sort(
  function(a,b){
    return a - b;
  }
)

function esPar(numero){
  return (numero % 2 === 0)
}

function calcularMedia(lista){
  const suma = lista.reduce(
    function(acumulado = 0, elemento){
      return acumulado + elemento;
    }
  )
  const promedio = suma / lista.length;
  return promedio;
}

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

console.log(medianaSalarios(salariosColSorted))