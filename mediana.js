function esPar(numero){
  if(numero%2 == 0){
    return true;
  } else {
    return false;
  }
}

function mediana(lista){
  console.group("mediana");
  lista.sort(function(a,b){
    return a - b;
  });
  console.log("lista ordenada " + lista)
  const mitadlista = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    console.log("par " + lista[mitadlista - 1] + " y " + lista[mitadlista]);
    const mediana = (lista[mitadlista - 1] + lista[mitadlista]) / 2;
    console.groupEnd();
    console.log(mediana);
    document.getElementById("result").innerText = mediana;
    return mediana;
  }else{
    console.log("impar " + lista[mitadlista]);
    const mediana = lista[mitadlista];
    console.groupEnd();
    console.log(mediana);
    document.getElementById("result").innerText = mediana;
    return mediana;
  }
}