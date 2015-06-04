'use strict';
$('#formulario').validate({
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
            digits: true,
            minlength: 9,
        },
        email1: {
            required: true,
            email: true,
            /*remote: 'php/validarEmail.php',*/
        },
        repemail: {
            email: true,
            equalTo: email1,
        },
        ///////////////////////////////////
        cp: {
            required: true,
            digits: true,
            minlength: 5,
        },
        nif:{
            nif: true,
        },
        cif: {
            cif:true,
        },
        localidad: {
            required: true,
            lettersonly: true,
        },
        provincia: {
            required: true,
            lettersonly: true,
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
            minlength: 6,
            /*complejidad: true,*/
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
            lettersonly: 'Por favor, sólo caracteres',
        },
        provincia: {
            required: 'Por favor, escribe tu provincia',
            lettersonly: 'Por favor, sólo caracteres',
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

$('#empresa').toggle();
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
$('#cp').on('focusout',function() {

    var cp = '00000';
    cp = $('#cp').val();
    var cpLon = cp.length;
    if (cpLon < 5) {
        var numCeros = 5 - cpLon;
        var ceros = '';
        for (var i = 0; i < numCeros; i++) {
            ceros += '0';
        }
        $('#cp').val(ceros + cp);
    }

});

var complejo = 0;
$('#contrasena1').focusin(function() {
    $('#contrasena1').complexify({
        minimumChars: 6
    }, function(valid, complexity) {
        $('#complejidad').val(complexity);
        complejo = complexity;

        if (complexity < 20 && complexity > 0) {
            $('#labelComplejidad').html('Contraseña débil.');
        } else if (complexity >= 20 && complexity < 40) {
            $('#labelComplejidad').html('Contraseña normal.');
        } else if (complexity == 0) {
            $('#labelComplejidad').html('');
        } else {
            $('#labelComplejidad').html('Contraseña muy buena.');
        }
    });
});

function actualizaNombreApellidos() {
    if ($("#radios-particular").is(':checked')) {
        $("#nomparticular").val($("#nombre").val() + " " + $("#apellidos").val());
    }
}
$(document).on("change, keyup", "#nombre", actualizaNombreApellidos);
$(document).on("change, keyup", "#apellidos", actualizaNombreApellidos);