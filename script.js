function calcular() {


  const montocuenta = parseFloat(document.getElementById("montocuenta").value);
  const montousuario = parseFloat(document.getElementById("montousuario").value);
  const porcentajePropina = parseFloat(document.getElementById("porpropina").value);

if(isNaN(montocuenta)) {
	alert("El monto de la cuenta no puede estar vacío");
	return;
}

if(montocuenta<0 ) {
	alert("El monto de la cuenta debe ser mayor a $0");
	return;
}

if(isNaN(montousuario)) {
	alert("El monto del usuario no puede estar vacío");
	return;
}

if(montousuario<0 ) {
	alert("El monto del usuario debe ser mayor a $0");
	return;
}


  const propina = (montocuenta * porcentajePropina) / 100;
  const totalAPagar = montocuenta + propina;
  const vuelto = montousuario - totalAPagar;


  document.getElementById("propina").value = propina;
  document.getElementById("totalapagar").value = totalAPagar;
  document.getElementById("vuelto").value = vuelto;

}