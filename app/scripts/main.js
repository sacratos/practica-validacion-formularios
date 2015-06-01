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
            maxlenght: 9,
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
        ///////////////////////////////////
        cp: {
            digits: true,
            required: true,
            minlength: 5,
            maxlenght: 5,
            remote: 'php/validaPostal.php',
        },
        localidad: {
            required: true,
        },
        provincia: {
            required: true,
        },
        cuenta: {
            iban: true,
            required: true,
        },
        ////////////////////////////////////
        usuario: {
            required: true,
            minlength: 4,
        },
        contrasena1: {
            required: true,
            pass: true,
            minlenght: 7,
        },
        contrasena2: {
            equalTo: contrasena1,
        }
    },
    messages: {
        nombre: {
            required: 'Escribe tu nombre',
            lettersonly: 'Por favor, sólo caracteres',
        },
        apellidos: {
            required: 'Escribe tus apellidos',
        },
        telefono: {
            required: 'Por favor, escribe tu telefono',
            minlength: 'Por favor, no escribas menos de 9 caracteres.',
            maxlength: 'Por favor, no escribas mas de 9 caracteres.',
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
            iban: 'Por favor, escribe una cuenta iban valida',
            required: 'Por favor, escribe tu cuenta iban',
        },
        cp: {
            digits: 'Por favor, solo digitos',
            required: 'Por favor, escribe tu codigo postal',
            minlength: 'Por favor, escribe 5 numeros',
            maxlength: 'Por favor, escribe 5 numeros',
        },
        localidad: {
            required: 'Por favor, escribe tu localidad',
        },
        provincia: {
            required: 'Por favor, escribe tu provincia',
        },
        usuario: {
            required: 'Por favor, escribe tu nombre de usuario',
            minlength: 'Usuario: minimo 4 caracteres',
        },
        contrasena1: {
            required: 'Por favor, escribe tu contraseña',
            minlenght: 'Contraseña de minimo 7 caracteres',
        },
        contrasena2: {
            equalTo: 'Las contraseñas no coinciden',
        }
    }
});
$('#particular').toggle();
$('#radios-particular').change(function(evento) {
    console.log('cambio a Particular!');
    $('#particular').fadeIn(700);
    $('#empresa').toggle();
});
$('#radios-empresa').change(function(evento) {
    console.log('cambio a Empresa!');

    $('#empresa').fadeIn(700);
    $('#particular').toggle();
});
$("#cp").on('focusout', function() {
        var codigo = $("#cp").val();
        var longi = codigo.length;
        while (longi < 5) {
            codigo = "0" + codigo;
            longi++;
        }
        $('#cp').attr('placeholder', codigo);
        //$("#cp").val(codigo);   
    })
    .on('click', function() {
        var codigo = $("#cp").val();
        var longi = codigo.length;
        while (longi < 5) {
            codigo = codigo + "0";
            longi++;
            $('#cp').attr('placeholder', codigo);
        }
    });

function actualizaNombreApellidos() {
    if ($("#radios-particular").is(':checked')) {
        $("#nomparticular").val($("#nombre").val() + " " + $("#apellidos").val());
    }
}
$(document).on("change, keyup", "#nombre", actualizaNombreApellidos);
$(document).on("change, keyup", "#apellidos", actualizaNombreApellidos);
