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
        repemail: {
            email: true,
            remote: 'php/validarEmail.php',
            equalTo: email1,
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
            minlenght: 7,
        },
        contrasena2: {
            equalTo: contrasena1,
        }
    },
    messages:{
        nombre: {
            required: 'Escribe tu nombre',
            lettersonly: 'Por favor, sólo caracteres',
        },
        apellidos: {
            required: 'Escribe tus apellidos',
        },
        telefono: {
            required: "Por favor, escribe tu telefono",
            minlength: $.validator.format('Por favor, no escribas menos de {0} caracteres.'),
            maxlength: $.validator.format('Por favor, no escribas mas de {0} caracteres.'),
            digits: 'Por favor, escribe sólo dígitos.',
        },
        email: {
            required: 'Escribe tu email',
            email: 'Por favor, escribe una dirección de correo válida.',
        },
        repemail: {
            email: 'Por favor, escribe una dirección de correo válida.',
            equalTo: 'Los emails no coinciden.',
        },
        cuenta: {
            iban: "Por favor, escribe una cuenta iban valida",
            required: "Por favor, escribe tu cuenta iban",
        },
        /*cp: {
            digits: true,
            required: true,
            minlength: 5,
        },*/
        localidad: {
            required: "Por favor, escribe tu localidad",
        },
        provincia: {
            required: "Por favor, escribe tu provincia",
        },
        usuario: {
            required: "Por favor, escribe tu nombre de usuario",
            minlength: "Usuario: minimo 4 caracteres",
        },
        contrasena1: {
            required: "Por favor, escribe tu contraseña",
            minlenght: "Contraseña de minimo 7 caracteres",
        },
        contrasena2: {
            equalTo: "Las contraseñas no coinciden",
        }
    }
});
