const lista1 = [
  100,
  200,
  300,
  500
];

function calcularMedia(lista){
  // let sumaLista = 0;
  
  // for (let i = 0; i < lista.length; i++){
  //   sumaLista += lista[i]
  // }
  const sumaLista = lista.reduce(
    function(acumulado = 0, elemento){
      return acumulado + elemento;
    }
  );
  
  const promedio = sumaLista / lista.length;
  return promedio;
}