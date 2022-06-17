//const precioOriginal = 120;
//const descuento = 18;



function CalcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById ("InputPrice");
    const priceValue = inputPrice.value; 

    const inputDiscount = document.getElementById ("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = "El Precio con descuento son: $" + precioConDescuento
}


//console.log({
  //  precioOriginal,
 // descuento,
//  porcentajePrecioConDescuento,
//  precioConDescuento,
//});