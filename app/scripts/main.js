$("#formulario").validate({
onkeyup: false,
onfocusout: false,
onclick: false,
rules: {
    nombre: {
        required: true,
        minlength: 2
    },
    apellidos: {
        required: true,
    }/*,
    comentarios: "required",
    cuenta: "cuentabanco",
    email:{
        required:true,
        remote:"php/validarEmail.php"
    },
    cp:{
        required:true,
        minlength: 5,
        maxlenght: 5,
        remote:"php/validarPostal.php"
    },*/
    
}
});