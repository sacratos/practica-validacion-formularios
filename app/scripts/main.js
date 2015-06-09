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
            remote: {
                param: {
                    url: 'php/evaluar-nif.php',
                    type: 'get'
                },
            },
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
            minlength: 10,
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
            minlength: 'Contraseña de minimo 10 caracteres',
        },
        contrasena2: {
            equalTo: 'Las contraseñas no coinciden',
        }
    }
});
$('#repemail').focusout(function() {
    if ($('#email1').val() == $('#repemail').val()) {
        $('#usuario').val($('#email1').val());
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
     var caracteres = $("#cp").val();
     var num = 5 - caracteres.length;
     var cero = "0";

     if (num > 0) {
         for (i = 1; i < num; i++) {
             cero += "0";
         }

         $("#cp").val(cero + caracteres);
     } else if (num <= 0) {
         $("#cp").val(caracteres);
     }

     var cod = new Array();


     cod[1] = "Alava";
     cod[2] = "Albacete";
     cod[3] = "Alicante";
     cod[4] = "Almeria";
     cod[5] = "Avila";
     cod[6] = "Badajoz";
     cod[7] = "Illes Balears";
     cod[8] = "Barcelona";
     cod[9] = "Burgos";
     cod[10] = "Caceres";
     cod[11] = "Cadiz";
     cod[12] = "Castellon";
     cod[13] = "Ciudad Real";
     cod[14] = "Cordoba";
     cod[15] = "A Coruña";
     cod[16] = "Cuenca";
     cod[17] = "Girona";
     cod[18] = "Granada";
     cod[19] = "Guadalajara";
     cod[20] = "Guipuzcoa";
     cod[21] = "Huelva";
     cod[22] = "Huesca";
     cod[23] = "Jaen";
     cod[24] = "Leon";
     cod[25] = "Lleida";
     cod[26] = "La Rioja";
     cod[27] = "Lugo";
     cod[28] = "Madrid";
     cod[29] = "Malaga";
     cod[30] = "Murcia";
     cod[31] = "Navarra";
     cod[32] = "Ourense";
     cod[33] = "Asturias";
     cod[34] = "Palencia";
     cod[35] = "Las Palmas";
     cod[36] = "Pontevedra";
     cod[37] = "Salamanca";
     cod[38] = "S.C. Tenerife";
     cod[39] = "Cantabria";
     cod[40] = "Segovia";
     cod[41] = "Sevilla";
     cod[42] = "Soria";
     cod[43] = "Tarragona";
     cod[44] = "Teruel";
     cod[45] = "Toledo";
     cod[46] = "Valencia";
     cod[47] = "Valladolid";
     cod[48] = "Vizcaya";
     cod[49] = "Zamora";
     cod[50] = "Zaragoza";
     cod[51] = "Ceuta";
     cod[52] = "Melilla";
     $cp = $("#cp").val();
     $cpostal = $cp.substr(0, 2);
     if ($cpostal == 00 || $cp < 1000 || $cp > 52999) {
         alert("el CP es erroneo");

     }

     if ($cpostal.substr(0, 1) == 0) {

         $cpostal = $cp.substr(1, 1);

     }

     $("#provincia").val(cod[$cpostal]);
     $.ajax({
         url: "php/cargarProvincias.php",
         type: "POST",
         data: "cpostal=" + $("#cp").val(),
         success: function(opciones) {
             $("#localidad").html(opciones);
             $("#localidad").val(cod[$cpostal]);
         }

     })

 });
/*
$('#provincia').focusin(function() {
    alert('Entra en provincia');
    if ($('#localidad').val()=="") {
        alert('Rellena antes la localidad');
    }else{
        alert('el campo de localidad esta relleno');
    }
});*/

var complejo = 0;
$('#contrasena1').on('focusin',function() {
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
            $('#labelComplejidad').html('Contraseña compleja.');
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