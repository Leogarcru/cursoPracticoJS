const lista1 = [
  1,2,3,1,2,3,2,2,2,4,4,4,4,4,4,4,4,4
]

const listaCount = {}

lista1.map(
  function(elemento){
    if (listaCount[elemento]){
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
);

const listaCountArray = Object.entries(listaCount);

const listaCountArraySort = listaCountArray.sort(
  function (a,b){
    return a[1] - b[1];
  }
);

console.log (listaCountArraySort[listaCountArraySort.length - 1])
console.log (listaCountArraySort[listaCountArraySort.length - 1][0])