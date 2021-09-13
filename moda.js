const lista1 = [
  1,2,3,1,2,3,2,2,2,4
]

const listaCount = {}

lista1.map(
  function(elemento){
    if (listaCount[elemento]){
    listaCount[elemento] += 1
    } else {
      listaCount[elemento] = 1
    }
  }
)