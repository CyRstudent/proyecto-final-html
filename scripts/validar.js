/* eslint-disable no-unused-vars */
/**
 * @function
 * @return {String}
 */
function validar() {
	const pass1 = document.getElementById('pw1').value;
	const pass2 = document.getElementById('pw2').value;
	const salida = document.getElementById('salida');
	if (pass1 !== pass2) {
		salida.innerHTML= '<br><i>Las contraseñas no coinciden</i></br>';
	} else {
		salida.innerHTML = '<br>Bienvenido!</br>';
	}
	return salida.innerHTML;
};
