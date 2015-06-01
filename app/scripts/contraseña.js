$.validator.addMethod("pass", function(value, element) {
	$passw = $("#password").val();   
	if ($passw.length > 7 && ($passw.match(/[A-z]/) && $passw.match(/[A-Z]/) 
		&& $passw.match(/[0-9]/))) {
		return true;
	}
	return false;
}, "Contraseña incorrecta, debe ser una contraseña segura.");
/*$("#contrasena1").complexify({}, callback(valid, complexity){
    alert("Complejidad de la contraseña: " + complexity);
  });*/
