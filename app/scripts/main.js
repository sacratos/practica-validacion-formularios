$("#formulario").validate({
onkeyup: false,
onfocusout: false,
onclick: false,
rules: {
    nombre: {
        required: true,
        minlength: 2,
        lettersonly:true
    },
    apellidos: {
        required: true
    },
    telefono:{
        required:true,
        digits:true
    },
    email1:{
        required:true,
        email:true,
        remote:"php/validarEmail.php"
    },
    cuenta: {
            iban: true,
            required: true
    },
    cp:{
        required:true,
        minlength: 5,
        maxlenght: 5,
        remote:"php/validarPostal.php"
    },
    localidad:{
        required:true
    },
    provincia:{
        required:true
    },
    
}
});