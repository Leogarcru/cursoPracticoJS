// const precioOriginal = 120;
// const descuento = 18;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// })

const cupones = [
  {nombre: "SEIKA", valor: 15},
  {nombre: "ESCON", valor: 25},
  {nombre: "PLATZI", valor: 50}
]

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount(){
  const resultP = document.getElementById("resultPrice");
  resultP.innerText = "";
  const inputPrice = document.getElementById("inputPrice");
  const inputPriceValue = Number(inputPrice.value);
  
  const inputCupon = document.getElementById("inputDiscount");
  const cuponName = cupones.find(cupon => cupon.nombre == inputCupon.value)
  
  if (cuponName == undefined){
    // const resultP = document.getElementById("resultPrice");
    resultP.innerText = "Cupon no valido, revisa tu ortografia";
  } else {
    const resultP = document.getElementById("resultPrice");
    console.log(cuponName.valor)
    // const inputDiscount = document.getElementById("inputDiscount");
    // const inputDiscountValue = Number(inputDiscount.value);
    const inputDiscountValue = Number(cuponName.valor);
    const precioConDescuento = calcularPrecioConDescuento(inputPriceValue, inputDiscountValue)
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento
  }
}

//.innerHTML vs .innerText
// .innerHTML manda u obtine el contenido HTML de un elemento
// .innerText manda u obtiene el texto de un elemento