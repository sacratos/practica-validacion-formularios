'use strict';
$('#formulario').validate({
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    rules: {
        nombre: {
            required: true,
            lettersonly: true,
        },
        apellidos: {
            required: true,
        },
        telefono: {
            required: true,
            minlenght: 9,
            digits: true,
        },
        email1: {
            required: true,
            email: true,
            remote: 'php/validarEmail.php',
        },
        cuenta: {
            iban: true,
            required: true,
        },
        cp: {
            digits: true,
            required: true,
            minlength: 5,
            remote: 'php/validaPostal.php',
        },
        localidad: {
            required: true,
        },
        provincia: {
            required: true,
        },
        usuario: {
            required: true,
            minlength: 4,
        },
        contrasena1: {
            required: true,
        },
        contrasena2: {
            required: true,
            equalTo: contrasena1,
        }
    }
});
