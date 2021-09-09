// const precioOriginal = 120;
// const descuento = 18;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// })

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("inputPrice");
  const inputPriceValue = Number(inputPrice.value);
  const inputDiscount = document.getElementById("inputDiscount");
  const inputDiscountValue = Number(inputDiscount.value);
  const precioConDescuento = calcularPrecioConDescuento(inputPriceValue, inputDiscountValue)
  const resultP = document.getElementById("resultPrice");
  resultP.innerText = "El precio con descuento es: $" + precioConDescuento
}

//.innerHTML vs .innerText
// .innerHTML manda u obtine el contenido HTML de un elemento
// .innerText manda u obtiene el texto de un elemento